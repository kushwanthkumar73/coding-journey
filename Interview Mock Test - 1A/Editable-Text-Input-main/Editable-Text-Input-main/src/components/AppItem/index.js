import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  state = {
    isClicked: false,
    enter: '',
  }
  Change = event => {
    this.setState({enter: event.target.value})
  }
  Start = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }
  render() {
    const {isClicked, enter} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="header">Editable Text Input</h1>
          <div className="input-container">
            {isClicked === true ? (
              <div className="text-container">
                <p className="paragraph">{enter}</p>
                <button className="button" type="button" onClick={this.Start}>
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  className="input"
                  value={enter}
                  onChange={this.Change}
                />
                <button type="button" className="button" onClick={this.Start}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AppItem
