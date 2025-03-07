"use client"

// import { useState } from "react"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
// import OrderModal from "../shared/OrderModal"
import CountdownTimer from "../shared/CountdownTimer"
import ReviewSection from "../Review"
import WhatsAppChatButton from "./WhatsAppChatButton"
import Checkout from "../Checkout"

interface ProductDetail {
    productImage: string;
    productName: string;
    productPrice: number;
}
type Product = {
    id: number;
    name: string;
    title: string;
    totalPrice: number;
    offerPrice: number;
    startDate: string;
    endDate: string;
    details: ProductDetail[];
    media: {
        type: string;
        url: string;
    };
    video: string;
    image: string;
    colors: {
        name: string;
        imageUrl: string;
    }[];
    bgColor: string;
    size: boolean;
};


const HomePage = ({ product }: { product: Product }) => {
    // const [showModal, setShowModal] = useState(false)
    const handleOrderClick = () => {
        window.dispatchEvent(new Event("scroll-to-checkout"));
    };

    const convertToBengaliNumerals = (num: number): string => {
        const bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

        // Split the number into integer and decimal parts
        const [integerPart, decimalPart] = num.toString().split(".");

        // Convert integer part
        const convertedInteger = integerPart
            .split("")
            .map((digit) => bengaliNumerals[parseInt(digit)])
            .join("");

        // If there's a decimal part, convert it too
        const convertedDecimal = decimalPart
            ? "." + decimalPart.split("").map((digit) => bengaliNumerals[parseInt(digit)]).join("")
            : "";

        return convertedInteger + convertedDecimal;
    };
    const priceInBengali = convertToBengaliNumerals(product.offerPrice);
    return (
        <main className="max-w-5xl mx-auto pt-5">
            <div className="flex flex-col lg:flex-row justify-between items-center pb-10 space-y-5 lg:space-y-0">
                <div className="lg:w-[64%]">
                    <h2 className="text-center lg:text-left text-4xl font-bold text-gray-700 w-full">আমাদের চমৎকার অফার স্বাগতম</h2>
                </div>
                <div className="lg:w-[36%]">
                    <CountdownTimer startDate={product?.startDate} endDate={product?.endDate} />
                </div>
            </div>
            <div className="">
                {/* Main Banner */}
                <div className={` bg-gradient-to-r to-[#b828b3] from-[#93278F] text-white text-center`}>
                    {/* Regular Price */}
                    <div className="text-[28px] font-medium leading-tight pt-4">
                        রেগুলার প্রাইস <span className="text-[#FFE600]">{product.totalPrice}</span> টাকা
                    </div>

                    {/* Offer Price */}
                    <div className="text-[40px] font-bold leading-tight mt-2">
                        অফার প্রাইস মাত্র <span className="text-[#FFE600] underline decoration-[#FFE600]">{product?.offerPrice}</span> টাকা
                    </div>

                    {/* Limited Time Text */}
                    <div className="text-[24px] pb-4 mt-2">অফারটি সীমিত সময়ের জন্য</div>
                </div>

                {/* Bottom Text */}
                <div className="text-center text-[22px] mt-4 text-black">
                    খুব শিঘ্রই প্রাইস বাড়ানো হবে, <span className="text-[#008000]">অফার শেষ হওয়ার পূর্বেই অর্ডার করুন</span>
                </div>

                {/* Order Button */}
                <div className="flex justify-center mt-10 mb-5">
                    <button onClick={handleOrderClick} className={`bg-[#93278F] animate-bounce text-white px-8 py-2.5 rounded-md flex items-center gap-2 text-xl`}>
                        <ShoppingCart className="w-6 h-6" />
                        অর্ডার করুন
                    </button>
                </div>
            </div>
            <div>
                {product.media.type === "image" ? (
                    <div className="relative w-full h-[500px] lg:h-[600px] !rounded-lg">
                        <Image
                            src={product.media.url || "/placeholder.svg"}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            // className="w-full"
                            className="absolute inset-0 right-0 !w-full !h-full !rounded-lg"
                        />
                    </div>
                    // <div className="">
                    //     <div className="relative !w-[500px] !h-[500px]">
                    //         <Image src={product.media.url} alt={product.name} fill className="w-full" />
                    //     </div>
                    // </div>
                ) : (
                    <div className="w-full h-[100vh] relative overflow-x-hidden overflow-y-hidden">
                        <iframe
                            src={product.media.url}
                            title="Product Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                )}
            </div>

            <div className=" py-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl md:text-3xl font-bold mb-4 text-black">{product.name}</h1>
                    {/* <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p> */}
                    <p className="text-2xl font-semibold mb-4 text-black">${priceInBengali}</p>
                </div>

                <div className="flex justify-center my-10">
                    <button onClick={handleOrderClick} className={`bg-[#93278F] animate-bounce text-white px-8 py-2.5 rounded-md flex items-center gap-2 text-xl `}>
                        <ShoppingCart className="w-6 h-6" />
                        অর্ডার করুন
                    </button>
                </div>

                <div className="flex justify-center">
                    <div className="">
                        <h2 className="text-center text-3xl font-bold mb-5 text-black">রমজান স্পেশাল {product.title}:</h2>
                        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {product?.details?.map((product, index) => (
                                <div key={index} className="flex items-center text-3xl text-black">
                                   
                                    <Image src={product.productImage || "/placeholder.svg"} alt={product.productName} width={200} height={200} className=" " />
                                    
                                    <div className="flex items-center justify-between">
                                        <h1>{product.productName}</h1>
                                        <p>{product.productPrice}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 max-w-5xl mx-auto">
                            {product?.details?.map((product, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className="w-48 h-48 md:w-56 md:h-56 relative mb-2 !rounded-xl">
                                        <Image
                                            src={product.productImage || "/placeholder.svg"}
                                            alt={product.productName}
                                            fill
                                            className="object-contain w-full h-full !rounded-xl"
                                        />
                                    </div>
                                    <div className="flex items-center !justify-between gap-10">
                                        <h1 className="text-gray-800 font-semibold">{product.productName}</h1>
                                        <p className="text-gray-700 font-semibold ">৳{product.productPrice}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center my-10">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-semibold pt-4 text-black">
                                    রেগুলার প্রাইস <span className="text-purple-700">{product.totalPrice}</span> টাকা
                                </div>

                                {/* Offer Price */}
                                <div className="text-2xl md:text-3xl font-semibold mt-2 text-black">
                                    অফার প্রাইস মাত্র <span className="text-purple-700 underline decoration-purple-700">{product?.offerPrice}</span> টাকা
                                </div>
                                <div className="flex justify-center">
                                <button onClick={handleOrderClick} className={`bg-[#93278F] animate-bounce text-white px-8 py-2.5 rounded-md flex items-center gap-2 text-xl mt-10 `}>
                                    <ShoppingCart className="w-6 h-6" />
                                    অর্ডার করুন
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[100vh] relative overflow-x-hidden overflow-y-hidden py-10">
                    <iframe
                        src={product.video}
                        title="Product Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>

                {/*  */}

                <ReviewSection />
                <WhatsAppChatButton />
                <Checkout product={product} />
            </div>
        </main>
    )
}

export default HomePage

