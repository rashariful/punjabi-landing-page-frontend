"use client";
import { AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import product from "@/public/images/coffee-pot-6975431_1280.jpg"
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
  image: string;
  colors: {
    name: string;
    imageUrl: string;
  }[];
};

const Checkout = ({ product }: { product: Product }) => {
  const checkoutRef = useRef<HTMLDivElement>(null);
  const [mobile, setMobile] = useState("")

  useEffect(() => {
    // Listen for scroll event from button click
    const handleScroll = () => {
      if (checkoutRef.current) {
        checkoutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scroll-to-checkout", handleScroll);
    return () => window.removeEventListener("scroll-to-checkout", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!mobile) {
      alert("Please enter a valid mobile number.")
      return
    }

    const message = `Your order for product has been confirmed! Thank you for shopping with us.`

    // BulkSMSBD API Details
    const apiKey = "UeJRDTI3uwaxx2nMJ3zy"
    const senderId = "8809617623249"
    const apiUrl = `http://bulksmsbd.net/api/smsapi?api_key=${apiKey}&type=text&number=${mobile}&senderid=${senderId}&message=${encodeURIComponent(message)}`
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
      })

      const result = await response.json()
      console.log("API Response:", result)

      if (result.status === "SUCCESS") {
        toast.success("Order placed successfully! SMS sent.")
        // onClose()
        window.location.href = "https://www.icchaporon.com/"
      } else {
        toast.error("Order placed, but SMS failed: " + result.success_message)
      }
    } catch (error) {
      console.error("Error sending SMS:", error)
      toast.error("This didn't work.")
    }
  }
  return (
    <div ref={checkoutRef} id="checkout-section" className="max-w-4xl mx-auto p-6 border-2 border-black rounded-lg">
      {/* Products Section */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4 text-black">Your Products</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-center gap-4">
            <Image src={product?.image} alt="Product" width={60} height={60} className="rounded-sm" />
            <div className="flex-1 text-black">
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

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 text-black">
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
            {/* <div>
              <label className="block font-bengali mb-1">
                জিপকোড <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div> */}
            
            <div>
              <label className="block font-bengali mb-1">
                মোবাইল <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="text-black">
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
                  <span className="text-sm">৳ {product?.price}</span>
                </div>
              </div>

              <div className="flex justify-between border-t pt-2">
                <span>Subtotal</span>
                <span>৳ {product?.price}</span>
              </div>

              <div className="flex justify-between border-t pt-2">
                <span>Total</span>
                <span className="text-lg">৳ {product?.price}</span>
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
                Place Order ৳ {product?.price}
              </button>
            </div>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Checkout;