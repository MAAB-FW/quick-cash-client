import useAxiosSecure from "@/hooks/useAxiosSecure";
import useUser from "@/hooks/useUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { RingLoader } from "react-spinners";

const TransactionManagement = () => {
    const { refetch: refetchUser } = useUser();
    const axiosSecure = useAxiosSecure();
    const {
        data: transactions,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["TransactionManagement"],
        queryFn: async () => {
            const res = await axiosSecure("/transactionManagement");
            return res.data;
        },
    });

    const { mutateAsync } = useMutation({
        mutationKey: ["transactionAction"],
        mutationFn: async ({ id, action }) => {
            const res = await axiosSecure.patch("/transactionAction", { id, action });
            console.log(res.data);
        },
        onSuccess: () => {
            refetch();
            refetchUser();
        },
    });

    const handleTransaction = async (id, action) => {
        // console.log(id, action);
        mutateAsync({ id, action });
    };
    return (
        <div className="relative pb-5">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Transaction Management</h2>

                <div className="overflow-x-auto">
                    <table className="w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">User Phone</th>
                                <th className="py-2 px-4 border-b">Type</th>

                                <th className="py-2 px-4 border-b">Amount</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isPending ? (
                                <tr>
                                    <td colSpan="4">
                                        <div className="flex justify-center items-center h-[50vh]">
                                            <RingLoader color="#2a3cb3" size={100}></RingLoader>
                                        </div>
                                    </td>
                                </tr>
                            ) : transactions?.length < 1 ? (
                                <tr>
                                    <td colSpan="4">
                                        <div className="flex justify-center items-center h-[50vh]">Empty</div>
                                    </td>
                                </tr>
                            ) : (
                                transactions?.map((transaction) => (
                                    <tr key={transaction._id} className="*:text-center *:min-w-32">
                                        <td className="py-2 px-4 border-b">{transaction.userInfo.phone}</td>
                                        <td className="py-2 px-4 border-b">{transaction.type}</td>
                                        <td className="py-2 px-4 border-b">{transaction.amount}</td>
                                        <td className="py-2 px-4 border-b">
                                            <div className="flex flex-col gap-2">
                                                <button
                                                    onClick={() => handleTransaction(transaction._id, "accept")}
                                                    className={`py-1 px-3 rounded-lg font-semibold text-white bg-green-500 disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-not-allowed`}
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    onClick={() => handleTransaction(transaction._id, "decline")}
                                                    className={`py-1 px-3 rounded-lg font-semibold text-white bg-red-500 disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-not-allowed`}
                                                >
                                                    Decline
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    {/* {isRefetching && (
                        <div className="flex top-1/2 left-1/3  absolute justify-center items-center ">
                            <RingLoader color="#2a3cb3" size={100}></RingLoader>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default TransactionManagement;
