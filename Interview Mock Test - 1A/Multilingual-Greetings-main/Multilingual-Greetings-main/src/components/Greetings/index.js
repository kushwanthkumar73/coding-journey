import {Component} from 'react'
import LanguageItem from '../LanguageItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }
  onClickButton = id => {
    this.setState({activeLanguageId: id})
  }
  renderGreeting = () => {
    const {activeLanguageId} = this.state
    const {imageUrl, imageAltText} =
      languageGreetingsList[
        languageGreetingsList.findIndex(
          eachItem => eachItem.id === activeLanguageId,
        )
      ]
    return <img src={imageUrl} alt={imageAltText} className="greetingImage" />
  }
  render() {
    const {activeLanguageId} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="languageButton-container">
          {languageGreetingsList.map(eachItem => (
            <LanguageItem
              key={eachItem.id}
              languageItemDetails={eachItem}
              onClickButton={this.onClickButton}
              activeButton={activeLanguageId === eachItem.id}
            />
          ))}
        </ul>
        {this.renderGreeting()}
      </div>
    )
  }
}

export default Greetings
