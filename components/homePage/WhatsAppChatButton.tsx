
// import React from "react";

// const WhatsAppChatButton = () => {
//   const whatsappLink = "https://wa.me/01303588099?text=Hello"; 

//   return (
//     <a
//       href={whatsappLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-5 right-5 2xl:right-56 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
//         <path d="M12 3C6.48 3 2 7.48 2 12s4.48 9 10 9c1.91 0 3.7-.59 5.15-1.6l5.38 2.13-2.12-5.37C21.41 15.7 22 13.91 22 12c0-4.52-4.48-9-10-9zm0 16c-1.42 0-2.75-.36-3.93-.99l-.84-.52-2.93 1.16 1.16-2.93-.52-.84C7.36 15.75 7 14.42 7 13c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5z" />
//       </svg>
//     </a>
//   );
// };

// export default WhatsAppChatButton;


"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Phone, X } from "lucide-react"

export default function WhatsAppChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#DE3163] text-white shadow-lg transition-all duration-300 hover:bg-[#C72C48] ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      {/* Contact Buttons - Only visible when menu is open */}
      {isOpen && (
        <div className="flex flex-col items-end gap-3">
          {/* Messenger Button */}
          {/* <div className="group relative flex items-center">
            <div className="absolute right-full mr-2 whitespace-nowrap rounded bg-[#DE3163] px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Chat on Messenger
            </div>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DE3163] text-white shadow-lg transition-all duration-300 hover:bg-[#C72C48] hover:rotate-12"
              aria-label="Contact us on Messenger"
            >
              <svg viewBox="0 0 36 36" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 1.9c-8.8 0-16 6.6-16 14.8 0 4.7 2.3 8.8 5.9 11.6.3.2.5.6.5 1l.1 3.1c0 .9 1 1.6 1.9 1.2l3.5-1.6c.3-.1.6-.1.9 0 1 .3 2.1.5 3.2.5 8.8 0 16-6.6 16-14.8S26.8 1.9 18 1.9zm6 10.9l-4.3 6.9c-.7 1.1-2.2 1.3-3.1.4l-3.4-3.4c-.2-.2-.6-.2-.8 0l-4.6 3.4c-.5.4-1.1-.2-.7-.7l4.3-6.9c.7-1.1 2.2-1.3 3.1-.4l3.4 3.4c.2.2.6.2.8 0l4.6-3.4c.5-.4 1.1.2.7.7z" />
              </svg>
            </a>
          </div> */}
          {/* Phone Button */}
          <div className="group relative flex items-center">
            <div className="absolute right-full mr-2 whitespace-nowrap rounded bg-blue-500 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Call us
            </div>
            <a
              href="tel:01303588099"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all duration-300 hover:bg-blue-500/80 hover:rotate-12"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* WhatsApp Button */}
          <div className="group relative flex items-center">
            <div className="absolute right-full mr-2 whitespace-nowrap rounded  bg-green-500 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Chat on WhatsApp
            </div>
            <a
              href="https://wa.me/8801303588099"
              className="flex h-10 w-10 items-center justify-center rounded-full  bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-500/80 hover:rotate-12"
              aria-label="Contact us on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          
        </div>
      )}
    </div>
  )
}


