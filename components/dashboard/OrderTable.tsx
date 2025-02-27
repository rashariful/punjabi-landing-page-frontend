// // "use client"

// // import { useEffect, useState } from "react"
// // import { ChevronDown, Search } from "lucide-react"
// // import { useRouter } from "next/navigation"

// // type Order = {
// //   id: string
// //   transactionId: string
// //   customer: string
// //   contactNo: string
// //   status: "pending" | "processing" | "completed" | "cancelled"
// //   payment: {
// //     method: string
// //     status: "paid" | "unpaid" | "refunded"
// //   }
// //   quantity: number
// //   total: number
// //   date: string
// //   products: string[]
// // }



// // const getStatusColor = (status: Order["status"]) => {
// //   switch (status) {
// //     case "pending":
// //       return "bg-yellow-100 text-yellow-800"
// //     case "processing":
// //       return "bg-blue-100 text-blue-800"
// //     case "completed":
// //       return "bg-green-100 text-green-800"
// //     case "cancelled":
// //       return "bg-red-100 text-red-800"
// //     default:
// //       return "bg-gray-100 text-gray-800"
// //   }
// // }


// // export default function OrderTable() {
// // //   const [expandedRows, setExpandedRows] = useState<string[]>([])
// //   const [sortConfig, setSortConfig] = useState<{
// //     key: keyof Order | null
// //     direction: "asc" | "desc"
// //   }>({ key: null, direction: "asc" })

// // //   const toggleRow = (orderId: string) => {
// // //     setExpandedRows((prev) => (prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]))
// // //   }

// //   const handleSort = (key: keyof Order) => {
// //     setSortConfig((prev) => ({
// //       key,
// //       direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
// //     }))
// //   }

// //   const sortedOrders = [...orders].sort((a, b) => {
// //     if (!sortConfig.key) return 0

// //     const aValue = a[sortConfig.key]
// //     const bValue = b[sortConfig.key]

// //     if (typeof aValue === "string" && typeof bValue === "string") {
// //       return sortConfig.direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
// //     }

// //     if (typeof aValue === "number" && typeof bValue === "number") {
// //       return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue
// //     }

// //     return 0
// //   })

