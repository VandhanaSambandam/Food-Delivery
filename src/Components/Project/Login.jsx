import React, { Component } from 'react'
import "./Login.css";
import {Link} from "react-router-dom";
  


export class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Login:[
         {Username:"",Password:""}
       ],
       Details:[],
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Console working..")  
  const Detail={...this.state.Login}
  const Details={...this.state.Details,Detail}
  this.setState({
    Details:Detail
  })
  console.log(Detail);
  
  }
  handleLogin=(e)=>{
    const login={...this.state.Login,
    [e.target.name]:e.target.value}
    this.setState({
      Login:login
    })
    
  }
  render() {
    return (
      <div>
           <div className="container">
          <div className="box">

              <div className="login text-center "><b>Log In</b></div>
              <div className="signup">Don't have an account? <Link to="/Signup" className="signuptext"><b>Signup</b></Link></div>
    
              <form onSubmit={this.handleSubmit}>
              <input type="text" className="username" placeholder="username" name="username"
              onChange={this.handleLogin} value={this.state.Login.Username}/>
              <input type="password" className="password" placeholder="password" name="password"
              onChange={this.handleLogin} value={this.state.Login.Password}/>
              <button className="submit" onSubmit={this.handleSubmit}><b>Log in</b></button>
              </form>
    
          </div>
          
          </div>

      </div>
    )
  }
}

export default Login;


