// "use client"

// import { useEffect, useRef } from "react"
// import { jsPDF } from "jspdf"
// import html2canvas from "html2canvas"
// interface InvoiceProps {
//     visible: boolean;
//     onClose: () => void;
// }

// export default function InvoiceTemplate({ visible, onClose }: InvoiceProps) {
//     const invoiceRef = useRef<HTMLDivElement>(null)

//     const currentDate = new Date().toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//     })

//     const currentTime = new Date().toLocaleTimeString("en-US", {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: true,
//     })

//     const invoiceItems = [
//         { name: "Landing Page Design", qty: 1, price: 1200.0 },
//         { name: "SEO Optimization", qty: 1, price: 450.0 },
//         { name: "Content Creation", qty: 5, price: 100.0 },
//     ]

//     const subtotal = invoiceItems.reduce((sum, item) => sum + item.qty * item.price, 0)
//     const deliveryCharge = 50.0
//     const total = subtotal + deliveryCharge

//     const handlePrint = () => {
//         const printWindow = window.open("", "_blank")
//         if (printWindow && invoiceRef.current) {
//             printWindow.document.write("<html><head><title>Print Invoice</title>")
//             printWindow.document.write("<style>")
//             printWindow.document.write(`
//         body { font-family: Arial, sans-serif; }
//         table { width: 100%; border-collapse: collapse; }
//         th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
//         th { background-color: #f2f2f2; }
//       `)
//             printWindow.document.write("</style></head><body>")
//             printWindow.document.write(invoiceRef.current.innerHTML)
//             printWindow.document.write("</body></html>")
//             printWindow.document.close()
//             printWindow.print()
//         }
//     }

//     const handleSave = async () => {
//         if (invoiceRef.current) {
//             const canvas = await html2canvas(invoiceRef.current)
//             const imgData = canvas.toDataURL("image/png")
//             const pdf = new jsPDF()
//             const imgProps = pdf.getImageProperties(imgData)
//             const pdfWidth = pdf.internal.pageSize.getWidth()
//             const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
//             pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
//             pdf.save("invoice.pdf")
//         }
//     }
//     const handleBackdropClick = () => {
//         onClose(); // Close the modal when the backdrop is clicked
//     };
//     useEffect(() => {
//         if (visible) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }

//         return () => {
//             document.body.style.overflow = 'auto'; // Clean up on unmount or when modal is closed
//         };
//     }, [visible]);

//     // Render the modal only if `visible` is true
//     if (!visible) return null;


//     return (
//         <div onClick={handleBackdropClick} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
//             <div className="max-w-4xl mx-auto relative p-4 bg-white min-h-" onClick={(e) => e.stopPropagation()}>
//                 <div className="border rounded-lg shadow-sm max-h-[100vh] overflow-y-auto">
//                     <div className="p-6">
//                         <div ref={invoiceRef} className="flex flex-col gap-8">
//                             {/* Header */}
//                             <div className="flex flex-col md:flex-row justify-between gap-6">
//                                 <div className="flex flex-col gap-2">
//                                     <div className="flex items-center gap-2">
//                                         <div className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center">
//                                             <span className="text-white font-bold text-xl">WD</span>
//                                         </div>
//                                         <div>
//                                             <h1 className="text-2xl font-bold">WebDesign Pro</h1>
//                                             <p className="text-gray-500 text-sm">Company No. 12345678</p>
//                                         </div>
//                                     </div>
//                                     <div className="text-sm text-gray-500 mt-2">
//                                         <p>123 Design Street</p>
//                                         <p>Creative District</p>
//                                         <p>New York, NY 10001</p>
//                                         <p>United States</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col gap-1 md:text-right">
//                                     <h2 className="text-2xl font-bold text-blue-600">INVOICE</h2>
//                                     <p className="text-gray-500">#INV-2024-0001</p>
//                                     <div className="flex items-center gap-1 mt-2 md:justify-end">
//                                         <CalendarIcon className="h-4 w-4 text-gray-500" />
//                                         <span className="text-sm text-gray-500">{currentDate}</span>
//                                     </div>
//                                     <p className="text-sm text-gray-500">{currentTime}</p>
//                                 </div>
//                             </div>

//                             <hr className="border-t border-gray-200" />

//                             {/* Customer Info */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div>
//                                     <h3 className="font-medium mb-2">Bill To:</h3>
//                                     <div className="text-sm">
//                                         <p className="font-medium">John Smith</p>
//                                         <p>Customer No. CUS-2024-0042</p>
//                                         <p className="mt-1">42 Client Avenue</p>
//                                         <p>Business District</p>
//                                         <p>San Francisco, CA 94103</p>
//                                         <p>United States</p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-medium mb-2">Payment Details:</h3>
//                                     <div className="text-sm">
//                                         <div className="grid grid-cols-2 gap-1">
//                                             <p className="text-gray-500">Payment Method:</p>
//                                             <p>Bank Transfer</p>
//                                             <p className="text-gray-500">Due Date:</p>
//                                             <p>April 15, 2024</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Invoice Items */}
//                             <div>
//                                 <table className="w-full border-collapse">
//                                     <thead>
//                                         <tr className="border-b border-gray-200">
//                                             <th className="py-2 px-4 text-left font-medium">Product/Service</th>
//                                             <th className="py-2 px-4 text-right font-medium">Qty</th>
//                                             <th className="py-2 px-4 text-right font-medium">Price</th>
//                                             <th className="py-2 px-4 text-right font-medium">Total</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {invoiceItems.map((item, index) => (
//                                             <tr key={index} className="border-b border-gray-200">
//                                                 <td className="py-2 px-4">{item.name}</td>
//                                                 <td className="py-2 px-4 text-right">{item.qty}</td>
//                                                 <td className="py-2 px-4 text-right">${item.price.toFixed(2)}</td>
//                                                 <td className="py-2 px-4 text-right">${(item.qty * item.price).toFixed(2)}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                     <tfoot>
//                                         <tr className="border-b border-gray-200">
//                                             <td colSpan={3} className="py-2 px-4 text-right">
//                                                 Subtotal
//                                             </td>
//                                             <td className="py-2 px-4 text-right">${subtotal.toFixed(2)}</td>
//                                         </tr>
//                                         <tr className="border-b border-gray-200">
//                                             <td colSpan={3} className="py-2 px-4 text-right">
//                                                 Delivery Charge
//                                             </td>
//                                             <td className="py-2 px-4 text-right">${deliveryCharge.toFixed(2)}</td>
//                                         </tr>
//                                         <tr>
//                                             <td colSpan={3} className="py-2 px-4 text-right font-medium">
//                                                 Total
//                                             </td>
//                                             <td className="py-2 px-4 text-right font-bold">${total.toFixed(2)}</td>
//                                         </tr>
//                                     </tfoot>
//                                 </table>
//                             </div>

//                             {/* Notes */}
//                             {/* <div className="mt-4">
//                                 <h3 className="font-medium mb-2">Notes:</h3>
//                                 <p className="text-sm text-gray-500">
//                                     Payment is due within 14 days of invoice date. Please include the invoice number in your payment
//                                     reference. Thank you for your business!
//                                 </p>
//                             </div> */}
//                         </div>

//                         {/* Footer */}
//                         <div className="flex justify-end gap-2 mt-6">
//                             <button
//                                 onClick={handleSave}
//                                 className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                             >
//                                 <SaveIcon className="h-4 w-4" />
//                                 Save as PDF
//                             </button>
//                             <button
//                                 onClick={handlePrint}
//                                 className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                             >
//                                 <PrinterIcon className="h-4 w-4" />
//                                 Print
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client"

import { useEffect, useRef } from "react"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

interface Order {
    orderId: string;
    name: string;
    address: string;
    total: number;
    quantity: number;
    // country: string;
    deliveryCharge: number;
    package: string;
    paymentMethod: string;
    // dueDate: string;
    size: string;
}

interface InvoiceProps {
    visible: boolean;
    onClose: () => void;
    order: Order;
}

