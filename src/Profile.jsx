import './index.css';
import Header from "./Header";
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import './profile.css';
import { useState } from 'react';
import Modal from './Modal';

function Profile()
{
  
    const [showModal,setShowModal] = useState(false);

    const customLink=`https://studio.youtube.com/channel/UCmM5LSm9ggY9M1IH2SdEXUQ/editing/profile`;

    const managevideo=`https://studio.youtube.com/channel/UCmM5LSm9ggY9M1IH2SdEXUQ/videos`;
    
    return(
        <>
       
         <div className="container-body">

        
            <div className="hamburger"><Hamburger /></div>
            <div className="header"><Header /></div>
            <div className="sidebar"> <Sidebar /> </div>
            <img src="src/assets/menu items/mychannel.jpg" className="dpStyle"></img>
             <div className="profileStyle">
                <h1> Ramya S</h1>
                <h6>@ramyashanmugam2</h6>
                <div className="d-flex">
                <p>More about this channel </p>
                <p className="more" onClick={()=> setShowModal(true)}>  ...more</p>
                </div>
                    <p className="customise" onClick={()=>{window.open(customLink,'_blank')}}>Customise channel</p> 
                    <p className="manage" onClick={()=>{window.open(managevideo,'_blank')}}>Manage videos</p>
                
               </div> 
           
            {showModal && <Modal onClose={()=> setShowModal(false)} />}
  
      </div>
        
        
         </>
    );
}

export default Profile;