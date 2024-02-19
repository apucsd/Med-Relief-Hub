import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Supplies from "@/pages/supplies/Supplies";
import SupplyDetail from "@/components/ui/SupplyDetail";
import AdminLayout from "@/components/layout/AdminLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/pages/admin/Dashboard";
import AllSupplies from "@/pages/admin/AllSupplies";
import CreateSupply from "@/pages/admin/CreateSupply";
import Profile from "@/pages/Profile";

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
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/supplies",
        element: <AllSupplies />,
      },
      {
        path: "/dashboard/create-supply",
        element: <CreateSupply />,
      },
    ],
  },
]);
