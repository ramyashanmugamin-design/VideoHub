import './index.css'
import React from 'react';
import Sidebar from './Sidebar';
import Header from "./Header";
import Videocards from './Videocards';

function App()
{
  return(
    <>
    <div className="container-body">

        <div className="sidebar"><Sidebar /></div>

        <div className="header"><Header /></div>
    
        <div className="videocard"><Videocards /></div>

   </div>
   
    </>
    
  );

}

export default App;