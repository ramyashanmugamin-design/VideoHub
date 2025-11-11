import React from "react";
import { useState,useEffect } from "react";
import Sidebarmenu from "./SidebarMenu";


function Sidebar() {

    return(
        <>
        <div className="d-flex flex-column gap-4 position-fixed ">
            
            <div className="highlight mt-4"> <img src="src/assets/menu items/home.png" className="home"></img> <div className="sidebar-items mx-4">  Home  </div> </div>
               
           <div className="highlight"><img src="src/assets/menu items/shorts.png" className="shorts"></img><div className="sidebar-items mx-4" > Shorts </div> </div> 
           
            <div className="highlight"> <img src="src/assets/menu items/subscriptions.png" className="subscriptions"></img><div className="sidebar-items mx-2"> Subscriptions </div> </div>
            
            <div className="highlight"> <i className="bi bi-person-circle mx-4 fs-5"></i><div className="sidebar-items mx-4"> You </div> </div>
        
        </div>

        </>
    );
}

export default Sidebar;