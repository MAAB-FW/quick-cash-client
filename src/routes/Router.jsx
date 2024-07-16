import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/shared/Login";
import Register from "@/pages/shared/Register";
import Dashboard from "@/pages/shared/Dashboard";
import SendMoney from "@/pages/User/SendMoney";
import CashOutUser from "@/pages/User/CashOutUser";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/",
        element: <Dashboard></Dashboard>,
        children: [
            // users pages
            {
                path: "/sendMoney",
                element: <SendMoney />,
            },
            {
                path: "/cashOutUser",
                element: <CashOutUser />,
            },
        ],
    },
]);
