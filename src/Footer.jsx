
import { useNavigate } from "react-router-dom";
import './sidebar.css';
import './header.css';
import home from '/src/assets/menu items/home.png';
import shorts from '/src/assets/menu items/shorts.png';
import profileicon from '/src/assets/menu items/mychannel.jpg';

function Footer(){

     const navigate = useNavigate();
    const shortsLink =`https://www.youtube.com/shorts/`

    return(
         <div className="foot">
        
                                        
                    <div className="highlight" onClick={(()=>{navigate("/")})}> 
                        <img src={home} className="home-foot"></img> 
                        
                    </div>
                       
                   <div className="highlight" onClick={()=>{window.open(shortsLink,'_blank')}}>
                        <img src={shorts} className="shorts-foot"></img>
                        
                    </div>
                    
                    
                    <div className="highlight" onClick={(()=>{navigate("/profile")})}> 
                         <img src={profileicon} className="profile-icon" ></img>
                        
                    </div>
                   
                    
        
        </div>
        
    );
}

export default Footer;