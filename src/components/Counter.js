import React from 'react'


class Counter extends React.Component {


  render() {    
    return (
        <>
            <h1 className='text-center'>Counter</h1>
            <div className='container d-flex justify-content-center'>
            <button className='btn btn-outline-danger rounded-circle me-4' onClick={this.handleMinus}>-</button>
            <h2>{this.state.count}</h2>
            <button className='btn btn-outline-success rounded-circle ms-4' onClick={this.handlePlus}>+</button>
            </div>
        </>
    )
  }  
}


export default Counter 