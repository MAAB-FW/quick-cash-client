import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaPhone, FaUser } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Register = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const pin = e.target.pin.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const role = e.target.role.value;
        if (pin.length < 5) {
            return toast.error("Pin must be 5 characters long!");
        }
        if (pin.length > 5) {
            return toast.error("Pin can't be more than 5 characters!");
        }
        if (phone.length < 10) {
            return toast.error("Invalid Phone number!");
        }
        const status = "pending";
        const userInfo = { name, pin, phone, email, role, status };
        try {
            const res = await axios.post("http://localhost:5000/createUser", userInfo);
            console.log(res.data);
            if (res.data.status === "pending") {
                return toast.success("Your request is pending!");
            }
            if (res.data.status === "approved") {
                return toast.error("Account Already Exist!");
            }
            if (res.data.status === "rejected") {
                return toast.error("Your Account has been banned!");
            }
            if (res.data.insertedId) {
                toast.success("Form Submitted successfully!");
                e.target.reset();
            }
        } catch (error) {
            console.log(error);
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
                <form onSubmit={handleRegister} className="bg-white">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Register</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Your Account</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <FaUser className="text-[#9ca3af]" />
                        <input
                            className="pl-2 outline-none border-none"
                            type="text"
                            name="name"
                            placeholder="Full name"
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
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <FaPhone className="text-[#9ca3af]" />
                        <input
                            className="pl-2 outline-none border-none"
                            type="number"
                            name="phone"
                            placeholder="Phone number"
                            required
                        />
                    </div>
                    <div className="flex items-center py-2 px-3 rounded-2xl">
                        <p className="text-gray-600">I want to be a</p>
                        <select className="text-teal-500" name="role" id="">
                            <option value="user">User</option>
                            <option value="agent">Agent</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                    >
                        Submit
                    </button>
                    <span className="text-sm ml-2">
                        Already have an account?{" "}
                        <Link to="/login" className="hover:text-blue-500 font-semibold">
                            Login
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Register;
