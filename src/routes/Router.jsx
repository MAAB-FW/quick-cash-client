import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/shared/Login";
import Register from "@/pages/shared/Register";
import Dashboard from "@/pages/shared/Dashboard";
import SendMoney from "@/pages/User/SendMoney";
import CashOutUser from "@/pages/User/CashOutUser";
import PrivateRoute from "./PrivateRoute";
import CashInUser from "@/pages/User/CashInUser";
import TransactionsHistoryUser from "@/pages/User/TransactionsHistoryUser";
import TransactionsHistoryAgent from "@/pages/Agent/TransactionsHistoryAgent";
import TransactionManagement from "@/pages/Agent/TransactionManagement";
import SystemMonitoring from "@/pages/Admin/SystemMonitoring";
import UserManagement from "@/pages/Admin/UserManagement";
import Overview from "@/pages/shared/Overview";

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
            {
                index:true,
                element: (
                    <PrivateRoute>
                        <Overview />
                    </PrivateRoute>
                ),
            },
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
            {
                path: "/cashInUser",
                element: (
                    <PrivateRoute>
                        <CashInUser />
                    </PrivateRoute>
                ),
            },
            {
                path: "/transactionsHistoryUser",
                element: (
                    <PrivateRoute>
                        <TransactionsHistoryUser />
                    </PrivateRoute>
                ),
            },
            // agents pages
            {
                path: "/transactionsHistoryAgent",
                element: (
                    <PrivateRoute>
                        <TransactionsHistoryAgent />
                    </PrivateRoute>
                ),
            },
            {
                path: "/transactionManagement",
                element: (
                    <PrivateRoute>
                        <TransactionManagement />
                    </PrivateRoute>
                ),
            },
            // admin pages
            {
                path: "/systemMonitoring",
                element: (
                    <PrivateRoute>
                        <SystemMonitoring />
                    </PrivateRoute>
                ),
            },
            {
                path: "/userManagement",
                element: (
                    <PrivateRoute>
                        <UserManagement />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
