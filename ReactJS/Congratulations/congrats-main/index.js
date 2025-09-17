const element = (
  <div className='congrats-card-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='card'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        alt='profile'
        className='profile-image'
      />
      <h2 className='card-title'>Kiran V</h2>
      <p className='card-description'>
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        alt='watch'
        className='watch-image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
