import './index.css'
import React from 'react';
import Header from "./Header";
import Videocards from './Videocards';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';


function App()
{
  return(
    <>
    <div className="container-body">

        
       <div className="hamburger"><Hamburger /></div>
        <div className="header"><Header /></div>
        <div className="videocard"> <Videocards /> </div>
          <div className="sidebar"> <Sidebar /> </div>
      
  
   </div>
   
    </>
    
  );

}

export default App;