import './index.css'
import React from 'react';
import Sidebar from './Sidebar';
import Videocards from './videocards';

function App()
{
  return(
    <>
    <div className="d-flex vh-100">
      
        <div className="w-5"><Sidebar /></div>
    
        <div className="w-95"><Videocards /></div>

   </div>
   
    </>
    
  );

}

export default App