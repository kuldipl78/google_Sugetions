// Write your code here
import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class App extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {GoogleSuggestions} = this.props
    console.log(GoogleSuggestions)
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
            <br />
            <ul className="unorder-Items">
              {this.props.GoogleSuggestions.map(eachSuggetion => (
                <SuggestionItem
                  key={eachSuggetion.id}
                  onSuggetionClick={this.onSuggetionClick}
                  suggestion={eachSuggetion.suggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
