import useAxiosSecure from "@/hooks/useAxiosSecure";
import useUser from "@/hooks/useUser";
import React from "react";
import toast from "react-hot-toast";
import { TbCurrencyTaka } from "react-icons/tb";

const CashOutUser = () => {
    const { user, refetch } = useUser();
    const axiosSecure = useAxiosSecure();

    const handleCashOutRequest = async (e) => {
        e.preventDefault();
        const amount = e.target.amount.value;
        const pin = e.target.pin.value;
        const agent = e.target.agent.value;
        if (!amount || user.balance < amount) {
            return toast.error("Please type valid amount!");
        }
        if (!pin) {
            return toast.error("Please enter your pin!");
        }
        if (!agent) {
            return toast.error("Please select an agent!");
        }
        // sweet alert
        const cashOutReq = {
            userInfo: { name: user.name, phone: user.phone, email: user.email },
            agentPhone: agent,
            amount,
            type: "Cash Out",
            status: "requested",
            time: new Date(),
            pin,
        };
        // console.log(cashOutReq);
        //TODO: sweet alert
        try {
            const res = await axiosSecure.post("/cashOutReq", cashOutReq);
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
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Cash-Out</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Your Balance</h3>
                    <p className="flex items-center">
                        <TbCurrencyTaka />
                        <span className="font-semibold text-green-600">{user?.balance.toFixed(2)}</span>
                    </p>
                </div>
                <form onSubmit={handleCashOutRequest}>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="amount"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter amount to cash-out"
                        />
                    </div>
                    <p className="-mt-4 mb-1 text-gray-600">
                        <small>(charge 1.5% of amount)</small>
                    </p>
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
                            name="agent"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            placeholder="Enter agent number"
                        />
                        {/* <select
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            name="agent"
                            // value={selectedAgent ? selectedAgent.id : ""}
                        >
                            <option value="" disabled>
                                Select an agent
                            </option>
                            {agents.map((agent) => (
                                <option key={agent.id} value={agent.id}>
                                    {agent.name} (Balance: ${agent.balance.toFixed(2)})
                                </option>
                            ))}
                        </select> */}
                    </div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold">
                        Send Cash-Out Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CashOutUser;
