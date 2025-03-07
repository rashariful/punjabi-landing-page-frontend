// import Image from "next/image";
// import logo from "@/public/images/colorful_logo.png"
// import Checkout from "@/components/Checkout";
// import HomePage from "@/components/homePage/HomePage";
import productImage from "@/public/images/fMVNElIeW1jcHz4B1aIJwarv1RZt1YiNA1fVVfej.jpeg"
// import ReviewSection from "@/components/Review";
// import productImg2 from "@/public/images/Dark-Green-Ash-Grey-Floral-2.webp"
import productImage1 from "@/public/images/panjabi-1.jpeg"
import productImage2 from "@/public/images/panjabi-2.jpeg"
import productImage3 from "@/public/images/panjabi-3.png"
import productImage4 from "@/public/images/product-4.jpeg"
import productImage5 from "@/public/images/product-5.webp"
import productImage6 from "@/public/images/panjabi-6.jpg"
import productImage7 from "@/public/images/panjabi-7.webp"
import productImage8 from "@/public/images/panjabi-8.jpeg"
import HomePage from "@/components/homePage/HomePage";
// import innerProductImage from "@/public/images/inner.jpg"
const product = {
    id: 1,
    name: "প্রিমিয়াম পাঞ্জাবি ",
    title: "প্রিমিয়াম পাঞ্জাবি ",
    totalPrice: 2240,
    offerPrice: 1490,
    startDate: "2025-03-01T10:00:00Z",
    endDate: "2025-03-30T23:59:59Z",
    details: [
      // "পাঞ্জাবি – নামাজ ও বিশেষ উপলক্ষের জন্য আরামদায়ক ও মার্জিত",
      // "তসবিহ – উন্নত মানের প্রার্থনার মালা",
      // "আত্তর – দীর্ঘস্থায়ী, অ্যালকোহল-মুক্ত সুগন্ধি",
      // "জায়নামাজ – নরম ও টেকসই নামাজের মাদুর",
      // "খিমার – মহিলাদের জন্য শালীন ও স্টাইলিশ হিজাব"
      { 
        productImage: productImage8.src,
        productName: "পাঞ্জাবি",
        productPrice: 1200
      },
      { 
        productImage: productImage1.src,
        productName: "পাঞ্জাবি",
        productPrice: 550
      },
      { 
        productImage: productImage2.src,
        productName: "পাঞ্জাবি",
        productPrice: 180
      },
      { 
        productImage: productImage3.src,
        productName: "পাঞ্জাবি",
        productPrice: 110
      },
      { 
        productImage: productImage4.src,
        productName: "পাঞ্জাবি",
        productPrice: 25
      },
      { 
        productImage: productImage5.src,
        productName: "পাঞ্জাবি",
        productPrice: 30
      },
      { 
        productImage: productImage6.src,
        productName: "পাঞ্জাবি",
        productPrice: 60
      },
      { 
        productImage: productImage7.src,
        productName: "পাঞ্জাবি",
        productPrice: 80
      },
    ],
    size: true,
    media: {
      type: "image",
      url: productImage.src,
    },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    image: productImage.src,
    colors: [
      { name: "Black", imageUrl: productImage.src },
      { name: "White", imageUrl: productImage.src },
      { name: "Blue", imageUrl: productImage.src },
    ],
    bgColor: "[#0099DD]"
  // package2: {
  //   id: 2, 
  //   name: "প্রিমিয়াম লং খিমার প্যাকেজ",
  //   title: "প্রিমিয়াম লং খিমার প্যাকেজ",
  //   totalPrice: 1815,
  //   offerPrice: 1490,
  //   startDate: "2025-03-01T10:00:00Z",
  //   endDate: "2025-03-30T23:59:59Z",
  //   details: [
  //     // "পাঞ্জাবি – নামাজ ও বিশেষ উপলক্ষের জন্য আরামদায়ক ও মার্জিত",
  //     // "তসবিহ – উন্নত মানের প্রার্থনার মালা",
  //     // "আত্তর – দীর্ঘস্থায়ী, অ্যালকোহল-মুক্ত সুগন্ধি",
  //     // "জায়নামাজ – নরম ও টেকসই নামাজের মাদুর",
  //     // "খিমার – মহিলাদের জন্য শালীন ও স্টাইলিশ হিজাব"
  //     { 
  //       productImage: productImg2.src,
  //       productName: "লং খিমার",
  //       productPrice: 750
  //     },
  //     { 
  //       productImage: jaynamajProductImage.src,
  //       productName: "জায়নামাজ",
  //       productPrice: 750
  //     },
  //     { 
  //       productImage: atorProductImage.src,
  //       productName: "আত্তর",
  //       productPrice: 180
  //     },
  //     { 
  //       productImage: tosbihProductImage.src,
  //       productName: "তসবিহ",
  //       productPrice: 110
  //     },
  //     { 
  //       productImage: meswakProductImage.src,
  //       productName: "মেসওয়াক",
  //       productPrice: 25
  //     },
  //     { 
  //       productImage: innerProductImage.src,
  //       productName: "ইনার ক্যাপ",
  //       productPrice: 60
  //     },
  //     { 
  //       productImage: islamProductImage.src,
  //       productName: "ইসলামিক বই",
  //       productPrice: 60
  //     },
  //     { 
  //       productImage: boxProductImage.src,
  //       productName: "বক্স",
  //       productPrice: 80
  //     },
  //   ],
  //   size: false,
  //   media: {
  //     type: "image",
  //     url: productImg2.src,
  //   },
  //   video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //   image: productImg2.src,
  //   colors: [
  //     { name: "Black", imageUrl: productImage.src },
  //     { name: "White", imageUrl: productImage.src },
  //     { name: "Blue", imageUrl: productImage.src },
  //   ],
  //   bgColor: "[#DE3163] "
  // }
};


export default function Home() {
  return (
    <main className="bg-orange-50 overflow-x-hidden px-4">
      {/* <Tab products={products}/> */}
       <HomePage product={product}/> 
      {/* checkout */}
      {/* <Checkout product={product}/> */}
      {/* footer */}
      <footer className="bg-[#e0e0e0] py-3 text-center text-black">
        <p className="text-[15px]">
          Copyright © 2025 Prio Fashion BD | This website made with{" "}
          <span className="inline-block">
            <svg viewBox="0 0 24 24" fill="red" className="w-[18px] h-[18px] -mt-[2px]">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>{" "}
          by <span className="text-blue-400 font-bold">Digital Agency Park</span>
        </p>
      </footer>
    </main>
  );
}
