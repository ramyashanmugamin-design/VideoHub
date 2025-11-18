import { useNavigate } from "react-router-dom";

function Sidebarmenu(){

    const navigate = useNavigate();
    return(

        <>

        <div className="sidebarmenu">
                         
            <div className="highlight d-flex my-2" onClick={(()=>{navigate("/")})}> <img src="src/assets/menu items/home.png" className="home"></img> <p className="mx-4 my-1">  Home  </p> </div>
               
           <div className="highlight d-flex  my-2"><img src="src/assets/menu items/shorts.png" className="shorts"></img><p className="mx-4 my-1"> Shorts </p> </div> 
           
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/subscriptions.png" className="subscriptions"></img><p className="mx-4 my-1"> Subscriptions </p> </div>

            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6 my-2"> <h5> You </h5>  </div> 

            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/history.png" className="history"></img><p className="mx-4 my-1"> History </p> </div>

            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/playlists.png" className="playlists"></img><p className="mx-4 my-1"> Playlists </p> </div>

            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/your videos.png" className="yourvideos"></img><p className="mx-4 my-1"> Your videos</p> </div>
            
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/watchlater.png" className="watchlater"></img><p className="mx-4 my-1"> Watch Later </p> </div>
            
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/like.png" className="likedvideos"></img><p className="mx-4 my-1"> Liked videos </p> </div>
            
            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6 my-2"> <h5>  Subscriptions     </h5> </div>          
            
        </div>
        
        </>
    );
}

export default Sidebarmenu;