import React, {Component  } from 'react';
import "./Contact.css";
import img1 from "./image/Foodzielogo1.png";
import twitter from './image/twitte.png';
import fb from './image/fb.png';
import insta from './image/insta.png';
import copyrights from "./image/copyright.png";



export class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Contact:[
         {ContactName:"",email:"",Feedback:""},
       ],
       Contactdetail:[],
    }
  }
  handlefeed=(e)=>{
    const Contacts={...this.state.Contact,
    [e.target.name]:e.target.value}
    this.setState({
      Contact:Contacts
    })
    
  }
  send=(e)=>{
    e.preventDefault();
    const Contactdetails={...this.state.Contact}
    const Contactdetail={...this.state.Contactdetail,Contactdetails}
    this.setState({
        Contactdetails:Contactdetail
    })
    console.log(Contactdetails);
    alert("Thanks for ur feedback!!..");
  }

  render() {
    return (
      
           <div className="container">
            

            <div className="Container-box">
                <div className="c-row mt-5">
                <h3 className="Contactheader fs-2 mt-4 ms-5"><b>Contact Us</b></h3>
              <div className="headline fs-3 mt-5 ms-5"><b>OPENING HOURS</b></div>
                          <div className="details fs-4 ms-5 mt-2"><b>Monday to Friday:24/7</b><br/>
                        <span className="details fs-4 "><b>Saturday & Sunday:10am to 4pm</b></span></div>
                          
              <div className="headline fs-3 mt-5 ms-5 "><b>EMAIL</b></div>
              <span className="details fs-4 ms-2 ms-5"><b>Foodzie2022@gmail.com</b></span>
             
              <div className="headline fs-3 mt-5 ms-5 "><b>PHONE</b></div>
              <span className="details fs-4 ms-2 ms-5"><b>Call customer services on: 0800 3214 4567</b></span>
              </div>
                
                <div className="message-box  end-0">
                      <h1 className="heading text-dark text-center mt-5 fw-bold">Drop us a line</h1>
                      <div className="tags text-dark text-center mt-2 fw-bold fs-5" >Please feel free to contact us if you <br/>have any further questions or concerns.</div>
                    
                      <form onSubmit={this.send}>
                          <input type="text" className="YourName" placeholder="Your Name" name="ContactName"  
                          onChange={this.handlefeed} value={this.state.Contact.ContactName}/>
                          <input type="text" className="YourEmail" placeholder="Your Email" name="email" 
                          onChange={this.handlefeed} value={this.state.Contact.email}/>
                          <input type="textarea" className="message" placeholder="Type some message" name="Feedback"
                           onChange={this.handlefeed} value={this.state.Contact.Feedback}/>
                          <button className="messagebtn" onSubmit={this.send}><b>Send Message</b></button>
                      </form>
                
                
                
                
                </div>
            </div>
              
            <div className="bottom-box mt-5">
             
          <span className="clogo ">
            <img src={img1} width="80px" height="80px" className="logo my-2 "/>
          </span>
            <div className="row1 justify-content-md-center"> 
                  <span className=" clinks text-light ">Home</span>
                  <span className='clinks1 text-light'>About</span>
                  <span className="clinks2 text-light">Menu</span>
                  <span className="clinks3 text-light">Contact</span>
            </div>
            <div className="row2">
            <span><img src={twitter} width="50px" height="50px" className="ctwitter ms-4 "/></span>
          <span><img src={fb} width="30px" height="30px" className="cfb ms-4"/></span>
          <span><img src={insta} width="58px" height="65px" className="cinsta my-5 ms-4"/></span>
            </div>
      
            </div>
  
            <div className="btm1">
                <img src={copyrights} width="25px" height="25px" className="cpyrights ms-5"/>
                <span className="cpyright ms-5">Copyrights@Foodzie2022</span>
            </div> 
  
  
        </div>
      
    )
  }
}

export default Contact

