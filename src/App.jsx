import './index.css'
import { useState } from 'react';
import Header from "./Header";
import Videocards from './Videocards';
import Sidebar from './Sidebar';
import Sidebarmenu from './Sidebarmenu';
import Subscriptions from './Subscriptions';
import Create from './Create';
import Footer from './Footer';


function App()
{
  
 const [menuOpen, setMenuOpen] = useState(false);
  const[showSubscription,setShowSubscription] = useState(false);
  const[openCreatemenu,setOpenCreatemenu] = useState(false);


  const togglePopup = () => {
    setShowSubscription(!showSubscription)
  };

  const toggleCreatePopup = () => {
    setOpenCreatemenu(!openCreatemenu)
  };

  
  return(
    <>

        <Header setMenuOpen={setMenuOpen} onCreateClick={toggleCreatePopup} />
        {openCreatemenu && <Create />} 
        <div>
        {menuOpen ? <Sidebarmenu /> : <Sidebar onSubscriptionClick={togglePopup} />}
        {showSubscription && <Subscriptions />} 
        {menuOpen ? <div className="container"> <Videocards /> </div> : <div className="large-container"> <Videocards /> </div>}
        </div>
        <Footer />
    </>
    
  );

}

export default App;