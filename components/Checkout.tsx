
"use client";
import { Minus, Plus, Truck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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
  size: boolean;
  image: string;
  bgColor: string;
  colors: {
    name: string;
    imageUrl: string;
  }[];
};

const Checkout = ({ product }: { product: Product }) => {
  const checkoutRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("inside");
  const [address, setAdress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [transactionId, setTransactionId] = useState("");
  const [selectedSize, setSelectedSize] = useState("40");
  const API_URL = process.env.NEXT_PUBLIC_REACT_APP_ROOT;
  const [error, setError] = useState<string | null>(null)
  const [paymentMethod, setPaymentMethod] = useState("cash")

  const deliveryCharge = deliveryLocation === "inside" ? 70 : 130;
  const totalPrice = product.offerPrice * quantity + deliveryCharge;

  useEffect(() => {
    const handleScroll = () => {
      if (checkoutRef.current) {
        checkoutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("scroll-to-checkout", handleScroll);
    return () => window.removeEventListener("scroll-to-checkout", handleScroll);
  }, []);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Only allow numeric input and check for exact 11 digits
    if (/^\d{0,11}$/.test(value)) {
      setMobile(value);

      if (value.length === 11) {
        setError(""); // Clear error if valid
      } else {
        setError("Phone number must be exactly.");
      }
    }
  };

  const handleTransactionIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Allow any character but limit length to 10
    if (value.length <= 10) {
      setTransactionId(value);
      setError(""); // Clear error when valid
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !mobile || !address) {
      toast.error("সব প্রয়োজনীয় তথ্য পূরণ করুন!");
      return;
    }
    if (product?.size && !selectedSize) {
      setError("অনুগ্রহ করে একটি সাইজ নির্বাচন করুন।");
      return;
    }
    if (transactionId && transactionId.length !== 10) {
      toast.error("Transaction ID must be exactly 10 characters.");
      return;
    }

    // Order data
    const orderData = {
      name,
      address,
      contactNo: mobile,
      isInsideDhaka: deliveryLocation === "inside",
      quantity,
      deliveryCharge,
      total: totalPrice,
      package: product.title,
      size: selectedSize,
      transactionId,
    };

    // console.log("Sending Order Data:", orderData);

    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      // console.log("Full Response:", response);
      const result = await response.json();
      // console.log("API Response:", result);

      if (result.success) {
        toast.success("অর্ডার সফলভাবে সম্পন্ন হয়েছে! SMS পাঠানো হয়েছে।");
        // setTimeout(() => {
        //   window.location.href = "https://www.icchaporon.com/";
        // }, 2000);
      } else {
        toast.error(`অর্ডার ব্যর্থ: ${result.message || "অনুগ্রহ করে আবার চেষ্টা করুন!"}`);
      }
    } catch (error) {
      console.error("Error sending order:", error);
      toast.error("অর্ডার সম্পন্ন করতে ব্যর্থ হয়েছে!");
    }
  };

  return (
    // <div ref={checkoutRef} id="checkout-section" className={`max-w-5xl mx-auto p-6 border-2 ${product?.size===false?"border-[#DE3163]":"border-[#0099DD]"} rounded-lg my-10`}>
    //   <div className="mb-8">
    //     <h2 className="text-lg font-medium mb-4 text-black">Your Products</h2>
    //     <div className="flex items-center justify-between">
    //       <div className="bg-gray-50 p-4 rounded-md">
    //         <div className="flex items-center gap-4">
    //           <Image src={product?.image} alt="Product" width={60} height={60} className="rounded-sm" />
    //           <div className="flex-1 text-black">
    //             <h3 className="font-bengali">{product.title}</h3>
    //             <div className="flex items-center gap-2 mt-1">
    //               <span className="text-sm">৳ {product.offerPrice}</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <h1 className="text-black">&quot;ন্যূনতম ডেলিভারি চার্জ দিয়ে অর্ডার নিশ্চিত করুন&quot;</h1>
    //       </div>
    //     </div>
    //   </div>

    //   <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 text-black">
    //     <div>
    //       <h2 className="text-lg font-medium mb-4">Billing details</h2>
    //       <div className="space-y-4">
    //         <div>
    //           <label className="block font-bengali mb-1">
    //             তোমার নাম <span className="text-red-500">*</span>
    //           </label>
    //           <input
    //             name="name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             type="text"
    //             required
    //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
    //           />
    //         </div>
    //         <div>
    //           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
    //           <label className="block font-bengali mb-1">
    //             মোবাইল <span className="text-red-500">*</span>
    //           </label>
    //           <input
    //             type="tel"
    //             name="contactNo"
    //             value={mobile}
    //             onChange={handleContactChange}
    //             required
    //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
    //           />
    //         </div>
    //         <div>
    //           <label className="block font-bengali mb-1">
    //             ঠিকানা <span className="text-red-500">*</span>
    //           </label>
    //           <textarea
    //             rows={2} // Set 2 rows
    //             required
    //             name="address"
    //             value={address}
    //             onChange={(e) => setAdress(e.target.value)}
    //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
    //           ></textarea>
    //         </div>

    //         {/* Size Selection */}
    //         {product?.size && (
    //           <div>
    //             <label className="block font-bengali mb-2 text-lg font-semibold">
    //               সাইজ নির্বাচন করুন
    //             </label>
    //             <div className="flex gap-4">
    //               {["40", "42", "44"].map((size) => (
    //                 <button
    //                   key={size}
    //                   className={`px-6 py-2 text-sm font-semibold border rounded-md ${selectedSize === size
    //                     ? `bg-[#0099DD] text-white`
    //                     : "border-[#0099DD] text-[#0099DD]"
    //                     }`}
    //                   onClick={() => setSelectedSize(size)}
    //                 >
    //                   {size}
    //                 </button>
    //               ))}
    //             </div>
    //           </div>
    //         )}
    //         <div>
    //           <label className="block font-bengali mb-2 text-lg font-semibold">
    //             ডেলিভারি চার্জ
    //           </label>
    //           <div className="flex gap-4 items-center">
    //             {/* Inside Dhaka Button */}
    //             <button
    //               className={`px-3 py-3 text-sm font-semibold border rounded-md ${deliveryLocation === "inside-dhaka"
    //                 ? `bg-${product?.bgColor} text-white`
    //                 : `border-${product?.bgColor} text-${product.bgColor}`
    //                 }`}
    //               onClick={() => setDeliveryLocation("inside-dhaka")}
    //             >
    //               ঢাকার ভিতরে (Inside Dhaka)
    //             </button>

    //             {/* Outside Dhaka Button */}
    //             <button
    //               className={`px-4 py-3 text-sm font-semibold border rounded-md ${deliveryLocation === "outside-dhaka"
    //                 ? `bg-${product?.bgColor} text-white`
    //                 : `border-${product?.bgColor} text-${product?.bgColor}`
    //                 }`}
    //               onClick={() => setDeliveryLocation("outside-dhaka")}
    //             >
    //               ঢাকার বাহিরে (Outside Dhaka)
    //             </button>
    //           </div>
    //         </div>


    //       </div>
    //     </div>

    //     <div className="text-black">
    //       <h2 className="text-lg font-medium mb-4">Your order</h2>
    //       <div className="bg-white border rounded-lg p-4 shadow-sm">
    //         <div className="space-y-4">
    //           <div>
    //             <div className="flex justify-between text-sm text-gray-600 mb-2">
    //               <span>Product</span>
    //             </div>
    //             <div className="flex justify-between items-center py-2 border-t">
    //               <span className="font-bengali text-sm">{product.title}</span>
    //               <div className="flex items-center gap-2 border border-gray-300 rounded-md">
    //                 <button
    //                   type="button"
    //                   onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
    //                   className={`px-3 py-1 border rounded-l bg-${product?.bgColor}  text-white`}
    //                 >
    //                   -
    //                 </button>
    //                 <span className="text-base">{quantity}</span>
    //                 <button
    //                   type="button"
    //                   onClick={() => setQuantity((prev) => Math.min(5, prev + 1))}
    //                   className={`px-3 py-1 border rounded-r bg-${product?.bgColor}  text-white`}
    //                   disabled={quantity >= 5}
    //                   style={{ opacity: quantity >= 5 ? 0.5 : 1, cursor: quantity >= 5 ? 'not-allowed' : 'pointer' }}
    //                 >
    //                   +
    //                 </button>
    //               </div>
    //               <span className="text-sm">৳ {(product.offerPrice * quantity).toFixed(2)}</span>
    //             </div>

    //           </div>

    //           <div className="flex justify-between border-t pt-2">
    //             <span>Delivery Charge</span>
    //             <span>৳ {deliveryCharge}</span>
    //           </div>

    //           <div className="flex justify-between border-t pt-2 font-medium">
    //             <span>Total</span>
    //             <span className="text-lg">৳ {totalPrice.toFixed(2)}</span>
    //           </div>
    //           <div>
    //             <label className="block font-bengali mb-1">
    //               Transaction ID <span className="text-red-500">*</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="transactionId"
    //               value={transactionId}
    //               onChange={handleTransactionIdChange}
    //               required
    //               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
    //             />
    //           </div>

    //           <button className={`w-full px-4 py-2  bg-${product?.bgColor} hover:bg-${product?.bgColor} text-white rounded-md transition-colors`}>
    //             Place Order
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </form>
    //   <Toaster />
    // </div>
    <div ref={checkoutRef} id="checkout-section" className="mx-auto max-w-5xl">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Your Order</h2>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className={`p-6 bg-gradient-to-r bg-${product?.bgColor} text-white`}>
          <div className="flex items-center gap-6">
            <Image
              src={product.image}
              alt="Product"
              width={120}
              height={120}
              className="rounded-lg border-4 border-white shadow-md"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">প্রিমিয়াম পাঞ্জাবি প্যাকেজ</h3>
              <p className="text-xl">৳ {product?.offerPrice}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}  className="p-6 grid gap-8 md:grid-cols-2">
          {/* Billing Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Billing Details</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">নাম *</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full rounded-md border-gray-300 shadow-sm border focus:ring focus:ring-${product.bgColor}  p-2 outline-none`}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল *</label>
                <input
                  type="tel"
                  name="contactNo"
                  value={mobile}
                  onChange={handleContactChange}
                  className={`w-full rounded-md border-gray-300 shadow-sm border focus:ring focus:ring-${product.bgColor}  p-2 outline-none`}
                  required
                />
                {error && <p className="text-red-500 text-center">{error}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">সম্পূর্ণ ঠিকানা *</label>
                <textarea
                  name="address"
                  value={address}
                  onChange={(e) => setAdress(e.target.value)}
                  className={`w-full rounded-md border-gray-300 shadow-sm border focus:ring focus:ring-${product.bgColor}  p-2 outline-none`}
                  rows={3}
                  required
                />
              </div>

              {product?.size && (<div>
                <label className="block text-sm font-medium text-gray-700 mb-2">সাইজ নির্বাচন করুন</label>
                <div className="flex gap-2">
                  {["40", "42", "44"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-md px-4 py-2 transition-colors ${selectedSize === size ? `bg-${product?.bgColor} text-white` : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>)}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ডেলিভারি চার্জ</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDeliveryLocation("inside")}
                    className={`rounded-md px-4 py-2 transition-colors ${deliveryLocation === "inside"
                        ? `bg-${product?.bgColor} text-white`
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    ঢাকার ভিতরে (Inside Dhaka)
                  </button>
                  <button
                    onClick={() => setDeliveryLocation("outside")}
                    className={`rounded-md px-4 py-2 transition-colors ${deliveryLocation === "outside"
                        ? `bg-${product?.bgColor} text-white`
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    ঢাকার বাইরে (Outside Dhaka)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Order Summary</h3>

            <div className="bg-gray-50 rounded-lg p-6 shadow-inner">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-medium">Product</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className={`rounded-full bg-${product?.bgColor} p-1 text-white transition-colors`}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-[2rem] text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((prev) => Math.min(5, prev + 1))}
                    className={`rounded-full bg-${product?.bgColor} p-1 text-white transition-colors`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <span className="ml-4 font-medium">৳ {product.offerPrice * quantity}.00</span>
                </div>
              </div>

              <div className="mb-4 flex justify-between border-b border-gray-200 pb-4">
                <span>Delivery Charge</span>
                <span>৳ {deliveryCharge}</span>
              </div>

              <div className="mb-6 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>৳ {totalPrice}.00</span>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <div className="space-y-2">
                  <button
                    onClick={() => setPaymentMethod("cash")}
                    className={`w-full rounded-md px-4 py-2 text-left transition-colors ${paymentMethod === "cash"
                        ? `bg-${product?.bgColor} text-white`
                        : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50"
                      }`}
                  >
                    <Truck className="inline-block mr-2 h-5 w-5" />
                    Cash on Delivery
                  </button>
                  <button
                    onClick={() => setPaymentMethod("bkash")}
                    className={`w-full rounded-md px-4 py-2 text-left transition-colors ${paymentMethod === "bkash"
                        ? `bg-${product?.bgColor} text-white`
                        : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50"
                      }`}
                  >
                    <Image
                      src="/images/bkash-logo.png"
                      alt="bKash"
                      width={20}
                      height={20}
                      className="inline-block mr-2"
                    />
                    bKash Payment
                  </button>
                  <button
                    onClick={() => setPaymentMethod("nagad")}
                    className={`w-full rounded-md px-4 py-2 text-left transition-colors ${paymentMethod === "nagad"
                        ? `bg-${product?.bgColor} text-white`
                        : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50"
                      }`}
                  >
                    <Image
                      src="/images/nagad-logo.webp"
                      alt="Nagad"
                      width={20}
                      height={20}
                      className="inline-block mr-2"
                    />
                    Nagad Payment
                  </button>
                </div>
              </div>

              {(paymentMethod === "bkash" || paymentMethod === "nagad") && (
                <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={paymentMethod === "bkash" ? "/images/bikas.jpg" : "/images/nogod.jpg"}
                      alt={`${paymentMethod === "bkash" ? "bKash" : "Nagad"} QR Code`}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-600 mb-4">
                    Scan this QR code to pay with {paymentMethod === "bkash" ? "bKash" : "Nagad"}
                  </p>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID *</label>
                    <input
                      type="text"
                      name="transactionId"
                   value={transactionId}
                   onChange={handleTransactionIdChange}
                      className={`w-full rounded-md border-gray-300 shadow-sm border focus:ring focus:ring-${product.bgColor}  p-2 outline-none`}
                      required
                    />
                  </div>
                </div>
              )}

              <button className={`w-full rounded-md bg-${product?.bgColor} py-3 text-white font-semibold transition-colors`}>
                Place Order
              </button>
            </div>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Checkout;
