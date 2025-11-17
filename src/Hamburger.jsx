import React from "react";
import { useState,useEffect,createContext} from "react";
import Sidebar from "./Sidebar";
import Videocards from "./Videocards";
import Sidebarmenu from "./Sidebarmenu";

export const menuContext= createContext();

function Hamburger() {

    const [menu, setMenu] = useState(false);
    const [gridColumnWidth, setGridColumnWidth] = useState('80px');
   

     function displayMenu()
        {
            setMenu(!menu);
        }

    return(
        <>
        <div className="mt-2"><img src="src/assets/menu items/hamburgermenu.png" className= "hamburgermenu" onClick={(event)=>{displayMenu()}}></img></div>      
        </>
    );
}

export default Hamburger;