
import type { Metadata } from "next";
// import Sidebar from "@/components/dashboard/Siderbar";

export const metadata: Metadata = {
  title: "Prio Fashion BD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`bg-[#f8f8f8]`}>
          <div className="flex items-start">
            {/* <div className="w-[18%]">
              <Sidebar />
            </div> */}
            <div className="w-[82%]">
       
              <div className="p-10">
            
                {children}
              </div>
            </div>
          </div>
        </body>
     
    </html>
  );
}
