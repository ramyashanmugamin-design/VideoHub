import './index.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import Sidebarmenu from './Sidebarmenu';
import './profile.css';
import { useState } from 'react';
import Modal from './Modal';

function Profile()
{
    const [menuOpen, setMenuOpen] = useState(false);

    const [showModal,setShowModal] = useState(false);

    const customLink=`https://studio.youtube.com/channel/UCbwWUJ-R_ORXIYdwfDWLEpw/editing/profile`;

    const managevideo=`https://studio.youtube.com/channel/UCbwWUJ-R_ORXIYdwfDWLEpw/videos`;
    
    return(
        <>
       
        <Header setMenuOpen={setMenuOpen}/>
        
        {menuOpen ? <Sidebarmenu /> : <Sidebar />}
    
       
        <div className={` ${menuOpen ? "profile-container": "large-profile-container"}`}>

            <div className="d-flex">
            <img src="/src/assets/menu items/mychannel.jpg" className="dpStyle"></img>
             <div className="profileStyle">
                <h1> Ramya S</h1>
                <h6>@RamyaS-z2s</h6>
                <div className="d-flex">
                <p>More about this channel </p>
                <p className="more" onClick={()=> setShowModal(true)}>  ...more</p>
                </div>
                    <p className="customise" onClick={()=>{window.open(customLink,'_blank')}}>Customise channel</p> 
                    <p className="manage" onClick={()=>{window.open(managevideo,'_blank')}}>Manage videos</p>
                
               </div> 
           
            {showModal && <Modal onClose={()=> setShowModal(false)} />}
            </div>
         </div>
        
        
         </>
    );
}

export default Profile;