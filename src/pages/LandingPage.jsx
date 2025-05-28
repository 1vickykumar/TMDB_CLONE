import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
function LandingPage() {
  const [value, setValue] = useState('');
  return (

    <div className='LpContainer'>
      <div className='LpTopSearch'>
        <FaSearch />
        <input
          type="text"
          value={value}
          placeholder="Search for a movie, tv show, person..."
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <button className="LpClearButton" onClick={() => setValue('')}>
            &times;
          </button>
        )}
      </div>
      <div className="LpWelcome">
        <h1>Welcome</h1>
        <p> Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className="LpSearch">
          <input type="text" placeholder="Search for a movie, tv show, person..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage