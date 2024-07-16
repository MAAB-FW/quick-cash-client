import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { IoMdMail } from "react-icons/io";
import { HiHashtag } from "react-icons/hi";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const Login = () => {
    const { setLoading, setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const pin = e.target.pin.value;
        const email = e.target.email.value;
        if (pin.length < 5) {
            return toast.error("Pin must be 5 characters long!");
        }
        if (pin.length > 5) {
            return toast.error("Pin can't be more than 5 characters!");
        }
        const userInfo = { pin, email };
        try {
            setLoading(true);
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/login/${email}`, userInfo);
            console.log(res.data);
            if (res.data.status === 403) {
                setLoading(false);
                return toast.error(res.data.message);
            }
            if (res.data.status === "pending") {
                setLoading(false);
                return toast.success("Your request has been pending!");
            }
            if (res.data.status === "rejected") {
                setLoading(false);
                return toast.error("Your Account has been banned!");
            }
            if (res.data.status === "approved") {
                const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, userInfo);
                console.log(data);
                if (data.token) {
                    setUser(res.data);
                    navigate("/");
                    localStorage.setItem("access-token", data.token);
                    setLoading(false);
                    return toast.success("Logged in successfully!!");
                }
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className="h-screen md:flex">
            <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">
                <div>
                    <h1 className="text-white flex items-center gap-6 font-bold text-4xl font-sans">
                        <img src={logo} className="size-12" alt="" />
                        QuickCash
                    </h1>
                    <p className="text-white mt-1">The most popular Money Transfer platform</p>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form onSubmit={handleLogin} className="bg-white">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Login</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Your Account</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <IoMdMail className="text-[#9ca3af]" />
                        <input
                            className="pl-2 outline-none border-none"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <HiHashtag className="text-[#9ca3af]" />
                        <input
                            className="pl-2 outline-none border-none"
                            type="password"
                            name="pin"
                            maxLength={5}
                            placeholder="5 Digit Pin"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                    >
                        Login
                    </button>
                    <span className="text-sm ml-2">
                        Don&apos;t have an account?{" "}
                        <Link to="/register" className="hover:text-blue-500 font-semibold">
                            Register
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
