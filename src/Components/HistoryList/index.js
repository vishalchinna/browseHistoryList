import './index.css'

const BrowseHistoryList = props => {
  const {historyList, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList
  const goToDeleteBar = () => {
    deleteHistory(id)
  }

  if (id === 'undefined') {
    return (
      <li>
        <p>hrhtiusrh</p>
      </li>
    )
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
