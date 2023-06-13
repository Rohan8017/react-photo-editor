import React from 'react';
import avater1 from "../assets/avatar1.jpg"

const Header = ({handlePhotoUpload,handlePhotoDownload,setPhoto}) => {
  return (
    <div className='header'>
      <div className="logo">Photo Editor</div>
      <div className="middlebuttons">
        <input 
            type="file" 
            name='file' 
            id='file' 
            onChange={handlePhotoUpload}
        />
        <button className="download" onClick={handlePhotoDownload}>Download</button>
        <button className="clearimg" onClick={()=>setPhoto(null)}>Clear Image</button>
      </div>
      <div className="user">
        <img src={avater1} alt="avater1" className='userimg'/>
      </div>
    </div>
  )
}

export default Header
