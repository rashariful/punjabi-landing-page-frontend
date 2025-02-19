"use client";

export default function OrderButton() {
    const handleOrderClick = () => {
        window.dispatchEvent(new Event("scroll-to-checkout"));
      };

  return (
    <button
    onClick={handleOrderClick}
      className="bg-[#4CAF50] border-dashed border-[3px] border-green-800 rounded-tl-[2rem] rounded-br-[2rem] text-white px-8 py-3 hover:bg-[#45a049] transition-colors my-10"
    >
      অর্ডার করতে চাই
    </button>
  );
}
