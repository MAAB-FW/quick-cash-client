import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const SystemMonitoring = () => {
    const transactions = [
        { id: 1, type: "Cash In", mobile: "0123456789", amount: 1000, fee: 0, time: "2024-07-01 12:00:00" },
        { id: 2, type: "Send Money", mobile: "0123456789", amount: -200, fee: 5, time: "2024-07-02 14:30:00" },
        { id: 3, type: "Cash Out", mobile: "0123456789", amount: -300, fee: 4.5, time: "2024-07-03 16:00:00" },
        { id: 4, type: "Receive Money", mobile: "0123456789", amount: 150, fee: 0, time: "2024-07-04 09:00:00" },
        { id: 5, type: "Cash In", mobile: "0123456789", amount: 500, fee: 0, time: "2024-07-05 11:15:00" },
        { id: 6, type: "Send Money", mobile: "0123456789", amount: -50, fee: 5, time: "2024-07-06 13:45:00" },
        { id: 7, type: "Cash Out", mobile: "0123456789", amount: -100, fee: 1.5, time: "2024-07-07 10:30:00" },
        { id: 8, type: "Receive Money", mobile: "0123456789", amount: 250, fee: 0, time: "2024-07-08 15:00:00" },
        { id: 9, type: "Cash In", mobile: "0123456789", amount: 700, fee: 0, time: "2024-07-09 17:45:00" },
        { id: 10, type: "Send Money", mobile: "0123456789", amount: -100, fee: 5, time: "2024-07-10 19:30:00" },
    ];
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
                                <th className="py-2">Mobile Number</th>
                                <th className="py-2">Amount</th>
                                <th className="py-2">Fee</th>
                                <th className="py-2">Transaction Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="bg-gray-100 text-center *:min-w-36">
                                    <td className="border px-4 py-2">{transaction.id}</td>
                                    <td className="border px-4 py-2">{transaction.type}</td>
                                    <td className="border px-4 py-2">{transaction.mobile}</td>
                                    <td
                                        className={`border px-4 py-2 flex items-center ${
                                            transaction.amount < 0 ? "text-red-500" : "text-green-500"
                                        }`}
                                    >
                                        {transaction.amount < 0 ? "-" : "+"}
                                        <TbCurrencyTaka />
                                        {Math.abs(transaction.amount).toFixed(2)}
                                    </td>
                                    <td className="border px-4 py-2">{transaction.fee.toFixed(2)}</td>
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
