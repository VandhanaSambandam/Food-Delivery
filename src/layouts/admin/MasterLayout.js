import React, { useEffect } from "react";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts";
import titlelogo from "../../image/Foodzielogo1.png";
import Dashboard from "../../component/admin/Dashboard";
import Footer from "./Footer";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import "./MasterLayout.css";

function MasterLayout() {
  return (
    <div className="sb-nav-fixed">
      <AdminNavbar />

      <div id="layoutSidenav">
        <Sidebar />

        <div id="layoutSidenav_content">
          <main>
            <h1 class="D-title mt-5 mx-3"><b>Dashboard</b></h1> 
            <span className="lead mx-3">Welcome to Foodzie Admin!</span>    

            <div class="row">
            <div class="col-xl-3 col-md-6">
                                <div class="m-card mb-4 mt-5">
                                  <img src={titlelogo} width="210px" height="210px" class="mb-5 ms-5"/>
                                    <div class="card-body text-dark  master-title">Total Menus</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="m-card mb-4 mt-5">
                                  <img src={titlelogo} width="210px" height="210px" class="mb-5 ms-5"/>
                                    <div class="card-body text-dark master-title1">Total Revenue</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="m-card mb-4 mt-5 ">
                                  <img src={titlelogo} width="210px" height="210px" class="mb-5 ms-5"/>
                                    
                                    <div class="card-body text-dark master-title2">Total Orders</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="m-card text-dark mb-4 mt-5 ">
                                  <img src={titlelogo} width="210px" height="210px" class="mb-5 ms-5"/>
                                    
                                    <div class="card-body master-title3">Total Clients</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                       
                                    </div>
                                </div>
                            </div>
            </div>

          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MasterLayout;
