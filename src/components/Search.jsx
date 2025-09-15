import React from 'react'
import './Search.css'
import cup_red from '../assets/cup_red.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Search = ({ option, setOption }) => {


  return (
    <div className="search-bar">
      <div className="search-top">
        <img src={cup_red} alt="" className="search-logo"/>
        <div className="search-options">
            <div className={`search-option ${option === 'map' ? 'option-selected' : ''}`} onClick={() => setOption('map')}>MAP</div>
            <div className={`search-option ${option === 'search' ? 'option-selected' : ''}`} onClick={() => setOption('search')}>SEARCH</div>
        </div>
        <div className="account-icon">
            B
        </div>
      </div>
      <div className="search-bottom">
        <div className="search-wrapper">
            <input className="search-input" type="text" placeholder="Search your area"/>
            <button className="search-btn">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
      </div>
    </div>
  )
}

export default Search
