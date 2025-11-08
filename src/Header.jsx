import React from "react";
import './header.css';

function Header() {
    
return(
    <>


        <div>
            <div className="head d-flex justify-content-between">
                    <div className="left-section"> 
                        <img src="src/assets/Icons/youtube-logo.svg" className="logo"></img>
                    </div>        

                    <div className="middle-section"> 
                        <input type="text" placeholder="Search" className="search-bar"></input>
                        <img src="src/assets/Icons/search.svg" className="search-icon"></img>
                        <img src="src/assets/Icons/voice-search-icon.svg" className="voice-icon mx-2"></img>
                    </div>

                    <div className="right-section d-flex">    
                        <span className="create d-flex justify-content-between">
                        <i className="bi bi-plus-lg"></i>
                        <h6 className="my-2"> Create</h6>
                        </span>
                        <img src="src/assets/Icons/notifications.svg" className="notification-icon"></img>
                        <img src="src/assets/ChannelImages/mychannel.png" className="profile-icon" ></img>
                        
                    </div>
            </div>
    
            <div>
            <ul class="pagination">
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