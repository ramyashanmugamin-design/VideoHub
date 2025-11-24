
import { useNavigate } from "react-router-dom";
import './sidebar.css';
import home from '/src/assets/menu items/home.png';
import shorts from '/src/assets/menu items/shorts.png';
import subscriptions from '/src/assets/menu items/subscriptions.png';



function Sidebar({ onSubscriptionClick }) {

   
    const navigate = useNavigate();
    const shortsLink =`https://www.youtube.com/shorts/`
    return(
        <>
        <div className="sidebar-small gap-4 ">

            <div className="shortcut-links">
            
            <div className="side-links-small highlight mt-3" onClick={(()=>{navigate("/")})}> 
                <img src={home} className="home"></img> 
                <div className="sidebar-items mx-4" >  Home  </div> 
            </div>
               
           <div className="side-links-small highlight" onClick={()=>{window.open(shortsLink,'_blank')}}>
                <img src={shorts} className="shorts">
                </img><div className="sidebar-items mx-4" > Shorts </div> 
            </div> 
           
           
            <div className="side-links-small highlight" onClick={onSubscriptionClick}> 
                <img src={subscriptions} className="subscriptions" ></img>
                <div className="sidebar-items mx-2"> Subscriptions </div>
            </div>
            
            
            <div className="side-links-small highlight" onClick={(()=>{navigate("/profile")})}> 
                <i className="bi bi-person-circle mx-4 fs-5"></i>
                <div className="sidebar-items mx-4" > You </div> 
            </div>
           
            </div>

        </div>

        </>
    );
}

export default Sidebar;