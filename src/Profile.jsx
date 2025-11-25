import './index.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import Sidebarmenu from './Sidebarmenu';
import './profile.css';
import { useState } from 'react';
import Modal from './Modal';
import dp from '/src/assets/menu items/mychannel.jpg';
import Subscriptions from './Subscriptions';
import Create from './Create';

function Profile()
{
    const [menuOpen, setMenuOpen] = useState(false);

    const [showModal,setShowModal] = useState(false);

    const[showSubscription,setShowSubscription] = useState(false);

    const[openCreatemenu,setOpenCreatemenu] = useState(false);


    const togglePopup = () => {
        setShowSubscription(!showSubscription)
    };

        const toggleCreatePopup = () => {
        setOpenCreatemenu(!openCreatemenu)
    };

    const customLink=`https://studio.youtube.com/channel/UCbwWUJ-R_ORXIYdwfDWLEpw/editing/profile`;

    const managevideo=`https://studio.youtube.com/channel/UCbwWUJ-R_ORXIYdwfDWLEpw/videos`;
    
    return(
        <>
       
        <Header setMenuOpen={setMenuOpen} onCreateClick={toggleCreatePopup}/>
        {openCreatemenu && <Create />} 
        
        {menuOpen ? <Sidebarmenu /> : <Sidebar onSubscriptionClick={togglePopup}/>}
        {showSubscription && <Subscriptions />} 
       
        <div className={` ${menuOpen ? "profile-container": "large-profile-container"}`}>

            <div className="d-flex">
            <img src={dp} className="dpStyle"></img>
             <div className="profileStyle">
                <h1> Ramya S</h1>
                <h6>@RamyaS-z2s</h6>
                <div className="d-flex">
                <p>More about this channel </p>
                <p className="more" onClick={()=> setShowModal(true)}>  ...more</p>
                </div>
                    <div className="buttons">
                    <p className="customise" onClick={()=>{window.open(customLink,'_blank')}}>Customise channel</p> 
                    <p className="manage" onClick={()=>{window.open(managevideo,'_blank')}}>Manage videos</p>
                    </div>
               </div> 
           
            {showModal && <Modal onClose={()=> setShowModal(false)} />}
            </div>
         </div>
        
        
         </>
    );
}

export default Profile;