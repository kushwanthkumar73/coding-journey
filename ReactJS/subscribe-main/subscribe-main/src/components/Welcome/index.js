import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}
  onToggle = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }
  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank You! Happy learning</p>
        <div className="button-container">
          <button type="button" className="button" onClick={this.onToggle}>
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
