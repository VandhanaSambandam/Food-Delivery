
import React, { Component } from 'react'
import "./Bookings.css";
import party from "./image/bday.jpg";
import bookingbg from "./image/hotelpic.jpg";
import space from "./image/meeting.jpg";
import bcopyrights from "./image/copyright.png";
import blacklogo from "./image/Foodzielogo1.png";

export class Bookings extends Component {
  
  
  render() {
   

    return (
      <div className="container ">
          <img src={bookingbg} width="73%" height="763px" className="bookings rounded-end ms-5"/>
          <div className='Reserve-Box'>
          <h3 className="Book fs-1"><b>Reservation</b></h3>
          <labe className="datelabel"><b>Date</b></labe><input type="date" className="getdate"/>
          <label className="Members"><b>Members</b></label>
          <select type="number" className="getmembers">
            
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">10+</option>

            
          </select>
          <label className="time"><b>Time</b></label>
          <select type="time" className="gettime">
            <option value="time">11.00 AM</option>
            <option value="time">12.00 PM</option>
            <option value="time">12.30 PM</option>
            <option value="time">7.30 PM</option>
            <option value="time">8.00 PM</option>
            <option value="time">8.30 PM</option>
          </select>
          <label className="mobile"><b>Mobile No</b></label>
          <input type="number" className='getnumber' placeholder="Enter mobile No."/>
            <button className="Reserve" ><b>Book Now</b></button>
            </div>
            <div className="Party-service">
                  <div className="Party-header"><b>Events or Celebration</b></div>
                  <div className="Finding-hall"><b>Finding a party area ?</b></div>
                  
                  <div>
                    <div className='bday-party '><b>Birthday Celebration</b></div>
                    <div className="party-hall"><b>Our Restaurant has a separate spacious and delightful <br/>ambience for having birthday events. </b></div>
                    <span className="info1"><b>Hall info : <span>2350 Sq Free Feet space </span></b></span>
                    <span className="info2 mt-2"><b>Food Items : <span>Customised Menu with Welcome drinks</span></b></span>
                    <span className='info3'><b>Guest Count : <span>Upto 200 people</span></b></span>
                    <img src={party} width="1100px" height="800px" className='bday '/>
                  </div>

                  <div>
                    <div className="meeting">
                    <div className='official-meeting '><b>Official Meetings</b></div>
                    <div className="party-hall1"><b>Our Restaurant has a separate workspace and classic <br/>ambience for having official meetings </b></div>
                    <span className="info1-meeting"><b>Hall info : <span>2350 Sq Free Feet space </span></b></span>
                    <span className="info2-meeting mt-2"><b>Food Items : <span>Customised Menu with Welcome drinks</span></b></span>
                    <span className='info3-meeting'><b>Guest Count : <span>Upto 200 people</span></b></span>
                    <img src={space} width="60%" height="700px" className='meeting-room'/>
                    </div>
                  </div>

            </div>
          
            <div className="Booking-footer">
              <img src={blacklogo} width="90px" height="90px" className="blacklogo "/>
              <div className="Baddress mt-3"><b>For any Reservation, Call : 0989765775</b></div>
              <span className="B-Address"><b>No.43b,East coast Road, <br/><span className="ms-3">near hill park ,</span><br/><span className='ms-3'> Mumbai-34</span></b></span>
            
            </div>
              <div className='Booking-copyright'>
                  <img src={bcopyrights} width="30px" height="30px" className='b-copy'/>
                  <span className="b-copy1"><b>Copyrights@Foodzie2022</b></span>
              </div>
          </div>
    )
  }
}

export default Bookings;