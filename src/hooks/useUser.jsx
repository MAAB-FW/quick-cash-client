import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();

    const {
        data: user,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["user"],
        // enabled: !loading && !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/userInfo`);
            // console.log(res.data.role);
            return res.data;
        },
    });

    return { user, isPending, refetch };
};

export default useUser;
