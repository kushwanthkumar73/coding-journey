import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onToggleMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const containerClassName = isDarkMode
      ? 'dark-container'
      : 'light-container'
    const headingClassName = isDarkMode ? 'dark-heading' : 'light-heading'

    return (
      <div className={`app-container ${containerClassName}`}>
        <h1 className={headingClassName}>Click To Change Mode</h1>
        <button type="button" className="button" onClick={this.onToggleMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    )
  }
}

export default LightDarkMode