export default function InvoiceTemplate({ visible, onClose, order }: InvoiceProps) {
    const invoiceRef = useRef<HTMLDivElement>(null);

    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    // const subtotal = order.items.reduce((sum, item) => sum + item.qty * item.price, 0);
    // const total = subtotal + order.deliveryCharge;

    const handlePrint = () => {
        const printWindow = window.open("", "_blank");
        if (printWindow && invoiceRef.current) {
            printWindow.document.write("<html><head><title>Print Invoice</title>");
            printWindow.document.write("<style> body { font-family: Arial, sans-serif; } table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid #ddd; padding: 8px; text-align: left; } th { background-color: #f2f2f2; } </style>");
            printWindow.document.write("</head><body>");
            printWindow.document.write(invoiceRef.current.innerHTML);
            printWindow.document.write("</body></html>");
            printWindow.document.close();
            printWindow.print();
        }
    };

    const handleSave = async () => {
        if (invoiceRef.current) {
            const canvas = await html2canvas(invoiceRef.current);
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`invoice-${order.orderId}.pdf`);
        }
    };

    useEffect(() => {
        document.body.style.overflow = visible ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-4xl mx-auto relative bg-white rounded-lg shadow-lg overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="flex justify-between bg-pink-600 p-4">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Prio Fashion Bd</h1>
                        <p className="text-sm text-white">Company No. 01623766660</p>
                        <p className="text-sm text-white">123 Business Street, City</p>
                    </div>
                    <div className="text-right">
                        <h2 className="text-2xl font-bold text-blue-600">INVOICE</h2>
                        {/* <p className="text-gray-500">#{order.orderId}</p> */}
                        <p className="text-sm text-white">{currentDate}, {currentTime}</p>
                    </div>
                </div>
                <div ref={invoiceRef} className="p-6">
                    <hr className="border-t border-gray-200 my-4" />

                    {/* Customer Info */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-medium">Bill To:</h3>
                            <p className="text-sm">
                                <strong>Customer: {order?.name}</strong><br />
                                Address: {order?.address}<br />
                            </p>
                        </div>
                        <div className="text-right">
                            <h3 className="font-medium">Payment Details:</h3>
                            <p className="text-sm">Method: {order?.paymentMethod}</p>
                            {/* <p className="text-sm">Due Date: {order.dueDate}</p> */}
                        </div>
                    </div>

                    {/* Invoice Items */}
                    <table className="w-full border-collapse mt-6">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-100">
                                <th className="py-2 px-4 text-left">Product/Service</th>
                                <th className="py-2 px-4 text-right">Qty</th>
                                <th className="py-2 px-4 text-right">Size</th>
                                <th className="py-2 px-4 text-right">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {order.items.map((item, index) => ( */}
                            <tr className="border-b border-gray-200">
                                <td className="py-2 px-4">{order?.package}</td>
                                <td className="py-2 px-4 text-right">{order?.quantity}</td>
                                <td className="py-2 px-4 text-right">{order?.size}</td>
                                <td className="py-2 px-4 text-right">${(order?.total).toFixed(2)}</td>
                            </tr>
                            {/* ))} */}
                        </tbody>
                        <tfoot>
                            {/* <tr className="border-b border-gray-200">
                                <td colSpan={3} className="py-2 px-4 text-right">Subtotal</td>
                                <td className="py-2 px-4 text-right">${subtotal.toFixed(2)}</td>
                            </tr> */}
                            <tr className="border-b border-gray-200">
                                <td colSpan={3} className="py-2 px-4 text-right">Delivery Charge</td>
                                <td className="py-2 px-4 text-right">${order.deliveryCharge.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className="py-2 px-4 text-right font-medium">Total</td>
                                <td className="py-2 px-4 text-right font-bold">${order?.total.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2 mt-6">
                             <button
                                 onClick={handleSave}
                                 className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                             >
                                 <SaveIcon className="h-4 w-4" />
                                 Save as PDF
                             </button>
                             <button
                                 onClick={handlePrint}
                                 className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                             >
                                 <PrinterIcon className="h-4 w-4" />
                                 Print
                             </button>
                         </div>
                </div>
                <div className="bg-pink-600 p-2"></div>
            </div>
        </div>
    );
}


// Custom icon components to replace lucide-react
// function CalendarIcon({ className }: { className?: string }) {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className={className}
//         >
//             <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//             <line x1="16" x2="16" y1="2" y2="6" />
//             <line x1="8" x2="8" y1="2" y2="6" />
//             <line x1="3" x2="21" y1="10" y2="10" />
//         </svg>
//     )
// }

function PrinterIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect width="12" height="8" x="6" y="14" />
        </svg>
    )
}

function SaveIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
        </svg>
    )
}

