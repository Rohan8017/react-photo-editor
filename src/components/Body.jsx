import React from 'react'
import LeftNavbar from './LeftNavbar'
import Main from './Main'

const Body = ({photo,msg,handleFilterChange,filter}) => {
  return (
    <div className='body'>
      <LeftNavbar handleFilterChange={handleFilterChange}/>
      <Main photo={photo} msg={msg} filter={filter}/>
    </div>
  )
}

export default Body
