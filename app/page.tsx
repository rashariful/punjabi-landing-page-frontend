import Image from "next/image";
import logo from "@/public/images/colorful_logo.png"
import banner from "@/public/images/megaphone-948015_1280.jpg"
import product from "@/public/images/coffee-pot-6975431_1280.jpg"
import pestaNut from "@/public/images/pine-nuts-1732073_1280.jpg"
import akhrot from "@/public/images/nuts-5622826_1280.jpg"
import chinaNut from "@/public/images/nuts-228044_1280.jpg"
import kajuNut from "@/public/images/cashew-nuts-1549580_1280.jpg"
import saffron from "@/public/images/saffron-215932_1280.jpg"
import dates from "@/public/images/dates-6638825_1280.jpg"
import katNut from "@/public/images/almonds-21502_1280.jpg"
import { AlertCircle } from "lucide-react"
import checkIcon from "@/public/images/checked.png"
import hero from "@/public/images/acorn-8273451_1280.jpg"


const ingredients = [
  {
    name: "জাফরান",
    image: saffron,
  },
  {
    name: "পেস্তাবাদাম",
    image: pestaNut,
  },
  {
    name: "আখরোট",
    image: akhrot,
  },
  {
    name: "কাজু বাদাম",
    image: kajuNut,
  },
  {
    name: "দেশী চিনাবাদাম",
    image: chinaNut,
  },
  {
    name: "খুরমা খেজুর",
    image: dates,
  },
  {
    name: "কাঠ বাদাম",
    image: katNut,
  },
]

const milkshakeBenefits = [
  "কোষ্ঠকাঠিন্য দূর করে ,মস্তিষ্ক সচল রাখে।",
  "উচ্চ রক্তচাপ ও হৃদপিন্ডের সমস্যাসদিতে রোগ দূর করে।",
  "অতিরিক্ত ঘুম কমাতে সহায়তা করে।",
  "সিকেল (period) অনিয়মিকর ব্যাথা দূর করতে সাহায্য করে।",
  "হজমও ভালো রাখতে সাহায্য করে।",
  "হজম প্রক্রিয়া মজবুত করে।",
  "মস্তিষ্ককে প্রাণবন্ত রাখে।",
  "রক্তে হিমোগ্লোবিন বাড়ায় এছাড়াও আরও এমন অনেক সমস্যার সমাধান আছে খেজুর বাদাম জাফরান মিল্কশেক এ",
]

const motherMilkBenefits = [
  "মাতৃদুগ্ধ সঞ্চালনে ও মায়ের মাংসপেশী, রক্ত ও দৈহ গঠনে সহায়তা করে।",
  "গর্ভকালীন ও স্তন্যদানকারী মায়ের পুষ্টি চাহিদা পূরণ করে।",
  "তরল দুধ শেষ শক্তিশালী করে যা নরমাল ডেলিভারি ওয়ায় সাহায্য করে।",
  "মা ও শিশু উভয়ের টিস্যু বৃদ্ধি ও বিশেষার করে।",
  "ভিটামিন এবং খনিজ যেমন ফলিক এ্যাসিড, আয়রন, ম্যাগনেসিয়াম এবং জিঙ্ক এর ঘাটতি পূরণ করে।",
  "হরমোনাল ইমবালেন্স কে কন্ট্রোলে রাখে, খাবারের প্রতি অনীহা কমায়।",
  "মা ও শিশু উভয়ের দেহে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে।",
  "গর্ভবস্থায় শিশুর মস্তিষ্ক এবং স্নায়ুতন্ত্রের বৃদ্ধি ও বিকাশ ঘটায়।",
  "হজম শক্তি বৃদ্ধি করে ও কোষ্ঠকাঠিন্য দূর করে।",
  "মা ও বাচ্চার আয়ুরনের চাহিদা মেটাতে সাহায্য করে।",
  "বাচ্চার জন্মের পরে মায়ের ওজন কমাতে সাহায্য করে।",
]

