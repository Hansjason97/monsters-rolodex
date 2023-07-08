import React from 'react'
import './SearchBox.styles.css'

function SearchBox({ placeholder, handleChange }) {
  return (
    <input className='search' type="search" placeholder={placeholder} 
        onChange={handleChange}/>
  )
}

export default SearchBox