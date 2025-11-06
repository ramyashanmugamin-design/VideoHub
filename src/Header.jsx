import React from "react";

function Header() {
    
return(
    <>
     <div className="container-fluid mt-2">
        <div className="row justify-content-between"> 
                <span className="col-2">
                    <img src="src/assets/Icons/youtube-logo.svg" className="logo" style={{cursor:'pointer'}}></img>
                </span>

                <span className="col-8 d-flex">
                    <input type="text" placeholder="Search" className="search-bar"></input>
                    <img src="src/assets/Icons/search.svg" className="btn search-icon highlight"></img>
                    <img src="src/assets/Icons/voice-search-icon.svg" className="voice-icon mx-2 highlight"></img>
                </span>
                <span className="col-2 d-flex">
                    <span className="highlight create d-flex">
                    <i className="bi bi-plus-lg "></i>
                    <p style={{paddingLeft:'8px'}}> Create</p>
                    </span>
                    <img src="src/assets/Icons/notifications.svg" className="notification-icon highlight"></img>
                    <img src="src/assets/ChannelImages/mychannel.png" className="profile-icon" style={{cursor:'pointer'}} ></img>
                </span>
                <div className="d-flex">
                    <div className="fs-3 my-3 arrow">{'<'}</div>
                    <div className="filter d-flex">
                                
                                <p>All</p>
                                <p>Tech</p>
                                <p>Challenge</p>
                                <p>Tik Tok</p>
                                <p>Math</p>
                                <p>Gaming</p>
                                <p>Music</p>
                                <p>News</p>
                                <p>cricket</p>
                                <p>Baking</p>
                                <p>Comedy</p>
                                <p>Mixes</p>
                                <p>Computer Programming</p>
                                <p>Asian music</p>
                                <p>Recently uploaded</p>
                                <p>Watched</p>
                                
                    </div>
                    <div className="fs-3 my-3 arrow">{'>'}</div>

                </div>
            

        </div>
        
     </div>
    </>
);

}

export default Header