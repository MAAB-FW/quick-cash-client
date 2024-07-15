import { createBrowserRouter } from "react-router-dom"
import Dashboard from "@/pages/Dashboard"

export const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
    },
])
