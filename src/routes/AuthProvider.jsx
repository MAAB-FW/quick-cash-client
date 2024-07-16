import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logOut = async () => {
        localStorage.removeItem("access-token");
        // const resp = await axios.post(`${import.meta.env.VITE_API_URL}/logout`, user, { withCredentials: true });
        // if (resp.data.success) {
        //     setUser(null);
        //     setLoading(false);
        //     console.log('logged out');
            return true;
        // }
    };

    useEffect(() => {
        const stateChange = async () => {
            try {
                const token = localStorage.getItem("access-token");
                const resp = await axios.get(`${import.meta.env.VITE_API_URL}/userInfo`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                setLoading(false);
                setUser(resp.data);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        // setLoading(false);
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
