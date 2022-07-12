import React from 'react'


class Counter extends React.Component {
    
    render() {    
      console.log(this);
    return (
        <>
        <div className="counterone countertwo">
            <h1 className='text-center'>Counter </h1>
            <div className='container d-flex justify-content-center'>
            <button className='btn btn-outline-danger rounded-circle me-4 btn-lg btn-block' style={{width: 47}} onClick={this.props.substract}>-</button>
            <h2>{this.props.count}</h2>
            <button className='btn btn-outline-success rounded-circle ms-4 btn-lg btn-block' onClick={this.props.increment}>+</button>
            </div>
        </div>
        </>
    )
  }  
}


export default Counter 