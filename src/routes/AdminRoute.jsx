import LoadingSpinner from "@/components/LoadingSpinner";
import { useRole } from "@/hooks/useRole";
import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
    const { role, isPending } = useRole();

    if (isPending) return <LoadingSpinner />;

    if (role === "admin") {
        return children;
    }

    return <Navigate to="/" replace></Navigate>;
};

export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.node,
};
