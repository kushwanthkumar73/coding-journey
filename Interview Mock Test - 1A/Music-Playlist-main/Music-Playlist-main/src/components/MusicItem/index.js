import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicItem = props => {
  const {musicItemDetails, onDeleteItem} = props
  const {id, imageUrl, name, genre, duration} = musicItemDetails
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li>
      <div className="item-card">
        <div className="song-image-card">
          <img className="song-image" src={imageUrl} alt="track" />
        </div>
        <p>{name}</p>
        <p>{genre}</p>
        <p>{duration}</p>
      </div>
      <button
        data-testid="delete"
        className="delete-btn"
        type="button"
        onClick={onDelete}
      >
        <AiOutlineDelete className="delete-icon" />
      </button>
    </li>
  )
}

export default MusicItem
