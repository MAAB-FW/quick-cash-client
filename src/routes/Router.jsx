import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/shared/Login";
import Register from "@/pages/shared/Register";
import Dashboard from "@/pages/shared/Dashboard";
import SendMoney from "@/pages/User/SendMoney";
import CashOutUser from "@/pages/User/CashOutUser";
import PrivateRoute from "./PrivateRoute";

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
        element: (
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        children: [
            // users pages
            {
                path: "/sendMoney",
                element: (
                    <PrivateRoute>
                        <SendMoney />
                    </PrivateRoute>
                ),
            },
            {
                path: "/cashOutUser",
                element: (
                    <PrivateRoute>
                        <CashOutUser />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
