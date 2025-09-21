import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}
  onRandom = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    this.setState({number: randomNumber})
  }
  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a Random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onRandom}>
            Generate
          </button>
          <p className="count">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
