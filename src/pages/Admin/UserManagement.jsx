import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useId, useState } from "react";
import { RingLoader } from "react-spinners";

const UserManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState("");
    const [isRefetching, setIsRefetching] = useState(false);
    const {
        data: users,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["users", searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${searchText}`);
            // console.log(res.data);
            setIsRefetching(false);
            return res.data;
        },
    });
    const { mutateAsync } = useMutation({
        mutationKey: ["status"],
        mutationFn: async ({ userId, role, status, button }) => {
            const res = await axiosSecure.patch(`/userStatus/${userId}`, { role, status, button });
            console.log(res.data);
            if (res.data.modifiedCount) {
                refetch();
            }
        },
    });

    const handleToggleStatus = (userId, role, status, button) => {
        setIsRefetching(true);
        mutateAsync({ userId, role, status, button });
    };

    return (
        <div className="min-h-[50vh] p-4 relative">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">User Management</h2>
                <div className="mb-4">
                    <input
                        autoFocus
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Search by name"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Email</th>

                                <th className="py-2 px-4 border-b">Status</th>
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
                            ) : users?.length < 1 ? (
                                <tr>
                                    <td colSpan="4">
                                        <div className="flex justify-center items-center h-[50vh]">Empty</div>
                                    </td>
                                </tr>
                            ) : (
                                users?.map((user) => (
                                    <tr key={user._id} className="*:text-center *:min-w-32">
                                        <td className="py-2 px-4 border-b">{user.name}</td>
                                        <td className="py-2 px-4 border-b">{user.email}</td>
                                        <td className="py-2 px-4 border-b">
                                            {user.role === "admin" ? (
                                                <span className="py-1 px-3 rounded-full font-bold bg-blue-600 text-white">
                                                    Admin
                                                </span>
                                            ) : (
                                                <span
                                                    className={`py-1 px-3 rounded-full text-white font-semibold ${
                                                        user.status === "approved" ? "bg-green-500" : "bg-red-500"
                                                    }`}
                                                >
                                                    {user.status.slice(0, 1).toUpperCase() + user.status.slice(1)}
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {user.role === "admin" ? (
                                                <></>
                                            ) : (
                                                <div className="flex flex-col gap-2">
                                                    <button
                                                        disabled={user.status === "approved"}
                                                        onClick={() =>
                                                            handleToggleStatus(user._id, user.role, user.status, "approved")
                                                        }
                                                        className={`py-1 px-3 rounded-lg font-semibold text-white bg-green-500 disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-not-allowed`}
                                                    >
                                                        {user.status === "pending" ? "Approve" : "Activate"}
                                                    </button>
                                                    <button
                                                        disabled={user.status === "rejected"}
                                                        onClick={() =>
                                                            handleToggleStatus(user._id, user.status, user.role, "rejected")
                                                        }
                                                        className={`py-1 px-3 rounded-lg font-semibold text-white bg-red-500 disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-not-allowed`}
                                                    >
                                                        {user.status === "pending" ? "Reject" : "Block"}
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    {isRefetching && (
                        <div className="flex top-1/2 left-1/3  absolute justify-center items-center ">
                            <RingLoader color="#2a3cb3" size={100}></RingLoader>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
