import React, { Component } from 'react'

export class Transaction extends Component {
  render() {
    const {onchangehandler,submit,singleItem}=this.props;
    return (
      <div className='container'>
          <hr />
          <h5>New transaction</h5>
          <hr />
          <form onSubmit={submit}>
              <label htmlFor="description"><h5>Description</h5></label>
              <input type="text" value={singleItem.description} name="description" id="description" className='form-control'
              onChange={onchangehandler}/>
              <p>Enter mode of payment</p>

              <label htmlFor="amount"><h5>Amount</h5></label>
              <input type="number" id="amount" name="amount" value={singleItem.amount} className='form-control'
              onChange={onchangehandler}/>
              <p>positive value corresponds to income and negative value corresponds to expense</p>
              <button className='btn btn-primary' onSubmit={submit}>Submit</button>
          </form>
      </div>
    )
  }
}

export default Transaction