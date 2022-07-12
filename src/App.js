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
    this.setState({ count: this.state.count - 1 })
    if (this.state.count <= 0) {
      this.setState({ count: 0 })
    }
  }

  handlePlus = () => {
    this.setState({ count: this.state.count + 1 })
  }



  render() {    
    return (
      <>
      <div className=''>
      <Counter
      count = {this.state.count}
      increment = {this.handlePlus}
      substract = {this.handleMinus}
      
      />

     <Counter
      count = {this.state.count}
      increment = {this.handlePlus}
      substract = {this.handleMinus}
      
      />
      </div>
      

      </>
      
    )
  }  
}


export default App 