// //   const router = useRouter();

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (!token) {
// //       router.push("/login"); 
// //     }
// //   }, []);
// //   const handleLogout = () => {
// //     sessionStorage.removeItem("token"); 
// //     localStorage.removeItem("token"); 
// //     router.push("/login"); 
// //   };

// //   return (
// //     <div className="w-full">
// //       {/* Filters */}
// //       <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
// //         <div className="relative w-72">
// //           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
// //           <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-md" placeholder="Search orders..." />
// //         </div>
// //         <button onClick={handleLogout} className="bg-red-600 px-5 py-2 text-white">Logout</button>
// //       </div>

// //       {/* Table */}
// //       <div className="overflow-x-auto">
// //         <table className="w-full border-collapse">
// //           <thead>
// //             <tr className="bg-gray-100">
// //               {/* <th className="p-3 text-left w-[50px]"></th> */}
// //               <th className="p-3 text-left cursor-pointer" onClick={() => handleSort("transactionId")}>
// //                 Transaction ID
// //                 {sortConfig.key === "transactionId" && <ChevronDown className="ml-2 h-4 w-4 inline" />}
// //               </th>
// //               <th className="p-3 text-left">Customer</th>
// //               <th className="p-3 text-left">Mobile No</th>
// //               <th className="p-3 text-left">Status</th>
// //               <th className="p-3 text-right">Quantity</th>
// //               <th className="p-3 text-right">Total Price</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {sortedOrders.map((order) => (
// //               <>
// //                 <tr key={order.id} className="border-b">
// //                   {/* <td className="p-3">
// //                     <button className="p-1 hover:bg-gray-100 rounded" onClick={() => toggleRow(order.id)}>
// //                       {expandedRows.includes(order.id) ? (
// //                         <ChevronUp className="h-4 w-4" />
// //                       ) : (
// //                         <ChevronDown className="h-4 w-4" />
// //                       )}
// //                     </button>
// //                   </td> */}
// //                   <td className="p-3 font-medium">{order.transactionId}</td>
// //                   <td className="p-3">{order.customer}</td>
// //                   <td className="p-3">{order.contactNo}</td>
// //                   <td className="p-3">
// //                     <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
// //                       {order.status}
// //                     </span>
// //                   </td>
// //                   <td className="p-3 text-right">{order.quantity}</td>
// //                   <td className="p-3 text-right">${order.total.toFixed(2)}</td>

// //                 </tr>
// //               </>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   )
// // }



// "use client"

// import { useEffect, useState } from "react";
// import { ChevronDown, Search } from "lucide-react";
// import { useRouter } from "next/navigation";

// type Order = {
//   _id: string;
//   transactionId: string;
//   name: string;
//   contactNo: string;
//   status: "pending" | "processing" | "completed" | "cancelled";
//   quantity: number;
//   total: number;
//   createdAt: string;
// };

// const getStatusColor = (status: Order["status"]) => {
//   switch (status) {
//     case "pending":
//       return "bg-yellow-100 text-yellow-800";
//     case "processing":
//       return "bg-blue-100 text-blue-800";
//     case "completed":
//       return "bg-green-100 text-green-800";
//     case "cancelled":
//       return "bg-red-100 text-red-800";
//     default:
//       return "bg-gray-100 text-gray-800";
//   }
// };

// export default function OrderTable() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [sortConfig, setSortConfig] = useState<{ key: keyof Order | null; direction: "asc" | "desc" }>({
//     key: null,
//     direction: "asc",
//   });

//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login");
//     }

//     const fetchOrders = async () => {
//       try {
//         const response = await fetch("https://land-page-server-zeta.vercel.app/orders", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Use Bearer token
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch orders");
//         }

//         const data = await response.json();
//         setOrders(data.data);
//       } catch (error) {
//         setError("Failed to fetch orders. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleSort = (key: keyof Order) => {
//     setSortConfig((prev) => ({
//       key,
//       direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
//     }));
//   };

//   const sortedOrders = [...orders].sort((a, b) => {
//     if (!sortConfig.key) return 0;

//     const aValue = a[sortConfig.key];
//     const bValue = b[sortConfig.key];

//     if (typeof aValue === "string" && typeof bValue === "string") {
//       return sortConfig.direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
//     }

//     if (typeof aValue === "number" && typeof bValue === "number") {
//       return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
//     }

//     return 0;
//   });

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     router.push("/login");
//   };

//   return (
//     <div className="w-full">
//       {/* Filters */}
//       <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
//         <div className="relative w-72">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
//           <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-md" placeholder="Search orders..." />
//         </div>
//         <button onClick={handleLogout} className="bg-red-600 px-5 py-2 text-white">Logout</button>
//       </div>

//       {/* Table */}
//       {loading ? (
//         <p className="text-center">Loading orders...</p>
//       ) : error ? (
//         <p className="text-center text-red-500">{error}</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-3 text-left cursor-pointer" onClick={() => handleSort("transactionId")}>
//                   Transaction ID {sortConfig.key === "transactionId" && <ChevronDown className="ml-2 h-4 w-4 inline" />}
//                 </th>
//                 <th className="p-3 text-left">Customer</th>
//                 <th className="p-3 text-left">Mobile No</th>
//                 <th className="p-3 text-left">Status</th>
//                 <th className="p-3 text-right">Quantity</th>
//                 <th className="p-3 text-right">Total Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedOrders.map((order) => (
//                 <tr key={order._id} className="border-b">
//                   <td className="p-3 font-medium">{order.transactionId}</td>
//                   <td className="p-3">{order.name}</td>
//                   <td className="p-3">{order.contactNo}</td>
//                   <td className="p-3">
//                     <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="p-3 text-right">{order.quantity}</td>
//                   <td className="p-3 text-right">${order.total.toFixed(2)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type Order = {
  _id: string;
  transactionId: string;
  name: string;
  contactNo: string;
  status: "pending" | "processing" | "completed" | "cancelled";
  quantity: number;
  total: number;
  size: string;
  createdAt: string;
};

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "completed":
      return "bg-green-100 text-green-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function OrderTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }

    const fetchOrders = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_ROOT}/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data.data);
      } catch (error) {
        setError("Failed to fetch orders. Please try again.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [router]);

  const handleStatusChange = async (orderId: string, newStatus: Order["status"]) => {
    const token = localStorage.getItem("token");
    console.log(token, "tok");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_ROOT}/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        toast.error("Failed to update status");
      }

      setOrders((prevOrders) =>
        prevOrders.map((order) => (order?._id === orderId ? { ...order, status: newStatus } : order))
      );
    } catch (error) {
      console.error("Error updating status:", error);
      toast("Failed to update order status. Try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  return (
    <div className="w-full text-black">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input type="text" className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-md" placeholder="Search orders..." />
        </div>
        <button onClick={handleLogout} className="bg-red-600 px-5 py-2 text-white">Logout</button>
      </div>
      {loading ? (
        <p className="text-center text-black">Loading orders...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-pink-600">No orders found.</p>
      )
        : (
          <div className="overflow-x-auto text-black">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-black">
                  <th className="p-3 text-left">Order</th>
                  <th className="p-3 text-left">Transaction ID</th>
                  <th className="p-3 text-left">Customer</th>
                  <th className="p-3 text-left">Mobile No</th>
                  <th className="p-3 text-left">Size</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-right">Quantity</th>
                  <th className="p-3 text-right">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders?.map((order, index) => (
                  <tr key={order?._id} className="border-b text-black">
                    <td className="p-3 font-medium">{indexOfFirstOrder + index + 1}</td>
                    <td className="p-3 font-medium">{order?.transactionId}</td>
                    <td className="p-3">{order?.name}</td>
                    <td className="p-3">{order?.contactNo}</td>
                    <td className="p-3">{order?.size}</td>
                    <td className="p-3">
                      <select
                        value={order?.status}
                        onChange={(e) => handleStatusChange(order?._id, e.target.value as Order["status"])}
                        className={`px-2 py-1 text-xs font-semibold rounded-md ${getStatusColor(order?.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                        {/* <option value="cancelled">Cancelled</option> */}
                      </select>
                    </td>
                    <td className="p-3 text-right">{order?.quantity}</td>
                    <td className="p-3 text-right">${order?.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-8">
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Previous
      </button>
      <div className="text-sm text-gray-700">
        Page {currentPage}
      </div>
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={indexOfLastOrder >= orders.length}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <ChevronRight className="h-5 w-5 ml-1" />
      </button>
    </div>
    </div>
  );
}
