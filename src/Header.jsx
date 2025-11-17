import React from "react";
import './header.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
    
     const navigate= useNavigate();
     const [searchValue, setSearchValue] = useState('');

     function handleSearch()
     {
         if (searchValue.trim()) {
          const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchValue)}`;
          window.open(searchUrl, '_blank');
        }
     }
return(
    <>

            <div className="d-flex head">
                    <div className="left-section d-flex"> 
                        <img src="src/assets/menu items/logo.png" className="logo mx-1" onClick={(()=>{navigate("/")})}></img>
                    </div>        

                    <div className="middle-section d-flex container-fluid"> 
                        <input type="text" placeholder="Search" className="search-bar" value={searchValue} onChange ={(e)=> setSearchValue(e.target.value)} />
                        <img src="src/assets/Icons/search.svg" className="search-icon" onClick={()=>handleSearch()}></img>
                        <img src="src/assets/Icons/voice-search-icon.svg" className="voice-icon mx-2"></img>
                    </div>

                    <div className="right-section d-flex">    
                        <img src="src/assets/menu items/create.png" className="create highlight"></img>
                        <img src="src/assets/menu items/notification.png" className="notification-icon highlight"></img>
                        <img src="src/assets/menu items/mychannel.jpg" className="profile-icon" onClick={(()=>{navigate("/profile")})} ></img>
                        
                    </div>
            </div>
    
       
    </>
);

}

export default Header;