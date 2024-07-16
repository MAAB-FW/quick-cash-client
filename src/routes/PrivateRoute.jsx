import LoadingSpinner from "@/components/LoadingSpinner";
import useAuth from "@/hooks/useAuth";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <LoadingSpinner />;

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
};
