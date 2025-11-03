import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideAdminBar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";


const PrivateLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex">
      <SideAdminBar isOpen={sidebarOpen} />

      <div className="flex flex-col flex-1">
        <AdminNavbar toggleSidebar={toggleSidebar} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>

  );
};

export default PrivateLayout;
