
"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation" // For redirection
import { Eye, EyeOff } from "lucide-react"
import logo from "@/public/priyo-fashion-logo.svg"
import Link from "next/link"

export default function Login() {
  const [contactNo, setContactNo] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  
  const router = useRouter() // Use router to redirect after login

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  interface LoginResponse {
    // token: string;
    message?: string;
    data: {
      token: string;
    };
  }
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Only allow numeric input and check for exact 11 digits
    if (/^\d{0,11}$/.test(value)) {
      setContactNo(value);

      if (value.length === 11) {
        setError(""); // Clear error if valid
      } else {
        setError("Phone number must be exactly.");
      }
    }
  };
  const API_URL = process.env.NEXT_PUBLIC_REACT_APP_ROOT;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault(); // Prevent page reload
    setError(null); // Clear previous errors
    setLoading(true); // Set loading state

    try {
      const response = await fetch(`${API_URL}/admins/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contactNo, password }),
      });

      const data: LoginResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store token in localStorage
      localStorage.setItem("token", data.data.token);

      if(data.data.token){
        router.push("/dashboard");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src={logo} alt="Prio Fashion BD Logo" width={150} height={50} className="h-12 w-auto" />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-1">
              Contact No
            </label>
            <input
              type="number"
              id="contactNo"
              name="contactNo"
              value={contactNo}
              onChange={handleContactChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-800"
              placeholder="Enter your Contact No"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-800"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <Link href="/change-password" className="text-sm text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">© 2024 Prio Fashion BD. All rights reserved.</p>
      </div>
    </div>
  )
}


// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import { Eye, EyeOff } from "lucide-react"
// import logo from "@/public/priyo-fashion-logo.svg"

// export default function Login() {
//   const [contactNo, setContactNo] = useState("")
//   const [password, setPassword] = useState("")
//   const [showPassword, setShowPassword] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const [loading, setLoading] = useState(false)
  
//   const router = useRouter()

//   const API_URL = process.env.NEXT_PUBLIC_REACT_APP_ROOT

//   // Token Management
//   const setToken = (token: string) => {
//     sessionStorage.setItem("token", token) // Store token in sessionStorage
//   }

//   // const removeToken = () => {
//   //   sessionStorage.removeItem("token") // Remove token on logout
//   // }

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   interface LoginResponse {
//     token: string
//     message?: string
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault()
//     setError(null)
//     setLoading(true)
//     // localStorage.removeItem("token");
//     try {
//       const response = await fetch(`${API_URL}/admins/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ contactNo, password }),
//         credentials: "include", 
//       })

//       const data: LoginResponse = await response.json()

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed")
//       }
//       localStorage.setItem("token", data.token);
//       setToken(data.token) // Securely store the token

//       router.push("/dashboard") // Redirect after successful login

//     } catch (error: any) {
//       setError(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <Image src={logo} alt="Prio Fashion BD Logo" width={150} height={50} className="h-12 w-auto" />
//         </div>

//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>

//         {/* Error Message */}
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           {/* Contact No Input */}
//           <div className="mb-4">
//             <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-1">
//               Contact No
//             </label>
//             <input
//               type="number"
//               id="contactNo"
//               name="contactNo"
//               value={contactNo}
//               onChange={(e) => setContactNo(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your Contact No"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Enter your password"
//                 required
//               />
//               <button
//                 type="button"
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? (
//                   <EyeOff className="h-5 w-5 text-gray-400" />
//                 ) : (
//                   <Eye className="h-5 w-5 text-gray-400" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Remember Me & Forgot Password */}
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="remember"
//                 name="remember"
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
//                 Remember me
//               </label>
//             </div>
//             <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
//               Forgot password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Log In"}
//           </button>
//         </form>

//         {/* <button
//           onClick={removeToken}
//           className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out"
//         >
//           Logout
//         </button> */}

//         {/* Footer */}
//         <p className="mt-8 text-center text-sm text-gray-600">© 2024 Prio Fashion BD. All rights reserved.</p>
//       </div>
//     </div>
//   )
// }
