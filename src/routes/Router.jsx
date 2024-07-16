import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/shared/Login";
import Register from "@/pages/shared/Register";

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
            {
                // path
            },
        ],
    },
]);
