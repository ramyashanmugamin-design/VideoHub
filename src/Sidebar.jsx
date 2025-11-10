import React from "react";

function Sidebar() {
    return(
        <>
        <div className="d-flex flex-column gap-4 position-fixed ">
            <div className="mt-2 highlight"><i className="bi bi-list fs-3 mx-4"></i> </div>
            
            <div className="highlight"> <i className="bi bi-house-door-fill mx-4 fs-4"></i> <div className="sidebar-items mx-4">  Home  </div> </div>
               
           <div className="highlight"> <i className="bi bi-camera-reels mx-4 fs-5"></i><div className="sidebar-items mx-4" > Shorts </div> </div> 
           
            <div className="highlight"> <i className="bi bi-collection-play mx-4 fs-5"></i><div className="sidebar-items mx-2"> Subscriptions </div> </div>
            
            <div className="highlight"> <i className="bi bi-person-circle mx-4 fs-5"></i><div className="sidebar-items mx-4"> You </div> </div>
        </div>
        </>
    );
}

export default Sidebar 