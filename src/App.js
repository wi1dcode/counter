import React from 'react'
import Counter from './components/Counter'
import './App.css';
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      countBis: 1
    }
    
  }




  handleMinus = () => {
    this.setState({ count: this.state.count - 1 })
    if (this.state.count <= 0) {
      this.setState({ count: 0 })
    }
  }

  handlePlus = () => {
    if (this.state.countBis < 99) {
      this.setState({ count: this.state.count + 1 })
    }

    if (this.state.count === this.state.countBis - 1) {
      this.setState({ countBis: this.state.countBis + 1 })
    }
  }



  handleMinusTwo = () => {
    this.setState({ countBis: this.state.countBis - 1 })
    if (this.state.countBis <= 1) {
      this.setState({ countBis: 1 })
    }
    if (this.state.countBis -1 === this.state.count) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  handlePlusTwo = () => {
    if (this.state.countBis < 100) {
      this.setState({
        countBis: this.state.countBis + 1
      })
    }
  }



  render() {    
    return (
      <>
      <div className='containers'>
      <Counter
      count = {this.state.count}
      increment = {this.handlePlus}
      substract = {this.handleMinus}
      
      />

     <Counter
      count = {this.state.countBis}
      increment = {this.handlePlusTwo}
      substract = {this.handleMinusTwo}
      
      />
      </div>
      

      </>
      
    )
  }  
}


export default App 