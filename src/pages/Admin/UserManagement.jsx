import LoadingSpinner from "@/components/LoadingSpinner";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { RingLoader } from "react-spinners";

const UserManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState("");
    const { data: users, isPending } = useQuery({
        queryKey: ["users", searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${searchText}`);
            // console.log(res.data);
            return res.data;
        },
    });
    // const [users, setUsers] = useState(users);

    const handleToggleStatus = (userId) => {
        console.log(userId);
    };

    // if (isPending) {
    //     return <LoadingSpinner />;
    // }

    return (
        <div className="min-h-[50vh] p-4">
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
                                <td colSpan="4">
                                    <div className="flex justify-center items-center h-[50vh]">
                                        <RingLoader color="#2a3cb3" size={100}></RingLoader>
                                    </div>
                                </td>
                            ) : users?.length < 1 ? (
                                <td colSpan="4">
                                    <div className="flex justify-center items-center h-[50vh]">Empty</div>
                                </td>
                            ) : (
                                users?.map((user) => (
                                    <tr key={user._id} className="*:text-center *:min-w-32">
                                        <td className="py-2 px-4 border-b">{user.name}</td>
                                        <td className="py-2 px-4 border-b">{user.email}</td>
                                        <td className="py-2 px-4 border-b">
                                            <span
                                                className={`py-1 px-3 rounded-full text-white ${
                                                    user.status === "approved" ? "bg-green-500" : "bg-red-500"
                                                }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            <button
                                                onClick={() => handleToggleStatus(user.id)}
                                                className={`py-1 px-3 rounded-lg ${
                                                    user.status === "approved"
                                                        ? "bg-red-500 text-white"
                                                        : "bg-green-500 text-white"
                                                }`}
                                            >
                                                {user.status === "approved" ? "Block" : "Activate"}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
