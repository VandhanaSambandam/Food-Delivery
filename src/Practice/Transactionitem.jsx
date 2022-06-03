import React, { Component } from 'react'

export class Transactionitem extends Component {
  render() {
    return (
      <div className='container'>
           <div className='col-md-4'>
            <li>
                <span className='listdisplay'>{description}</span>
                <span className='listdisplay'>{amount}</span>
            </li>
           </div>
      </div>
    )
  }
}

export default Transactionitem;