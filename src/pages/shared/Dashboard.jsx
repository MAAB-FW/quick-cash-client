import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { NavLink, Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { MdMenuOpen, MdAdminPanelSettings, MdManageAccounts, MdReport } from "react-icons/md";
import { FaList, FaPen, FaUser } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { IoMdLogOut } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";

const Dashboard = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const role = "admin";
    return (
        <div className="max-w-7xl mx-auto font-lato">
            <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
                <div className="flex items-center justify-between py-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex lg:hidden">
                            <MdMenuOpen className="text-4xl"></MdMenuOpen>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white rounded p-1 m-2 border">
                            {/* <DropdownMenuLabel className="py-2 flex items-center justify-center">
                                <div
                                    to="/"
                                    className="flex max-w-fit gap-2 justify-center items-center font-semibold focus:outline-none focus:ring-1 focus:ring-gray-600"
                                >
                                    <img src={logo} className="size-6" alt="" />
                                    QuickCash
                                </div>
                            </DropdownMenuLabel> */}
                            {/* <DropdownMenuSeparator /> */}
                            {/* general users nav */}
                            <DropdownMenuItem className="p-0">
                                <NavLink
                                    to="/overview"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                    }
                                >
                                    <GrContactInfo className="text-xl" />
                                    Overview
                                </NavLink>
                                {role === "admin" ? (
                                    <>
                                        <NavLink
                                            to="/systemMonitoring"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                    : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            }
                                        >
                                            <MdAdminPanelSettings className="text-xl" />
                                            System Monitoring
                                        </NavLink>
                                        <NavLink
                                            to="/userManagement"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                    : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            }
                                        >
                                            <MdManageAccounts className="text-xl" />
                                            User Management
                                        </NavLink>
                                        {/* </DropdownMenuItem> */}
                                    </>
                                ) : (
                                    <>
                                        {/* <DropdownMenuItem className="p-0"> */}
                                        <NavLink
                                            to="/dashboard/user"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                    : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            }
                                        >
                                            <FaUser />
                                            User
                                        </NavLink>
                                    </>
                                )}
                            </DropdownMenuItem>

                            {/* admin nav */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="flex max-w-fit gap-2 justify-center items-center font-semibold focus:outline-none focus:ring-1 focus:ring-gray-600">
                        <img src={logo} className="size-6" alt="" />
                        QuickCash
                    </div>
                    <p>
                        Balance: <span className="font-semibold text-green-600">{"40"}</span>৳
                    </p>
                </div>
            </div>

            <div
                id="application-sidebar-dark"
                className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10 overflow-y-auto md:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
            >
                <div className="px-6">
                    <p className="flex-none text-xl flex items-center gap-3 ml-3 font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600">
                        <img src={logo} className="size-6" alt="" />
                        QuickCash
                    </p>
                </div>

                <nav
                    className="hs-accordion-group p-6 w-full flex flex-col justify-between flex-wrap"
                    data-hs-accordion-always-open
                >
                    <ul className="space-y-1.5">
                        <li>
                            <NavLink
                                to="/overview"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                }
                            >
                                <GrContactInfo className="text-xl" />
                                Overview
                            </NavLink>
                        </li>
                        {role === "admin" ? (
                            <>
                                <li>
                                    <NavLink
                                        to="/systemMonitoring"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <MdAdminPanelSettings className="text-xl" />
                                        System Monitoring
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/userManagement"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <MdManageAccounts className="text-xl" />
                                        User Management
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/myProfile"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <FaUser />
                                        My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/addPost"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <FaPen />
                                        Add Post
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/myPosts"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <FaList></FaList>
                                        My Posts
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                    <div>
                        <button
                            onClick={() =>
                                logOut()
                                    .then((res) => {
                                        if (res) {
                                            toast.success("Logged out successfully!");
                                            navigate("/login");
                                        }
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    })
                            }
                            className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-red-500 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                        >
                            <IoMdLogOut className="text-xl" /> Logout
                        </button>
                    </div>
                </nav>
            </div>

            <div className="w-full pt-5 px-4 sm:px-6 md:px-8 lg:ps-72 font-mont">
                <Outlet></Outlet>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Dashboard;
