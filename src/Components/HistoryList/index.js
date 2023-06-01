import './index.css'

const BrowseHistoryList = props => {
  const {historyList, deleteHistory, Key} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyList
  const goToDeleteBar = () => {
    deleteHistory(Key)
  }
  return (
    <li>
      <div className="h-List">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="btn"
        onClick={goToDeleteBar}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowseHistoryList
