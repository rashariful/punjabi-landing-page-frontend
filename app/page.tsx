// import Image from "next/image";
// import logo from "@/public/images/colorful_logo.png"
// import Checkout from "@/components/Checkout";
// import HomePage from "@/components/homePage/HomePage";
import productImage from "@/public/images/fMVNElIeW1jcHz4B1aIJwarv1RZt1YiNA1fVVfej.jpeg"
// import ReviewSection from "@/components/Review";
import Tab from "@/components/homePage/Tab";
import productImg2 from "@/public/images/Dark-Green-Ash-Grey-Floral-2.webp"

const products = {
  package1: {
    id: 1,
    name: "প্রিমিয়াম রমজান পুরুষ প্যাকেজ",
    title: "প্রিমিয়াম রমজান পুরুষ প্যাকেজ",
    price: 900.99,
    startDate: "2025-02-16T10:00:00Z",
    endDate: "2025-08-30T23:59:59Z",
    description: [
      "পাঞ্জাবি – নামাজ ও বিশেষ উপলক্ষের জন্য আরামদায়ক ও মার্জিত",
      "তসবিহ – উন্নত মানের প্রার্থনার মালা",
      "আত্তর – দীর্ঘস্থায়ী, অ্যালকোহল-মুক্ত সুগন্ধি",
      "জায়নামাজ – নরম ও টেকসই নামাজের মাদুর",
      "খিমার – মহিলাদের জন্য শালীন ও স্টাইলিশ হিজাব"
    ],
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
    bgColor: "bg-[#8833FF]"
  },
  package2: {
    id: 2, 
    name: "প্রিমিয়াম রমজান মহিলা প্যাকেজ",
    title: "প্রিমিয়াম রমজান মহিলা প্যাকেজ",
    price: 1000,
    startDate: "2025-02-16T10:00:00Z",
    endDate: "2025-06-30T23:59:59Z",
    description: [
      "পাঞ্জাবি – নামাজ ও বিশেষ উপলক্ষের জন্য আরামদায়ক ও মার্জিত",
      "তসবিহ – উন্নত মানের প্রার্থনার মালা",
      "আত্তর – দীর্ঘস্থায়ী, অ্যালকোহল-মুক্ত সুগন্ধি",
      "জায়নামাজ – নরম ও টেকসই নামাজের মাদুর",
      "খিমার – মহিলাদের জন্য শালীন ও স্টাইলিশ হিজাব"
    ],
    media: {
      type: "image",
      url: productImg2.src,
    },
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    image: productImg2.src,
    colors: [
      { name: "Black", imageUrl: productImage.src },
      { name: "White", imageUrl: productImage.src },
      { name: "Blue", imageUrl: productImage.src },
    ],
    bgColor: "bg-[#d82ca5]"
  }
};


export default function Home() {
  return (
    <main className="bg-orange-50">
      <Tab products={products}/>
      {/* <HomePage product={product}/> */}
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
          by <span className="text-[#ffa726]">Digital Agency Park</span>
        </p>
      </footer>
    </main>
  );
}
