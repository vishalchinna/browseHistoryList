import {Component} from 'react'

import './index.css'
import BrowseHistoryList from '../HistoryList'

class BrowseHistory extends Component {
  state = {inputPhrase: '', dataList: ''}

  changeInputValue = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state

    const {initialHistoryList} = this.props
    const filterDate = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(inputPhrase.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="logo"
          />
          <div className="searchBar">
            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="searchLogo"
              />
            </div>
            <input
              type="search"
              placeholder="Search history"
              className="input"
              value={inputPhrase}
              onChange={this.changeInputValue}
            />
          </div>
        </div>
        <div className="ul-list">
          <ul>
            {filterDate.map(each => (
              <BrowseHistoryList
                Key={each.id}
                deleteHistory={this.deleteHistory}
                historyList={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowseHistory
