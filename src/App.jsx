import './index.css'
import React from 'react';
import Sidebar from './Sidebar';
import Videocards from './videocards';

function App()
{
  return(
    <>
    <div className="d-flex vh-100">
      
        <div className="sidebar-width"><Sidebar /></div>
    
        <div className="videocard-section-width"><Videocards /></div>

   </div>
   
    </>
    
  );

}

export default App