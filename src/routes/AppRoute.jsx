import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import ProtectedLayout from "../layouts/ProtectedLayout";
import AddTransection from "../components/AddTransection";
import Transections from "../pages/Transections";
import Income from "../pages/Income";
import Expance from "../pages/Expance";
import Budgets from "../pages/Budgets";
import Financial_Goal from "../pages/Financial_Goal";
import Reports from "../pages/Reports";
import Setting from "../pages/Setting";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <ProtectedLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "transection",
          element: <Transections />,
        },
        {
          path: "expance",
          element: <Expance />,
        },
        {
          path: "income",
          element: <Income />,
        },
        {
          path: "transection",
          element: <Transections />,
        },
        {
          path: "budget",
          element: <Budgets />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
        {
          path: "report",
          element: <Reports />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
