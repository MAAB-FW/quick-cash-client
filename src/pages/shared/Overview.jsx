import useAuth from "@/hooks/useAuth";
import { useRole } from "@/hooks/useRole";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const Overview = () => {
    const { user } = useAuth();
    const { role } = useRole();

    return (
        <div className="h-full flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    {role && (
                        <>
                            <span className="uppercase">{role.slice(0, 1)}</span>
                            {role.slice(1)}
                        </>
                    )}{" "}
                    Overview
                </h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Name</h3>
                    <p className="text-gray-600">{user.name}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Email Address</h3>
                    <p className="text-gray-600">{user.email}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Phone Number</h3>
                    <p className="text-gray-600">{user.phone}</p>
                </div>
                {user.balance && (
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-700">Account Balance</h3>
                        <p className="flex items-center">
                            <span className="font-semibold text-green-600">{user.balance.toFixed(2)}</span>
                            <TbCurrencyTaka />
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Overview;
