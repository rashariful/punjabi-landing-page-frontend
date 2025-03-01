"use client"
import Image from "next/image"
import reviewImage from "@/public/images/Screenshot_20211222212823__01.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const reviews = [
  {
    id: 1,
    content: "রমজান স্পেশাল প্যাকেজ সত্যিই চমৎকার! পাঞ্জাবির কাপড় খুব আরামদায়ক, জায়নামাজের মানও অসাধারণ। আতরের সুবাস দীর্ঘস্থায়ী, আর তসবিহ হাতে বেশ মানানসই। খিমারটিও বেশ সুন্দর ও আরামদায়ক। রমজানের জন্য পারফেক্ট একটি প্যাকেজ!",
    media: { type: "image" as const, url: reviewImage.src },
  },
  {
    id: 2,
    content: "রমজান স্পেশাল প্যাকেজ সত্যিই চমৎকার! পাঞ্জাবির কাপড় খুব আরামদায়ক, জায়নামাজের মানও অসাধারণ। আতরের সুবাস দীর্ঘস্থায়ী, আর তসবিহ হাতে বেশ মানানসই। খিমারটিও বেশ সুন্দর ও আরামদায়ক। রমজানের জন্য পারফেক্ট একটি প্যাকেজ!",
    media: { type: "video" as const, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  },
  {
    id: 3,
    content: "রমজান স্পেশাল প্যাকেজ সত্যিই চমৎকার! পাঞ্জাবির কাপড় খুব আরামদায়ক, জায়নামাজের মানও অসাধারণ। আতরের সুবাস দীর্ঘস্থায়ী, আর তসবিহ হাতে বেশ মানানসই। খিমারটিও বেশ সুন্দর ও আরামদায়ক। রমজানের জন্য পারফেক্ট একটি প্যাকেজ!",
    media: { type: "video" as const, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  },
]

const ReviewSection = () => {
  return (
    <section className="mt-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-5 text-black text-center">গ্রাহক রিভিউ</h2>
      <Swiper
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Show one review at a time
      breakpoints={{
        640: {
          slidesPerView: 1, // Show two reviews on medium devices
        },
        768: {
          slidesPerView: 2, // Show three reviews on large devices
        },
      }}
      loop={true} 
      navigation={true} 
      autoplay={{
        delay: 3000, // Delay between each slide (in milliseconds)
        disableOnInteraction: false, // Autoplay won't stop after user interaction
      }}
      modules={[Pagination, Autoplay]}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <div className="border rounded-lg p-4">
            {review.media.type === "image" ? (
              <Image
                src={review.media.url || "/placeholder.svg"}
                alt="Review"
                width={200}
                height={100}
                className="rounded-lg mb-4 w-full"
              />
            ) : (
              <iframe
                width="200"
                height="200"
                src={review.media.url}
                title="Review video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg mb-4 w-full"
              ></iframe>
            )}
            <p className="text-black">{review.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    </section>
  )
}

export default ReviewSection

