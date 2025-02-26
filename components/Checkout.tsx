
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("inside-dhaka"); 
  const [address, setAdress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [transactionId, setTransactionId] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_REACT_APP_ROOT;

  const deliveryCharge = deliveryLocation === "inside-dhaka" ? 70 : 130;
  const totalPrice = product.price * quantity + deliveryCharge;

  useEffect(() => {
    const handleScroll = () => {
      if (checkoutRef.current) {
        checkoutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("scroll-to-checkout", handleScroll);
    return () => window.removeEventListener("scroll-to-checkout", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // console.log("Order Submission Attempt:");
    // console.log("Name:", name);
    // console.log("Mobile:", mobile);
    // console.log("Address:", address);
    // console.log("Transaction ID:", transactionId);
    // console.log("Quantity:", quantity);
    // console.log("Total Price:", totalPrice);
    
    if (!name || !mobile || !address || !transactionId) {
      toast.error("সব প্রয়োজনীয় তথ্য পূরণ করুন!");
      return;
    }
    
    // Order data
    const orderData = {
      name,
      address,
      contactNo: mobile,
      isInsideDhaka: deliveryLocation === "inside-dhaka",
      quantity,
      deliveryCharge,
      total: totalPrice,
      package: product.title,
    };
  
    // console.log("Sending Order Data:", orderData);
    
    try {
      const response = await fetch(`${API_URL}/api/v1/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      // console.log("Full Response:", response);
      const result = await response.json();
      // console.log("API Response:", result);
  
      if ( result.success) {
        toast.success("অর্ডার সফলভাবে সম্পন্ন হয়েছে! SMS পাঠানো হয়েছে।");
        setTimeout(() => {
          window.location.href = "https://www.icchaporon.com/";
        }, 2000);
      } else {
        toast.error(`অর্ডার ব্যর্থ: ${result.message || "অনুগ্রহ করে আবার চেষ্টা করুন!"}`);
      }
    } catch (error) {
      console.error("Error sending order:", error);
      toast.error("অর্ডার সম্পন্ন করতে ব্যর্থ হয়েছে!");
    }
  };
  
  return (
    <div ref={checkoutRef} id="checkout-section" className="max-w-5xl mx-auto p-6 border-2 border-black rounded-lg my-10">
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4 text-black">Your Products</h2>
        <div className="flex items-center justify-between">
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex items-center gap-4">
              <Image src={product?.image} alt="Product" width={60} height={60} className="rounded-sm" />
              <div className="flex-1 text-black">
                <h3 className="font-bengali">{product.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm">৳ {product.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-black">&quot;ন্যূনতম ডেলিভারি চার্জ দিয়ে অর্ডার নিশ্চিত করুন&quot;</h1>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 text-black">
        <div>
          <h2 className="text-lg font-medium mb-4">Billing details</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-bengali mb-1">
                তোমার নাম <span className="text-red-500">*</span>
              </label>
              <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                name="contactNo"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block font-bengali mb-1">
                ঠিকানা <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={2} // Set 2 rows
                required
                name="address"
                value={address}
                onChange={(e) => setAdress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <label className="block font-bengali mb-1">
                ডেলিভারি এলাকা <span className="text-red-500">*</span>
              </label>
              <div className=" flex gap-10 items-center">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryLocation"
                    value="inside-dhaka"
                    checked={deliveryLocation === "inside-dhaka"}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="form-radio text-green-600 focus:ring-green-600"
                  />
                  <span>Inside Dhaka (৳ 70)</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryLocation"
                    value="outside-dhaka"
                    checked={deliveryLocation === "outside-dhaka"}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="form-radio text-green-600 focus:ring-green-600"
                  />
                  <span>Outside Dhaka (৳ 130)</span>
                </label>
              </div>
            </div>

          </div>
        </div>

        <div className="text-black">
          <h2 className="text-lg font-medium mb-4">Your order</h2>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Product</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t">
                  <span className="font-bengali text-sm">{product.title}</span>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-md">
                    <button
                      type="button"
                      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                      className="px-3 py-1 border rounded-l bg-gray-800 text-white"
                    >
                      -
                    </button>
                    <span className="text-base">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((prev) => Math.min(5, prev + 1))}
                      className="px-3 py-1 border rounded-r bg-gray-800 text-white"
                      disabled={quantity >= 5}
                      style={{ opacity: quantity >= 5 ? 0.5 : 1, cursor: quantity >= 5 ? 'not-allowed' : 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm">৳ {(product.price * quantity).toFixed(2)}</span>
                </div>

              </div>

              <div className="flex justify-between border-t pt-2">
                <span>Delivery Charge</span>
                <span>৳ {deliveryCharge}</span>
              </div>

              <div className="flex justify-between border-t pt-2 font-medium">
                <span>Total</span>
                <span className="text-lg">৳ {totalPrice.toFixed(2)}</span>
              </div>
              <div>
                <label className="block font-bengali mb-1">
                  Transaction ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="transactionId"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              <button className="w-full px-4 py-2 bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-md transition-colors">
                Place Order
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
