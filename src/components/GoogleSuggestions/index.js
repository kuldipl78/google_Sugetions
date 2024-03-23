// Write your code here
import './index.css'

import {Component} from 'react'

import SuggestionItem from './SuggestionItem'

class App extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="main-Contaianer">
        <div className="search-Container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="img-Element"
            alt="google logo"
          />
          <div className="container">
            <input
              value={searchInput}
              type="search"
              className="search-Element"
              placeholder="search Element"
              onChange={this.onChangeSearchInput}
            />
            <img
              className="img-Icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
