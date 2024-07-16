import React from "react";
import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <RingLoader color="#2a3cb3" size={100}></RingLoader>
        </div>
    );
};

export default LoadingSpinner;
