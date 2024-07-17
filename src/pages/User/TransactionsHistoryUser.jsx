import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const TransactionsHistoryUser = () => {
    const mockTransactions = [
        { id: 1, date: "2024-07-01", type: "Cash In", amount: 1000 },
        { id: 2, date: "2024-07-02", type: "Send Money", amount: -200 },
        { id: 3, date: "2024-07-03", type: "Cash Out", amount: -300 },
        { id: 4, date: "2024-07-04", type: "Receive Money", amount: 150 },
        { id: 5, date: "2024-07-05", type: "Cash In", amount: 500 },
        { id: 6, date: "2024-07-06", type: "Send Money", amount: -50 },
        { id: 7, date: "2024-07-07", type: "Cash Out", amount: -100 },
        { id: 8, date: "2024-07-08", type: "Receive Money", amount: 250 },
        { id: 9, date: "2024-07-09", type: "Cash In", amount: 700 },
        { id: 10, date: "2024-07-10", type: "Send Money", amount: -100 },
    ];
    return (
        <div className="">
            <div className=" mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Transaction History</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">Transaction ID</th>
                                <th className="py-2">Type</th>
                                <th className="py-2">Amount</th>
                                <th className="py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockTransactions.map((transaction) => (
                                <tr key={transaction.id} className="bg-gray-100 text-center *:min-w-36">
                                    <td className="border px-4 py-2">{transaction.id}</td>
                                    <td className="border px-4 py-2">{transaction.type}</td>
                                    <td
                                        className={`border px-4 py-2 flex items-center ${
                                            transaction.amount < 0 ? "text-red-500" : "text-green-500"
                                        }`}
                                    >
                                        {transaction.amount < 0 ? "-" : "+"}
                                        <TbCurrencyTaka />
                                        {Math.abs(transaction.amount).toFixed(2)}
                                    </td>
                                    <td className="border px-4 py-2">{transaction.date}</td>
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
