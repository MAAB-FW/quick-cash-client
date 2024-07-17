import useAuth from "@/hooks/useAuth";
import React from "react";
import toast from "react-hot-toast";
import { TbCurrencyTaka } from "react-icons/tb";

const SendMoney = () => {
    const { user } = useAuth();
    const handleSendMoney = (e) => {
        e.preventDefault();
        const amount = e.target.amount.value;
        const pin = e.target.pin.value;
        const recipient = e.target.recipient.value;
        if (!amount || amount > user.balance) {
            return toast.error("Please type valid amount!");
        }
        if (!pin) {
            return toast.error("Please enter your pin!");
        }
        if (!recipient) {
            return toast.error("Please type valid recipient number!");
        }
        // sweet alert
        console.log("object");
    };
    return (
        <div className="p-4">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Send Money</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Your Balance</h3>
                    <p className="flex items-center">
                        <TbCurrencyTaka />
                        <span className="font-semibold text-green-600">{user.balance.toFixed(2)}</span>
                    </p>
                </div>
                <form onSubmit={handleSendMoney}>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="amount"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter amount to send (minimum 50)"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="pin"
                            maxLength={5}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your PIN"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="recipient"
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                            placeholder="Enter recipient phone number"
                        />
                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold">
                            Send Money
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendMoney;
