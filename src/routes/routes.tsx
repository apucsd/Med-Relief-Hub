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
import LeaderBoard from "@/pages/supplies/LeaderBoard";
import CreateTestimonial from "@/pages/admin/CreateTestimonial";
import Community from "@/pages/community/Community";
import AboutPage from "@/pages/about/AboutPage";
import VolunteerRecruitmentForm from "@/components/forms/VolunteerRecruitmentForm";
import ContactUs from "@/pages/contact/ContactUs";
import DonationSuccess from "@/pages/donation/DonationSuccess";
import DonationFail from "@/pages/donation/DonationFail";

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
        path: "/leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/volunteer",
        element: <VolunteerRecruitmentForm />,
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
    path: "/donate/success/:transactionId",
    element: <DonationSuccess />,
  },
  {
    path: "/donate/fail/:transactionId",
    element: <DonationFail />,
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
      {
        path: "/dashboard/create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
]);
