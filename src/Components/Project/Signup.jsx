import React, { Component } from 'react'
import "./Signup.css";
import {Link} from "react-router-dom";


export class Signup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       signUp:[
          {FirstName:"",LastName:"",email:"",Password:""},
       ],
       detail:[],
    }
  }
  handleChange=(e)=>{
    const SignUp={...this.state.signUp,
    [e.target.name]:e.target.value}
    this.setState({
      signUp:SignUp
    })
     
  }

SignSubmit=e=>{
  e.preventDefault();
  const details={...this.state.signUp};
  const detail={...this.state.detail,details}
  this.setState({
    details:detail
  })

  console.log(details);
  alert("successfully signed up");


}


  render() {
    return (
      
        <div className="border-box">
                <div className="title text-center"><b>Sign Up</b></div>
              <form onSubmit={this.SignSubmit} >
                <input type="text" placeholder="FirstName" className="textbox1" name="Firstname" 
             onChange={this.handleChange} value={this.state.signUp.FirstName}/>
                <input type="text" placeholder="LastName" className="textbox2" name="lastname" 
                onChange={this.handleChange} value={this.state.signUp.LastName}/>
                <input type="email" placeholder="email" className="Email" name="email" 
                onChange={this.handleChange} value={this.state.signUp.email}/>
                <input type="password" placeholder="Password" className="signpassword"  name="password"
                onChange={this.handleChange} value={this.state.signUp.Password}/>
                <button className="signupbtn" onSubmit={this.SignSubmit} ><b>Sign Up</b></button>
                
                <span className="pagelink">Already have an account?<Link to="/Login" className="signuptext1"><b>Log In</b></Link> </span>
                
                </form>      
      </div>
      
    )
  }
}

export default Signup;