export default function Home() {
  console.log(hero);
  return (
    <main className="bg-orange-50">
      <header className="w-full py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className=" relative">
              <Image
                src={logo}
                alt="Digital Deal BD"
                width={300}
                height={300}
                className="object-contain"
                priority
              />
              <div className="absolute left-32 top-20 bg-gradient-to-l from-teal-200 to-blue-500 px-2 rounded text-white font-semibold py-1">Digital Agency <span className="text-blue-500">Park</span></div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full py-4" data-aos="zoom-in-down">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[4/3] w-full">
              <Image src={banner} alt="Saffron Nut Milkshake" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">জাফরান বাদাম মিল্কশেক ও মাদার মিল্ক পাউডার</h1>
            <p className="text-gray-700 leading-relaxed">
              সন্তানের পুষ্টি চাহিদা মেটাতে ও শক্তবতী মা ও শক্তের সন্তানের পুষ্টির সঠিক সমাধানে আদর্শ খাবার। জাফরান বাদাম মিল্কশেক পাউডারে রয়েছে
              প্রচুর ক্যালসিয়াম, ভিটামিন, আয়রন, প্রোটিন এবং অ্যান্টি অক্সিডেন্টের মতো বিভিন্ন উপাদান যা শারীরিক ও মানসিক বৃদ্ধিতে সহায়ক। এছাড়াও
              শারীরিক দূর্বলতা এবং ক্লান্তিভাব দূর করতে এটি তাৎক্ষণিক কাজ করে।
            </p>
            <button className="bg-[#4CAF50] border-dashed border-[3px] border-green-800 rounded-tl-[2rem] rounded-br-[2rem] text-white px-8 py-3 hover:bg-[#45a049] transition-colors">
              অর্ডার করতে চাই
            </button>
          </div>

          {/* Right Image with exact border styling */}
          <div className="relative border-[3px] border-black rounded-tl-[2rem] rounded-br-[2rem]" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">
            <div className="relative border-[3px] border-black rounded-tl-[2rem] rounded-br-[2rem] m-1">
              {/* Outer border */}
              {/* <div className="absolute inset-0 rounded-[2rem] border-[3px] border-black"></div> */}

              {/* Inner border */}
              {/* <div className="absolute inset-[6px] rounded-[1.7rem] border-[3px] border-black"></div> */}

              {/* Image container */}
              <div className="relative m-[12px] rounded-[1.5rem] bg-white p-4">
                <Image
                  src={product}
                  alt="Jafran Milk Shake"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">যে সকল উপাদানে তৈরি?</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-56 h-56 relative mb-4 rounded-tl-xl rounded-br-xl">
                  <Image
                    src={ingredient.image || "/placeholder.svg"}
                    alt={ingredient.name}
                    fill
                    className="object-contain w-full h-full rounded-tl-xl rounded-br-xl"
                  />
                </div>
                <p className="text-lg font-medium text-center">{ingredient.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">উপকারিতাসমূহ</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Milkshake Benefits */}
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <h3 className="text-blue-500 text-2xl font-semibold mb-6">জাফরান বাদাম মিল্কশেকঃ</h3>
              <ul className="space-y-3">
                {milkshakeBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {/* <Check className="w-5 h-5 mt-1 text-[#4FB6E9] flex-shrink-0" /> */}
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image src={checkIcon} alt="icon" fill className="object-contain w-full h-full" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mother Milk Benefits */}
            <div data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
              <h3 className="text-blue-500 text-2xl font-semibold mb-6">জাফরান বাদাম মাদার মিল্কঃ</h3>
              <ul className="space-y-3">
                {motherMilkBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image src={checkIcon} alt="icon" fill className="object-contain w-full h-full" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-[#4CAF50] border-dashed border-[3px] border-green-800 rounded-tl-[2rem] rounded-br-[2rem] text-white px-8 py-3 hover:bg-[#45a049] transition-colors">
              অর্ডার করতে চাই
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-cover bg-center bg-no-repeat items-center" style={{
        // backgroundImage: `url(${img})`,
        backgroundImage: `url("/images/acorn-8273451_1280.jpg")`,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundBlendMode: "soft-light",
        backgroundAttachment: "fixed",
      }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Eating Instructions */}
            <div>
              <h2 className="text-[#FF0000] text-2xl font-bold mb-6 text-center">খাওয়ার নিয়মাবলী</h2>
              <p className="text-white leading-relaxed text-justify">
                এক গ্রাম হালকা গরম দুধের সাথে মিক্সপটি ২ থেকে ৩ চামচ মিশিয়ে হালকা ঠান্ডা করে খাওয়াতে পারেন। এছাড়া ফ্রিজে ২ থেকে ৩ ঘন্টা রেখে
                থেলে বেশি মজাদার লাগে। অন্যান্য খাবার, যেমনঃ দই, পায়েস, ফালুদা, ফিরনি, সেমাই, রসমালাই উপর ছিটিয়ে খেলেও খাবারের স্বাদ বহুগুণ
                বেড়ে যায়। তাছাড়া এমনিতেও খাওয়া যায়।
              </p>
            </div>

            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square">
                <Image
                  src={katNut}
                  alt="Shahi Badam Mix Powder"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Storage Instructions */}
            <div>
              <h2 className="text-[#FF0000] text-2xl font-bold mb-6 text-center">সংরক্ষণের নিয়মাবলী</h2>
              <p className="text-white leading-relaxed text-justify">
                মিক্সপটি সম্পূর্ণ রোমেড প্রক্রিয়ায় তৈরি। ব্যবহারের পরে বোতলের মুখ ভালোভাবে বন্ধ থাকা অবস্থায় ফ্রিজের নরমাল অংশে রেখে অনায়াসে ৩
                থেকে ৪ মাস ব্যবহার করতে পারবেন। এতে মিক্সপটির রঙ্গ এবং স্বাদ কোন প্রকার পরিবর্তন আসবে না। যেহেতু মিক্সপটি বিভিন্ন বাদাম
                দিয়ে তৈরি তাই বাহিরে রেখে ব্যবহার করলে একটা রঙ্গ হয় খাওয়ার সম্ভাবনা থাকে।
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">আমাদের কাছে থেকে কেন নিবেন?</h2>

          {/* Video Container */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Why buy from us?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Order Button */}
          <div className="flex justify-center">
            <button className="bg-[#4CAF50] border-dashed border-[3px] border-green-800 rounded-tl-[2rem] rounded-br-[2rem] text-white px-8 py-3 hover:bg-[#45a049] transition-colors">
              অর্ডার করতে চাই
            </button>
          </div>
        </div>
      </section>
      {/* checkout */}
      <div className="max-w-4xl mx-auto p-6 border-2 border-black rounded-lg">
        {/* Products Section */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Your Products</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex items-center gap-4">
              <Image src="/placeholder.svg" alt="Product" width={60} height={60} className="rounded-sm" />
              <div className="flex-1">
                <h3 className="font-bengali">Bangla Landing Page Templates Bundle x 1</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm">×</span>
                  <span className="text-sm">1</span>
                  <span className="text-sm">৳ 100</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div>
            <h2 className="text-lg font-medium mb-4">Billing details</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-bengali mb-1">
                  তোমার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-bengali mb-1">
                  ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-bengali mb-1">
                  জিপকোড <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-bengali mb-1">
                  মোবাইল <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div >
            <h2 className="text-lg font-medium mb-4">Your order</h2>
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-t">
                    <div className="font-bengali text-sm">
                      Bangla Landing Page Templates Bundle
                      <span className="text-gray-600"> × 1</span>
                    </div>
                    <span className="text-sm">৳ 100</span>
                  </div>
                </div>

                <div className="flex justify-between border-t pt-2">
                  <span>Subtotal</span>
                  <span>৳ 100</span>
                </div>

                <div className="flex justify-between border-t pt-2">
                  <span>Total</span>
                  <span className="text-lg">৳ 100</span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-md transition-colors">
                    Apply
                  </button>
                </div>

                <div className="bg-[#fff8e1] p-4 rounded-md flex gap-2">
                  <AlertCircle className="w-5 h-5 text-[#ff9800] flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Sorry, it seems that there are no available payment methods for your state. Please contact us if you
                    require assistance or wish to make alternate arrangements.
                  </p>
                </div>

                <div className="text-xs text-gray-600">
                  Your personal data will be used to process your order, support your experience throughout this website,
                  and for other purposes described in our Privacy policy.
                </div>

                <button className="w-full px-4 py-2 bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-md transition-colors">
                  Place Order ৳ 100
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-[#e0e0e0] py-3 text-center">
        <p className="text-[15px]">
          Copyright © 2025 Digital Deal BD | This website made with{" "}
          <span className="inline-block">
            <svg viewBox="0 0 24 24" fill="red" className="w-[18px] h-[18px] -mt-[2px]">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>{" "}
          by <span className="text-[#ffa726]">Digital Deal BD</span>
        </p>
      </footer>
    </main>
  );
}
