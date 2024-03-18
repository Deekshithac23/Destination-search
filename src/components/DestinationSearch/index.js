// Write your code here
import {Component} from 'react'

import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResults = destinationList.filter(eachComponent =>
      eachComponent.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="heading"> Destination Search </h1>
          <div className="search-container">
            <input
              type="search"
              placeholder="search"
              className="search"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png alt should be search icon"
              alt="search-icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-list">
            {searchResults.map(eachComponent => (
              <DestinationItem
                key={eachComponent.id}
                destinationDetails={eachComponent}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
