import React from 'react'


class Counter extends React.Component {
    
    render() {    
      console.log(this);
    return (
        <>
            <h1 className='text-center'>Counter </h1>
            <div className='container d-flex justify-content-center'>
            <button className='btn btn-outline-danger rounded-circle me-4' onClick={this.props.substract}>-</button>
            <h2>{this.props.count}</h2>
            <button className='btn btn-outline-success rounded-circle ms-4' onClick={this.props.increment}>+</button>
            </div>
        </>
    )
  }  
}


export default Counter 