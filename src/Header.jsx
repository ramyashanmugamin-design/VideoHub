import React from "react";
import './header.css';

function Header() {
    
return(
    <>


        <div>
            <div className="d-flex head">
                    <div className="left-section d-flex"> 
                        <div className="mt-2"><img src="src/assets/menu items/hamburgermenu.png" className="hamburgermenu hamburger-header"></img></div>
                        <img src="src/assets/menu items/logo.png" className="logo mx-1"></img>
                    </div>        

                    <div className="middle-section d-flex"> 
                        <input type="text" placeholder="Search" id="search" className="search-bar"></input>
                        <img src="src/assets/Icons/search.svg" className="search-icon"></img>
                        <img src="src/assets/Icons/voice-search-icon.svg" className="voice-icon mx-2"></img>
                    </div>

                    <div className="right-section d-flex">    
                        <span className="create d-flex justify-content-between mx-1">
                        <i className="bi bi-plus-lg"></i>
                        <h6 className="my-2"> Create</h6>
                        </span>
                        <img src="src/assets/menu items/notification.png" className="notification-icon highlight"></img>
                        <img src="src/assets/ChannelImages/mychannel.png" className="profile-icon" ></img>
                        
                    </div>
            </div>
    
            <div>
            <ul className="pagination">
                <li><a href="#" className="leftarrow">&laquo;</a></li>
                <li><a href="#">All</a></li>
                <li><a href="#">Tech</a></li>
                <li><a href="#">Challenge</a></li>
                <li><a href="#">Math</a></li>
                <li><a href="#">Gaming</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Cricket</a></li>
                <li><a href="#">Baking</a></li>
                <li><a href="#">Comedy</a></li>
                <li><a href="#">Mixes</a></li>
                <li><a href="#">Computer Programming</a></li>
                <li><a href="#">Asian music</a></li>
                <li><a href="#">Recently uploaded</a></li>
                <li><a href="#">Watched</a></li>
                <li><a href="#" className="rightarrow">&raquo;</a></li>
            </ul>
                 
            </div>
        </div>
    </>
);

}

export default Header;