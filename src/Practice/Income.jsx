import React, { Component } from 'react'

export class Income extends Component {
  render() {
    return (
        <div className='container'>
      <div className='col-md-4'>
          <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4 className='displayheader'>Income</h4>
                        <h4 className='displayincome'></h4>
                    </div>
                    <div className='col-md-6'>
                    <h4 className='displayheader'>Expense</h4>
                        <h4 className='displayincome'></h4>
                    </div>
                </div>
            </div>
          </div>
      </div>
      </div>
    )
  }
}

export default Income;