

import { Component } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Cart from "./Components/Cart/Cart";
import Bookings from "./Components/Bookings/Bookings";
import { Provider } from "react-redux";
import store from "./store/store";
import Protected from "./Components/Protected/Protected";
import MasterLayout from "./layouts/admin/MasterLayout";
import Checkout from "./Components/Checkout/Checkout";
import Dashboard from "./component/admin/Dashboard";
import Users from "./component/admin/User/Users";
import AddEditUser from "./component/admin/User/AddEditUser";

class App extends Component {
  render() {
    

    return (
      <div>



        
        <Router>
          <Provider store={store}>
            <Routes>
              <Route
                exact
                path="/"
                element={<Protected Component={Home} />}
              ></Route>

              <Route
                path="/About"
                element={<Protected Component={About} />}
              ></Route>

              <Route
                path="/Contact"
                element={<Protected Component={Contact} />}
              ></Route>

              <Route path="/Login" element={<Login />}></Route>

              <Route path="/Signup" element={<Signup />}></Route>

              <Route
                path="/Menu"
                element={<Protected Component={Menu} />}
              ></Route>

              <Route
                path="/Cart"
                element={<Protected Component={Cart} />}
              ></Route>

              <Route
                path="/Bookings"
                element={<Protected Component={Bookings} />}
              ></Route>

              <Route
                path="/admin"
                element={<Protected Component={MasterLayout} />}
              ></Route>

              <Route
                path="/Dashboard"
                element={<Protected Component={Dashboard} />}
              ></Route>

              <Route
                path="/Users"
                element={<Protected Component={Users}/>}
              ></Route>

              <Route
                path="/useraddedit"
                element={<Protected Component={AddEditUser} />}
              ></Route>

              <Route
                path="/Checkout"
                element={<Protected Component={Checkout} />}
              ></Route>
            </Routes>
          </Provider>
    </Router>
      </div>
    );
  }
}

export default App;
