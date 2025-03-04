"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle,  Clock, ArrowRight } from "lucide-react"

// Custom Button component
// const Button = ({ children, variant = "primary", className = "", ...props }) => {
//   const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors duration-200 ease-in-out"
//   const variants = {
//     primary: "bg-prink-600 text-white hover:bg-green-700",
//     outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
//   }

//   return (
//     <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   )
// }


export default function OrderConfirmation() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(10)

  // Countdown effect for redirect
  useEffect(() => {
    if (countdown <= 0) {
      router.push("/")
      return
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown, router])

  return (
    <div className="container max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="h-20 w-20 rounded-full bg-pink-100 flex items-center justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-prink-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 max-w-md">
          Thank you for your purchase. We&apos;ve received your order and are processing it now.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Clock className="h-4 w-4" />
          <span>
            Redirecting to homepage in <span className="font-semibold">{countdown}</span> seconds
          </span>
        </div>
        <div className="flex justify-center">
          <Link href="/" passHref>
            <button className="flex items-center bg-prink-600 text-white hover:bg-pink-700 px-4 py-2 rounded-md font-medium transition-colors duration-200 ease-in-out">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

