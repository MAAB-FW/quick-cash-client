import LoadingSpinner from "@/components/LoadingSpinner";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const SystemMonitoring = () => {
    const axiosSecure = useAxiosSecure();

    const { data: transactions = [], isPending } = useQuery({
        queryKey: ["systemMonitoring"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/systemMonitoring`);
            console.log(res.data);
            return res.data;
        },
    });
    if (isPending) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div className="">
            <div className="mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">System Monitoring - All Transactions</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white text-nowrap">
                        <thead>
                            <tr>
                                <th className="py-2">Transaction ID</th>
                                <th className="py-2">Transaction Type</th>
                                <th className="py-2">User Phone</th>
                                <th className="py-2">Amount</th>
                                <th className="py-2">Fee</th>
                                <th className="py-2">Transaction Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction._id} className="bg-gray-100 text-center">
                                    <td className="border px-4 py-2">{transaction._id}</td>
                                    <td className="border px-4 py-2">{transaction.type}</td>
                                    <td className="border px-4 py-2">{transaction.userInfo.phone}</td>
                                    <td className={`border px-4 py-2 flex items-center `}>
                                        {/* {transaction.amount < 0 ? "-" : "+"} */}
                                        <TbCurrencyTaka />
                                        {Math.abs(transaction.amount).toFixed(2)}
                                    </td>
                                    <td className="border px-4 py-2">{transaction.fee ? transaction.fee?.toFixed(2) : <>-</>}</td>
                                    <td className="border px-4 py-2">{transaction.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SystemMonitoring;
