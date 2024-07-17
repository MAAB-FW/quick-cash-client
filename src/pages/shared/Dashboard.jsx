import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { NavLink, Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { MdMenuOpen, MdAdminPanelSettings, MdManageAccounts } from "react-icons/md";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { IoMdLogOut } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { SiMoneygram } from "react-icons/si";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiFileUserFill } from "react-icons/ri";
import { TbCurrencyTaka, TbSettingsShare } from "react-icons/tb";
import { useRole } from "@/hooks/useRole";
import LoadingSpinner from "@/components/LoadingSpinner";

const Dashboard = () => {
    const { logOut, user } = useAuth();
    const navigate = useNavigate();
    const { role, isPending } = useRole();
    if (isPending) {
        return <LoadingSpinner />;
    }
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
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                    }
                                >
                                    <RiFileUserFill className="text-xl" />
                                    Overview
                                </NavLink>
                                {role === "admin" && (
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
                                )}
                                {role === "user" && (
                                    <>
                                        {/* <DropdownMenuItem className="p-0"> */}
                                        <NavLink
                                            to="/cashInUser"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                    : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            }
                                        >
                                            <RiMoneyDollarCircleLine className="text-xl" />
                                            Cash In
                                        </NavLink>
                                        <NavLink
                                            to="/cashOutUser"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                    : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            }
                                        >
                                            <MdOutlineAttachMoney className="text-xl" />
                                            Cash Out
                                        </NavLink>
                                        <NavLink
                                            to="/sendMoney"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                    : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            }
                                        >
                                            <SiMoneygram className="text-xl" />
                                            Send Money
                                        </NavLink>
                                        <NavLink
                                            to="/TransactionsHistoryUser"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                    : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            }
                                        >
                                            <LuHistory className="text-xl" />
                                            Transactions History
                                        </NavLink>
                                    </>
                                )}
                                {role === "agent" && (
                                    <>
                                        <NavLink
                                            to="/transactionManagement"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                    : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            }
                                        >
                                            <TbSettingsShare className="text-xl" />
                                            Transaction Management
                                        </NavLink>
                                        <NavLink
                                            to="/transactionsHistoryAgent"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                    : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                            }
                                        >
                                            <LuHistory className="text-xl" />
                                            Transactions History
                                        </NavLink>
                                    </>
                                )}

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
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="flex max-w-fit gap-2 justify-center items-center font-semibold focus:outline-none focus:ring-1 focus:ring-gray-600">
                        <img src={logo} className="size-6" alt="" />
                        QuickCash
                    </div>
                    {user.balance ? (
                        <p className="flex items-center">
                            Balance:<span className="font-semibold text-green-600 ml-1">{user.balance.toFixed(2)}</span>
                            <TbCurrencyTaka />
                        </p>
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>

            <div
                id="application-sidebar-dark"
                className="hs-overlay h-full [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10 overflow-y-auto md:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
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
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                }
                            >
                                <RiFileUserFill className="text-xl" />
                                Overview
                            </NavLink>
                        </li>
                        {role === "admin" && (
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
                        )}
                        {role === "user" && (
                            <>
                                <li>
                                    <NavLink
                                        to="/cashInUser"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <RiMoneyDollarCircleLine className="text-xl" />
                                        Cash In
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/cashOutUser"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <MdOutlineAttachMoney className="text-xl" />
                                        Cash Out
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/sendMoney"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <SiMoneygram className="text-xl" />
                                        Send Money
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/TransactionsHistoryUser"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <LuHistory className="text-xl" />
                                        Transactions History
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {role === "agent" && (
                            <>
                                <li>
                                    <NavLink
                                        to="/transactionManagement"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <TbSettingsShare className="text-xl" />
                                        Transaction Management
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/transactionsHistoryAgent"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
                                                : "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                                        }
                                    >
                                        <LuHistory className="text-xl" />
                                        Transactions History
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>

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
                    className="w-full max-w-52 mx-auto flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-red-500 rounded-lg hover:bg-gray-800 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600"
                >
                    <IoMdLogOut className="text-xl" /> Logout
                </button>
            </div>

            <div className="w-full pt-5 px-4 sm:px-6 md:px-8 lg:ps-72 font-mont">
                <Outlet></Outlet>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Dashboard;
