import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../layouts/admin/Footer";
import AdminNavbar from "../../../layouts/admin/AdminNavbar";
import Sidebar from "../../../layouts/admin/Sidebar";
import axios from "axios";

class AddEditUser extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: this.props.location.state,
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="sb-nav-fixed">
        <AdminNavbar />

        <div id="layoutSidenav">
          <Sidebar />

          <div id="layoutSidenav_content">
            <main>
              <h5 class="mt-5 ms-5">User Add/Edit</h5>
              <div className="mx-5">
                <div class="mb-3">
                  <label for="FirstName" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="FirstName"
                    placeholder="Enter your firstname"
                  />
                </div>
                <div class="mb-3">
                  <label for="LastName" class="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="LastName"
                    placeholder="Enter your lastname"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <select id="TypeOfuser" class="form-select">
                    <option value="customer">Customer</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>

                <div class="mb-3">
                  <button className="btn btn-primary">Save</button>
                  <button className="btn btn-danger ms-2">Cancel</button>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddEditUser;
