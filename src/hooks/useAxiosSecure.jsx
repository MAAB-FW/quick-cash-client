import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();

    axiosSecure.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem("access-token");
            // console.log("req stooped by interceptors", token)
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        function (error) {
            console.log(error);
            return Promise.reject(error);
        },
    );

    axiosSecure.interceptors.response.use(
        function (response) {
            return response;
        },
        async (error) => {
            const status = error.response.status;
            console.log("status error in the interceptors", status);
            // for 401 or 403 logout the user and move the user to the login page
            if (status === 401 || status === 403) {
                await logOut();
            }
            return Promise.reject(error);
        },
    );

    return axiosSecure;
};

export default useAxiosSecure;
