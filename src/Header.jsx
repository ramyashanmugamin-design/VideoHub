import React from "react";
import './header.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import hamburgermenu from '/src/assets/menu items/hamburgermenu.png';
import logo from '/src/assets/menu items/logo.png';
import searchicon from '/src/assets/menu items/searchicon.png';
import voiceicon from '/src/assets/Icons/voice-search-icon.svg';
import create from '/src/assets/menu items/create.png';
import notification from '/src/assets/menu items/notification.png';
import profileicon from '/src/assets/menu items/mychannel.jpg';

function Header({setMenuOpen , onCreateClick}) {
    
     const navigate= useNavigate();
     const [searchValue, setSearchValue] = useState('');

     function handleSearch()
     {
         if (searchValue.trim()) {
          const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchValue)}`;
          window.open(searchUrl, '_blank');
        }
     }

     const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
    };
    
return(
    <>

            <div className="flex-div head">
                    <div className="left-section flex-div"> 
                        <img src={hamburgermenu} className= "hamburgermenu" onClick={()=> setMenuOpen(prev=>prev===false?true:false)}></img>
                        <img src={logo} className="logo" onClick={(()=>{navigate("/")})}></img>
                    </div>        

                    <div className="middle-section flex-div container-fluid"> 
                        <input type="text" placeholder="Search" className="search-bar" value={searchValue} onChange ={(e)=> setSearchValue(e.target.value)}  onKeyPress={handleKeyPress} />
                        <img src={searchicon} className="search-icon" onClick={()=>handleSearch()} ></img>
                        <img src={voiceicon} className="voice-icon"></img>
                    </div>

                    <div className="right-section flex-div">    
                        <img src={create} className="create highlight" onClick={onCreateClick}></img>
                        <img src={notification} className="notification-icon highlight"></img>
                        <img src={profileicon} className="profile-icon" onClick={(()=>{navigate("/profile")})} ></img>
                        
                    </div>
            </div>
    
       
    </>
);

}

export default Header;