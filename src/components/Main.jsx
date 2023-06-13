import React from 'react'

const Main = ({photo,msg,filter}) => {
  return (
    <div className='main'>
        <img src={photo} alt="" className={`img ${filter}`}/>
        {msg}
    </div>
  )
}

export default Main
