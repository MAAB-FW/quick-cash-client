import LoadingSpinner from "@/components/LoadingSpinner";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useUser from "@/hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const TransactionsHistoryUser = () => {
    const { user } = useUser();
    const axiosSecure = useAxiosSecure();

    const { data: transactions = [], isPending } = useQuery({
        queryKey: ["historyUser"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/historyUser/${user.phone}`);
            // console.log(res.data);
            return res.data;
        },
    });
    if (isPending) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    return (
        <div className="">
            <div className=" mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Transaction History (recent 10)</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white text-nowrap">
                        <thead>
                            <tr>
                                <th className="py-2">Transaction ID</th>
                                <th className="py-2">Type</th>
                                <th className="py-2">Amount</th>
                                <th className="py-2">Fee</th>
                                <th className="py-2">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions?.map((transaction) => (
                                <tr key={transaction._id} className="bg-gray-100 text-center">
                                    <td className="border px-4 py-2">{transaction._id}</td>
                                    <td className="border px-4 py-2">
                                        {transaction.receiverPhone === user.phone ? <>Receive Money</> : transaction.type}
                                    </td>
                                    <td
                                        className={`border px-4 py-2 flex items-center ${
                                            transaction.receiverPhone === user.phone || transaction.type === "Cash In"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {transaction.receiverPhone === user.phone || transaction.type === "Cash In" ? "+" : "-"}
                                        <TbCurrencyTaka />
                                        {Math.abs(transaction.amount).toFixed(2)}
                                    </td>
                                    <td className="border px-4 py-2">{transaction.fee ? transaction.fee?.toFixed(2) : <>-</>}</td>
                                    <td className="border px-4 py-2">{new Date(transaction.time).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TransactionsHistoryUser;
