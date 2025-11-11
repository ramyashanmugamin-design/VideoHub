import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Sidebarmenu from "./SidebarMenu";

function Hamburger() {

    const [menu, setMenu] = useState(false);

     function displayMenu()
        {
            setMenu(!menu);
           
        }

    return(
        <>
        <div className="mt-2"><img src="src/assets/menu items/hamburgermenu.png" className="hamburgermenu" onClick={(event)=>{displayMenu()}}></img></div>
        
        <div className="sidebar">{menu ? <div><Sidebarmenu /></div> : <div><Sidebar /> </div> }</div>
        
        </>
    );
}

export default Hamburger;