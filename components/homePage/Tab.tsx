'use client'
import { useState } from "react";
import HomePage from "./HomePage";
import Checkout from "../Checkout";
interface ProductDetail {
    productImage: string;
    productName: string;
    productPrice: number;
  }
interface Product {
    id: number;
    name: string;
    title: string;
    totalPrice: number;
    offerPrice: number;
    startDate: string;
    endDate: string;
    details: ProductDetail[]; 
    media: { type: string; url: string };
    video: string;
    image: string;
    colors: { name: string; imageUrl: string }[];
    bgColor: string;
  }
  
  type Products = {
    package1: Product;
    package2: Product;
  };

const Tab = ({ products }: { products: Products }) => {
    const tabs = ["প্রিমিয়াম লং খিমার প্যাকেজ", "প্রিমিয়াম পাঞ্জাবি প্যাকেজ"];
    const [activeTab, setActiveTab] = useState("প্রিমিয়াম পাঞ্জাবি প্যাকেজ")
    return (
        <div className="max-w-5xl mx-auto">
            <div className="py-5 flex justify-center">
                <div className="border-b border-gray-200">
                    <nav className="flex gap-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`p-5 text-lg font-semibold relative text-white rounded ${tab==="প্রিমিয়াম পাঞ্জাবি প্যাকেজ" ?`bg-[#0099DD]`: ` bg-[#DE3163]`} ${activeTab === tab ? "" : "bg-opacity-60"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
            
            {activeTab === "প্রিমিয়াম লং খিমার প্যাকেজ" && (
                <div className="py-8">
                    <HomePage product={products.package2}  />
                    <Checkout product={products.package2} />
                </div>
            )}
            {activeTab === "প্রিমিয়াম পাঞ্জাবি প্যাকেজ" && (
                <div className="py-8">
                    <HomePage product={products.package1} />
                    <Checkout product={products.package1} />
                </div>
            )}
        </div>
    );
};
export default Tab;