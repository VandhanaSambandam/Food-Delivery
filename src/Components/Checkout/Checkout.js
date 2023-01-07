import React ,{useState} from 'react'
import "./checkout.css";
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


function Checkout() {
    let navigate=useNavigate();
    const [Check,setCheck]=useState({
        cash:"", netbanking:"",cards:"",
    });

    const handleChange=(e)=>{
        setCheck({...Check,[e.target.name]:e.target.value});
       
    }

    const paymentSubmit=(e)=>{
        e.preventDefault();
        const Checksubmit={
            cash:Check.cash,
            netbanking:Check.netbanking,
            cards:Check.cards,
        }
        console.log(Checksubmit);
                swal({
            title:"Order Placed Successfully!!",
            button:"OK",
            icon:"success",
          });
          
          


    }
    return (
        <div>
            <Navbar/>
        <div className='checkout container'>

            <span className='paytitle display-5 ' ><b>Select a Payment Method</b></span>
            <div className='checkout-row'>
                <div className='col-12 mt-5'>
                    <form onSubmit={paymentSubmit}>
                    <input required type="radio" id="cash" name="payment" value={Check.cash} onChange={handleChange} />
                    <label for="cash" className='cod ms-2'>Cash on Delivery </label><br></br>
                    <br />
                    <input required type="radio" id="netbanking" name="payment" value={Check.netbanking} onChange={handleChange} />
                   
                    <label for="netbanking" className='cod ms-2'>Net Banking</label>
                    
                    <select  id="netbanking" name="payment" className='droppay' onChange={handleChange}>
                        <option value="1">Choose any option</option>
                        <option value="saab">Airtel payments Bank</option>
                        <option value="opel">HDFC Bank </option>
                        <option value="audi">ICICI Bank</option>
                        <option value="audi">State Bank of India</option>
                        <option value="audi">Kotak Bank</option>
                    </select>

                    <br/><br/>
                    <input required type="radio" className='cards ms-2' id="cards" name="payment" value={Check.cards} />
                    <label for="cards" className='cards ms-2'><span>Add Debit/Credit/ATM Card</span> </label>
                    <button onSubmit={paymentSubmit} className="placeorder"><b>Place your Order</b></button>
                    
                    </form>
                </div>
            </div>

        </div>
        </div>

    )
}

export default Checkout;