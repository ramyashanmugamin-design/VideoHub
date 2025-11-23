import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import './sidebar.css';

function Sidebarmenu(){

    const navigate = useNavigate();
    const shortsLink =`https://www.youtube.com/shorts/`

    return(

        <>

        <div className="sidebar">
                         
            <div className="side-links highlight my-2" onClick={(()=>{navigate("/")})}> 
                <img src="src/assets/menu items/home.png" className="home"></img> 
                <p className="mx-4 my-1">  Home  </p> 
            </div>
               
           <div className="side-links highlight my-2" onClick={()=>{window.open(shortsLink,'_blank')}}>
                <img src="src/assets/menu items/shorts.png" className="shorts"></img>
                <p className="mx-4 my-1"> Shorts </p>
            </div> 
           
            <div className="side-links highlight my-2"> 
                <img src="src/assets/menu items/subscriptions.png" className="subscriptions"></img>
                <p className="mx-4 my-1"> Subscriptions </p> 
            </div>

            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6 my-2"> 
                <h5> You </h5>  
            </div> 

            <div className="side-links highlight my-2"> 
                <img src="src/assets/menu items/history.png" className="history"></img>
                <p className="mx-4 my-1"> History </p> 
            </div>

            <div className="side-links highlight  my-2"> 
                <img src="src/assets/menu items/playlists.png" className="playlists"></img>
                <p className="mx-4 my-1"> Playlists </p> 
            </div>

            <div className="side-links highlight  my-2"> 
                <img src="src/assets/menu items/your videos.png" className="yourvideos"></img>
                <p className="mx-4 my-1"> Your videos</p> 
            </div>
            
            <div className="side-links highlight  my-2"> 
                <img src="src/assets/menu items/watchlater.png" className="watchlater"></img>
                <p className="mx-4 my-1"> Watch Later </p> 
            </div>
            
            <div className="side-links highlight my-2"> 
                <img src="src/assets/menu items/like.png" className="likedvideos"></img>
                <p className="mx-4 my-1"> Liked videos </p> 
            </div>
            
            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6 my-2"> 
                <h5>  Subscriptions  </h5> 
            </div>       

            <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/madras samayal.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Madras Samayal </p>
            </div>    

                <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/blippi.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Blippi world </p>
            </div>  

                <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/vicky.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Vicky Cinemas </p>
            </div>  

                <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/codeio.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Code-io Tamil </p>
            </div>  

                <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/thinkmusic.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Think Music India </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/tseries.png" className="channellogo"></img>
                <p className="mx-4 my-1"> T-Series </p>
            </div>  
            
        </div>
        
        </>
    );
}

export default Sidebarmenu;