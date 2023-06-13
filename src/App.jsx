import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  const [photo,setPhoto]=useState(null);
  const [msg,setMsg]=useState('');
  const [filter,setFilter]=useState(null);

  const handlePhotoUpload=(e)=>{
    setPhoto(URL.createObjectURL(e.target.files[0]));
  }

  const handlePhotoDownload=()=>{
    if(photo){
      const link=document.createElement('a');
      link.href=photo;
      console.log(link)
      link.download='.untitled-photo.jpg';
      link.click();
    }else{
      setMsg('Please upload a photo first');
      setTimeout(()=>{
        setMsg('');
      },3000)
    }
  }

  const handleFilterChange=(e)=>{
    setFilter(e.target.value);
  }


  return (
    <div className='app'>
      <Header 
        handlePhotoUpload={handlePhotoUpload}
        handlePhotoDownload={handlePhotoDownload}
        setPhoto={setPhoto}
      />
      <Body 
        photo={photo} 
        msg={msg} 
        handleFilterChange={handleFilterChange} 
        filter={filter}
      />
    </div>
  )
}

export default App
