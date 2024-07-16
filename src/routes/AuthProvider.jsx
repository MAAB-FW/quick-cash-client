import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logOut = async () => {
        const resp = await axios.post(`${import.meta.env.VITE_API_URL}/logout`, user, { withCredentials: true });
        if (resp.data.success) {
            setUser(null);
            toast.success("Logged out successfully!");
            return true;
        }
    };

    useEffect(() => {
        const stateChange = async () => {
            const resp = await axios.get(`${import.meta.env.VITE_API_URL}/userInfo`, { withCredentials: true });
            setLoading(false);
            setUser(resp.data);
        };
        return () => stateChange();
    }, []);
    console.log(user);
    const authInfo = { user, setUser, loading, setLoading, logOut };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
