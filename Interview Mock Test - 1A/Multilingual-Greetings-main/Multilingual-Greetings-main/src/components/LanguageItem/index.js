import './index.css'

const LanguageItem = props => {
  const {languageItemDetails, onClickButton, activeButton} = props
  const {buttonText, id} = languageItemDetails

  const button = activeButton ? 'active' : 'no-active'

  const onClickLanguageButton = () => {
    onClickButton(id)
  }

  return (
    <li className="list-item">
      <button
        className={`button ${button}`}
        type="button"
        onClick={onClickLanguageButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageItem
