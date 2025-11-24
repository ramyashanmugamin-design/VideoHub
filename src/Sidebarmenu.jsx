import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import './sidebar.css';
import home from '/src/assets/menu items/home.png';
import shorts from '/src/assets/menu items/shorts.png';
import subscriptions from '/src/assets/menu items/subscriptions.png';
import history from '/src/assets/menu items/history.png';
import playlist from '/src/assets/menu items/playlists.png';
import yourvideos from '/src/assets/menu items/your videos.png';
import watchlater from '/src/assets/menu items/watchlater.png';
import likedvideos from '/src/assets/menu items/like.png';
import ms from '/src/assets/ChannelImages/madras samayal.png';
import blippi from '/src/assets/ChannelImages/blippi.png';
import vicky from '/src/assets/ChannelImages/vicky.png';
import codeio from '/src/assets/ChannelImages/codeio.png';
import thinkmusic from '/src/assets/ChannelImages/thinkmusic.png';
import tseries from '/src/assets/ChannelImages/tseries.png';

function Sidebarmenu(){

    const navigate = useNavigate();
    const shortsLink =`https://www.youtube.com/shorts/`

    return(

        <>

        <div className="sidebar">
                         
            <div className="side-links highlight my-2" onClick={(()=>{navigate("/")})}> 
                <img src={home} className="home"></img> 
                <p className="mx-4 my-1">  Home  </p> 
            </div>
               
           <div className="side-links highlight my-2" onClick={()=>{window.open(shortsLink,'_blank')}}>
                <img src={shorts} className="shorts"></img>
                <p className="mx-4 my-1"> Shorts </p>
            </div> 
           
            <div className="side-links highlight my-2"> 
                <img src={subscriptions} className="subscriptions"></img>
                <p className="mx-4 my-1"> Subscriptions </p> 
            </div>

            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6 my-2"> 
                <h5> You </h5>  
            </div> 

            <div className="side-links highlight my-2"> 
                <img src={history} className="history"></img>
                <p className="mx-4 my-1"> History </p> 
            </div>

            <div className="side-links highlight  my-2"> 
                <img src={playlist} className="playlists"></img>
                <p className="mx-4 my-1"> Playlists </p> 
            </div>

            <div className="side-links highlight  my-2"> 
                <img src={yourvideos} className="yourvideos"></img>
                <p className="mx-4 my-1"> Your videos</p> 
            </div>
            
            <div className="side-links highlight  my-2"> 
                <img src={watchlater} className="watchlater"></img>
                <p className="mx-4 my-1"> Watch Later </p> 
            </div>
            
            <div className="side-links highlight my-2"> 
                <img src={likedvideos} className="likedvideos"></img>
                <p className="mx-4 my-1"> Liked videos </p> 
            </div>
            
            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6 my-2"> 
                <h5>  Subscriptions  </h5> 
            </div>       

            <div className="side-links highlight my-2">
                <img src={ms} className="channellogo"></img>
                <p className="mx-4 my-1"> Madras Samayal </p>
            </div>    

                <div className="side-links highlight my-2">
                <img src={blippi} className="channellogo"></img>
                <p className="mx-4 my-1"> Blippi world </p>
            </div>  

                <div className="side-links highlight my-2">
                <img src={vicky} className="channellogo"></img>
                <p className="mx-4 my-1"> Vicky Cinemas </p>
            </div>  

                <div className="side-links highlight my-2">
                <img src={codeio} className="channellogo"></img>
                <p className="mx-4 my-1"> Code-io Tamil </p>
            </div>  

                <div className="side-links highlight my-2">
                <img src={thinkmusic} className="channellogo"></img>
                <p className="mx-4 my-1"> Think Music India </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src={tseries} className="channellogo"></img>
                <p className="mx-4 my-1"> T-Series </p>
            </div>  
            
        </div>
        
        </>
    );
}

export default Sidebarmenu;