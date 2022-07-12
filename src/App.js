import React from 'react'
import Counter from './components/Counter'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  handleMinus = () => {
    // count = this.setState.count++
    this.setState({ count: this.state.count - 1 })
  }

  handlePlus = () => {
    // count = this.setState.count--
    this.setState({ count: this.state.count + 1 })
  }

  render() {    
    return (
      <>

      {/* <h1 className='text-center'>Counter</h1>
      <div className='container d-flex justify-content-center'>
      <button className='btn btn-outline-danger rounded-circle me-4' onClick={this.handleMinus}>-</button>
      <h2>{this.state.count}</h2>
      <button className='btn btn-outline-success rounded-circle ms-4' onClick={this.handlePlus}>+</button>
      </div> */}
      <Counter />

      </>
    )
  }  
}


export default App 