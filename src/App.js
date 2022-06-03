
import About from "./Components/Project/About";
import Contact from "./Components/Project/Contact";
import Home from "./Components/Project/Home";
import Menu from "./Components/Project/Menu";
import Navbar from "./Components/Project/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from "./Components/Project/Login";
import Signup from "./Components/Project/Signup";
import Cart from "./Components/Project/Cart";
import Bookings from "./Components/Project/Bookings";
import Dishes from "./Components/Project/List";




function App() {
    
  return (
    <div>
     
    
    <Router>
    <Navbar/>
    <Routes>
     <Route exact path="/" element={<Home/>}></Route>

        <Route path="/About" element={<About/>}></Route>
        
        <Route path="/Contact" element={<Contact/>}></Route>
        
        <Route path="/Login" element={<Login/>}></Route>    
    
        <Route path="/Signup" element={<Signup/>}></Route>
        
         

        <Route path="/Menu" element={ <Menu/>} Dishes={Dishes}></Route>
            
        <Route path="/Cart" element={<Cart/>}></Route>         
        
     
        
        <Route path="/Bookings" element={<Bookings/>}></Route> 

       
    </Routes>
  </Router>
      </div>
  );
}

export default App;
