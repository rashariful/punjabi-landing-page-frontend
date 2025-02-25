"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingBasket } from "react-icons/fa";
// import { FaGetPocket, FaPeopleGroup, FaPeopleLine } from "react-icons/fa6";
// import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";


const sideBarData = [
  // {
  //   icon: <RiDashboardHorizontalFill className="size-8 text-gray-700" />,
  //   slug: "/",
  //   title: "Dashboard",
  // },
  // {
  //   icon: (
  //     <MdOutlineProductionQuantityLimits className="size-8 text-gray-700" />
  //   ),
  //   slug: "/products",
  //   title: "Products",
  // },
  {
    icon: <FaShoppingBasket className="size-7 text-gray-700" />,
    slug: "/orders",
    title: "Orders",
  },
  // {
  //   icon: <FaPeopleLine className="size-7 text-gray-700" />,
  //   slug: "/users",
  //   title: "Users",
  // },
  // {
  //   icon: <MdPayments className="size-7 text-gray-700" />,
  //   slug: "/transactions",
  //   title: "Transactions",
  // },
  
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-[18%] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-xl">
          <div className="flex justify-center">
            <h1 className="text-gray-700 text-xl font-bold">Prio Fashion BD</h1>
          </div>
          <ul className="space-y-3 font-semibold mt-4 w-full">
            {sideBarData?.map((el, index) => (
              <li key={index}>
                <Link
                  href={el?.slug}
                  className={`flex items-center p-2 text-gray-700 rounded-lg  hover:bg-gray-100 group ${
                    pathname === el?.slug ? "bg-gray-100" : ""
                  }`}
                >
                  {el?.icon}
                  <p className="ms-3 text-lg">{el?.title}</p>
                </Link>
              </li>
            ))}
            <li className="">
              <form >
                <button
                  type="submit"
                  className={`flex items-center p-2 text-gray-700 rounded-lg  hover:bg-gray-100 group w-full`}
                >
                  <IoLogOut className="size-7 text-gray-700" />
                  <p className="ms-3 text-lg">Logout</p>
                </button>
              </form>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
