
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ChangePassword from "./ChangePassword";
import InvoiceTemplate from "./Invoice";

type Order = {
  _id: string;
  transactionId: string;
  name: string;
  contactNo: string;
  status: "pending" | "processing" | "completed";
  quantity: number;
  total: number;
  size: string;
  package: string;
  createdAt: string;
  deliveryCharge: number;
  paymentMethod: string;
  // dueDate: string;
  orderId: string;
  address: string;
};

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "completed":
      return "bg-green-100 text-green-800";
    // case "cancelled":
    //   return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function OrderTable() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isInvoiceModalVisible, setIsInvoiceModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const showInvoiceModal = (order: Order) => {
    setSelectedOrder(order);
    setIsInvoiceModalVisible(true);
  };
  const closeInvoiceModal = () => setIsInvoiceModalVisible(false);
  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);

        let url = `${process.env.NEXT_PUBLIC_REACT_APP_ROOT}/orders`;
        if (searchTerm) {
          url += `?searchTerm=${encodeURIComponent(searchTerm)}`;
        }

        const response = await fetch(url, {
          headers: {
            Authorization: `${token}`,
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
  }, [router, searchTerm]); 

  const handleStatusChange = async (orderId: string, newStatus: Order["status"]) => {
    const token = localStorage.getItem("token");
    console.log(token, "tok");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_ROOT}/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          Authorization: `${token}`,
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
console.log(orders, 'orders');
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
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-md"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-5">
          {/* <Link href="/change-password"> */}
            <button onClick={showModal}className="text-red-600 px-5 py-2 hover:underline">Change Password</button>
          {/* </Link> */}
          <button onClick={handleLogout} className="bg-red-600 px-5 py-2 text-white">Logout</button>
        </div>
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
                  <th className="p-3 text-left">Package Name</th>
                  <th className="p-3 text-left">Mobile No</th>
                  <th className="p-3 text-left">Size</th>
                  <th className="p-3 text-left">Delivery Status</th>
                  <th className="p-3 text-left">Payment Method</th>
                  <th className="p-3 text-right">Quantity</th>
                  <th className="p-3 text-right">Total Price</th>
                  <th className="p-3 text-right">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders?.map((order, index) => (
                  <tr key={order?._id} className="border-b text-black">
                    <td className="p-3 font-medium">{indexOfFirstOrder + index + 1}</td>
                    <td className="p-3 font-medium">{order?.transactionId}</td>
                    <td className="p-3">{order?.name}</td>
                    <td className="p-3">{order?.package}</td>
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
                    <td className="p-3 text-right">{order?.paymentMethod}</td>
                    <td className="p-3 text-right">{order?.quantity}</td>
                    <td className="p-3 text-right">${order?.total.toFixed(2)}</td>
                    <td className="p-3 text-right"><button onClick={() => showInvoiceModal(order)} className="bg-pink-500 text-white p-2 rounded">Invoice</button></td>
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
      <ChangePassword visible={isModalVisible} onClose={closeModal}  />
      {selectedOrder && <InvoiceTemplate visible={isInvoiceModalVisible} onClose={closeInvoiceModal} order={selectedOrder}/>}
    </div>
  );
}
