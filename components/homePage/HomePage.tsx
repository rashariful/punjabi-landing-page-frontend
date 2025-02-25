"use client"

// import { useState } from "react"
import Image from "next/image"
import { CheckCircle, ShoppingCart } from "lucide-react"
// import OrderModal from "../shared/OrderModal"
import bikasPayment from "@/public/images/payment-scan.jpg"
import CountdownTimer from "../shared/CountdownTimer"
import ReviewSection from "../Review"


type Product = {
    id: number;
    name: string;
    title: string;
    price: number;
    startDate: string;
    endDate: string;
    description: string[];
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
    const priceInBengali = convertToBengaliNumerals(product.price);
    return (
        <main className="max-w-5xl mx-auto pt-5">
            <div className="flex flex-col lg:flex-row justify-between items-center pb-10 space-y-5 lg:space-y-0">
                <div className="lg:w-[64%]">
                    <h2 className="text-center lg:text-left text-4xl font-bold text-gray-700 w-full">আমাদের চমৎকার প্যাকেজ স্বাগতম</h2>
                </div>
                <div className="lg:w-[36%]">
                    <CountdownTimer startDate={product?.startDate} endDate={product?.endDate} />
                </div>
            </div>
            <div className="">
                {/* Main Banner */}
                <div className={`${product.bgColor} text-white text-center`}>
                    {/* Regular Price */}
                    <div className="text-[28px] font-medium leading-tight pt-4">
                        রেগুলার প্রাইস <span className="text-[#FFE600]">২৫০০</span> টাকা
                    </div>

                    {/* Offer Price */}
                    <div className="text-[40px] font-bold leading-tight mt-2">
                        অফার প্রাইস মাত্র <span className="text-[#FFE600] underline decoration-[#FFE600]">{product?.price}</span> টাকা
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
                    <button onClick={handleOrderClick} className="bg-green-600 hover:bg-green-600/80 animate-bounce text-white px-8 py-2.5 rounded-md flex items-center gap-2 text-xl">
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
                    <p className="text-2xl font-semibold mb-4">${priceInBengali}</p>
                </div>

                <div className="flex justify-center my-10">
                    <button onClick={handleOrderClick} className="bg-green-600 hover:bg-green-600/80 animate-bounce text-white px-8 py-2.5 rounded-md flex items-center gap-2 text-xl">
                        <ShoppingCart className="w-6 h-6" />
                        অর্ডার করুন
                    </button>
                </div>

                <div className="flex justify-center">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold mb-5 text-black">রমজান স্পেশাল প্যাকেজ অন্তর্ভুক্ত:</h2>
                        <ul className="space-y-4">
                            {product.description.map((point, index) => (
                                <li key={index} className="flex items-center text-3xl text-black">
                                    <CheckCircle className="text-green-500 mr-2 text-2xl" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="w-full h-[100vh] relative overflow-x-hidden overflow-y-hidden py-14">
                    <iframe
                        src={product.video}
                        title="Product Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-black">বিকাশ দিয়ে পেমেন্ট করুন</h3>
                        <Image
                            src={bikasPayment}
                            alt="Bikas-payment method"
                            width={300}
                            height={300}
                        ></Image>
                    </div>

                    <div className="flex justify-end">
                        <div>
                            {/* Bikas transaction step instructions */}
                            <div className="bg-gray-100 rounded-md">
                                <h4 className="font-semibold text-xl text-black mb-2">
                                    বিকাশ থেকে ট্রানজেকশন আইডি পাওয়ার স্টেপ:
                                </h4>
                                <ul className="list-disc pl-5 text-lg text-gray-700">
                                    {/* <li>বিকাশ অ্যাপ ওপেন করুন</li>
                                    <li>ট্রানজেকশন হিস্ট্রি দেখুন</li>
                                    <li>ট্রানজেকশন ডিটেইলস সিলেক্ট করুন</li>
                                    <li>ট্রানজেকশন আইডি দেখুন</li>
                                     */}
                                    <li>এসএমএসে ট্রানজেকশন আইডি দেখুন</li>
                                    <li>ট্রানজেকশন আইডি কপি করুন</li>
                                    <li>এটি আপনার অর্ডার কনফার্মেশনে ব্যবহার করুন।</li>
                                </ul>
                                <h4 className="font-semibold text-xl text-black mt-4">
                                    অ্যাপে ট্রানজেকশন আইডি দেখার পদ্ধতি:
                                </h4>
                                <p className="text-lg text-gray-700">
                                    ১. বিকাশ অ্যাপ খুলুন।
                                    <br />
                                    ২. &quot;Transaction History&quot; অপশনে যান।
                                    <br />
                                    ৩. আপনার পেমেন্ট ট্রানজেকশন সিলেক্ট করুন।
                                    <br />
                                    ৪. &quot;Transaction ID&quot; অথবা &quot;TXN ID&quot; খুঁজুন, যা আপনি ট্রানজেকশন <br /> ডিটেইলসে দেখতে পাবেন।
                                    <br />
                                    ৫. এটি আপনার অর্ডার কনফার্মেশনে ব্যবহার করুন।
                                </p>
                            </div>
                            <button
                            onClick={handleOrderClick}
                            className="mt-10 bg-green-600 hover:bg-green-600/80 animate-bounce text-white px-8 py-2.5 rounded-md flex items-center gap-2 text-xl "
                        >
                            <ShoppingCart className="w-6 h-6" />
                            অর্ডার করুন
                        </button>
                        </div>
                    </div>
                </div>

                <ReviewSection/>
            </div>
        </main>
    )
}

export default HomePage

