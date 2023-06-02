import {Component} from 'react'

import './index.css'
import BrowseHistoryList from '../HistoryList'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowseHistory extends Component {
  state = {inputPhrase: '', dataList: initialHistoryList}

  changeInputValue = event => {
    this.setState({inputPhrase: event.target.value})
  }

  deleteHistory = id => {
    const {dataList} = this.state
    const deletedItem = dataList.filter(each => each.id !== id)
    this.setState({dataList: deletedItem})
  }

  render() {
    const {inputPhrase, dataList} = this.state

    const filterDate = dataList.filter(each =>
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
        {filterDate.length === 0 || dataList.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
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
        )}
      </div>
    )
  }
}

export default BrowseHistory
