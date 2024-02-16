import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Supplies from "@/pages/supplies/Supplies";
import SupplyDetail from "@/components/ui/SupplyDetail";
import AdminLayout from "@/components/layout/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supplies",
        element: <Supplies />,
      },
      {
        path: "/supplies/:id",
        element: <SupplyDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
  },
]);
