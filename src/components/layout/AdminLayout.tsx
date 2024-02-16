import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <AdminSidebar />
      <div className="col-span-10 bg-red-100 h-screen w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
