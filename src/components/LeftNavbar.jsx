import React from 'react'

const LeftNavbar = ({handleFilterChange}) => {
  return (
    <div className='leftNavbar' >
        <select name="" id="filter" onChange={handleFilterChange}>
            <option value="">None</option>
            <option value="greyscale">Greyscale</option>
            <option value="sepia">Sepia</option>
            <option value="blur">Blur</option>
        </select>
        <select name="" id="" className="brightness">
            <option value="50">50%</option>
            <option value="75">50%</option>
            <option value="100%">100%</option>
            <option value="125%">100%</option>
            <option value="150%">100%</option>
        </select>
        <select name="" id="" className="contrust">
            <option value="50">50%</option>
            <option value="75">50%</option>
            <option value="100%">100%</option>
            <option value="125%">100%</option>
            <option value="150%">100%</option>
        </select>
        <select name="" id="" className="saturation">
            <option value="50">50%</option>
            <option value="75">50%</option>
            <option value="100%">100%</option>
            <option value="125%">100%</option>
            <option value="150%">100%</option>
        </select>
      
    </div>
  )
}

export default LeftNavbar
