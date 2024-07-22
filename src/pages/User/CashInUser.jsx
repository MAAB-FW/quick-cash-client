import useAxiosSecure from "@/hooks/useAxiosSecure";
import useUser from "@/hooks/useUser";
import React from "react";
import toast from "react-hot-toast";
import { TbCurrencyTaka } from "react-icons/tb";

const CashInUser = () => {
    const { user, refetch } = useUser();
    const axiosSecure = useAxiosSecure();

    const handleCashInRequest = async (e) => {
        e.preventDefault();
        const amount = e.target.amount.value;
        const agent = e.target.agent.value;
        if (0 > amount) {
            return toast.error("Please type valid amount!");
        }
        if (!agent) {
            return toast.error("Please select an agent!");
        }
        const cashInReq = {
            userInfo: { name: user.name, phone: user.phone, email: user.email },
            agentPhone: agent,
            amount: amount,
            type: "Cash In",
            status: "requested",
            time: new Date(),
        };
        console.log(cashInReq);
        //TODO: sweet alert
        try {
            const res = await axiosSecure.post("/cashInReq", cashInReq);
            console.log(res.data);
            if (res.data.message) {
                return toast.error(res.data.message);
            }
            if (res.data.insertedId) {
                e.target.reset();
                refetch();
                return toast.success("Your request sent successfully!");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Cash-In</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Your Balance</h3>
                    <p className="flex items-center">
                        <TbCurrencyTaka />
                        <span className="font-semibold text-green-600">{user?.balance.toFixed(2)}</span>
                    </p>
                </div>
                <form onSubmit={handleCashInRequest}>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="amount"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter amount to cash-in"
                            // value={"amount"}
                            required
                        />
                    </div>
                    <p className="-mt-4 mb-1 text-gray-600">
                        <small>(charge free)</small>
                    </p>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="agent"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter agent number"
                        />
                        {/* <select
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            name="agent"
                            // value={selectedAgent ? selectedAgent.id : ""}
                        >
                            <option value="">Select an agent</option>
                            {agents.map((agent) => (
            <option key={agent.id} value={agent.id}>
                {agent.name} (Balance: ${agent.balance})
            </option>
            ))}
                        </select> */}
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold">
                        Send Cash-In Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CashInUser;
