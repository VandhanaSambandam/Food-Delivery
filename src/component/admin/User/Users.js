import React, { Component } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import Footer from "../../../layouts/admin/Footer";
import AdminNavbar from "../../../layouts/admin/AdminNavbar";
import Sidebar from "../../../layouts/admin/Sidebar";
import axios from "axios";
import AddEditUser from "./AddEditUser";

class Users extends Component {
  columns = [
    {
      id: 1,
      name: "FirstName",
      selector: (row) => row.FirstName,
      sortable: true,
      reorder: true,
    },
    {
      id: 2,
      name: "LastName",
      selector: (row) => row.LastName,
      sortable: true,
      reorder: true,
    },
    {
      id: 3,
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      right: true,
      reorder: true,
    },
    {
      id: 4,
      name: "Type",
      selector: (row) => row.TypeOfuser,
      sortable: true,
      right: true,
      reorder: true,
    },
    {
      id: 5,
      name: "Actions",
      cell: (record) => {
        
        return (
          <div>
            

            <button
              className="btn btn-primary btn-sm ms-2"
              onClick={() => {
                this.onEdit(record.id);
              }}
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm ms-2"
              onClick={() => {
                this.onDelete(record.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.getUsers();
  }

  getUsers() {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        this.success(response.data.users);
      })
      .catch((error) => {
        this.failure(error);
      });
  }
  //

  success(data) {
    this.setState({
      users: data,
    });
  }

  failure(error) {
    console.log(error);
  }

 

  render() {
    return (
      <div className="sb-nav-fixed">
        <AdminNavbar />

        <div id="layoutSidenav">
          <Sidebar />

          <div id="layoutSidenav_content">
            <main>
              <h1 class="mt-5 ms-5">USERS LIST</h1>
              <div className="mx-5">
                <DataTable
                  title="Users"
                  columns={this.columns}
                  data={this.state.users}
                  defaultSortFieldId={1}
                  pagination
                  selectableRows
                />
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Users;
