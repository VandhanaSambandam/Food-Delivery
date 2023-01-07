import React from 'react';
import Footer from "../../layouts/admin/Footer";
import AdminNavbar from "../../layouts/admin/AdminNavbar";
import Sidebar from "../../layouts/admin/Sidebar";

function Dashboard() {
  return (
    <div className="sb-nav-fixed">
      <AdminNavbar />

      <div id="layoutSidenav">
        <Sidebar />

        <div id="layoutSidenav_content">
          <main>
            <h1 class="mt-4 ms-2">Dashboard is here</h1>           
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard