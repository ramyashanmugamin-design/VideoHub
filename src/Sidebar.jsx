import React from "react";

function Sidebar() {
    return(
        <>
        <div className="d-flex flex-column gap-4 position-fixed ">
            
            <div className="mt-2"><img src="src/assets/menu items/hamburgermenu.png" className="hamburgermenu"></img></div>
            
            <div className="highlight"> <img src="src/assets/menu items/home.png" className="home"></img> <div className="sidebar-items mx-4">  Home  </div> </div>
               
           <div className="highlight"><img src="src/assets/menu items/shorts.png" className="shorts"></img><div className="sidebar-items mx-4" > Shorts </div> </div> 
           
            <div className="highlight"> <img src="src/assets/menu items/subscriptions.png" className="subscriptions"></img><div className="sidebar-items mx-2"> Subscriptions </div> </div>
            
            <div className="highlight"> <i className="bi bi-person-circle mx-4 fs-5"></i><div className="sidebar-items mx-4"> You </div> </div>
        </div>
        </>
    );
}

export default Sidebar;