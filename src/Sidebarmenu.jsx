import React from "react";

function Sidebarmenu(){
    return(
        <>

        <div className="sidebarmenu">
                         
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/home.png" className="home"></img> <div className="mx-4 fs-6">  Home  </div> </div>
               
           <div className="highlight d-flex  my-2"><img src="src/assets/menu items/shorts.png" className="shorts"></img><div className="mx-4 fs-6" > Shorts </div> </div> 
           
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/subscriptions.png" className="subscriptions"></img><div className="mx-4 fs-6"> Subscriptions </div> </div>

            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6  my-2"> You  </div> 

            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/history.png" className="history"></img><div className="mx-4 fs-6"> History </div> </div>

            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/playlists.png" className="playlists"></img><div className="mx-4 fs-6"> Playlists </div> </div>

            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/your videos.png" className="yourvideos"></img><div className="mx-4 fs-6"> Your videos</div> </div>
            
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/watchlater.png" className="watchlater"></img><div className="mx-4 fs-6"> Watch Later </div> </div>
            
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/like.png" className="likedvideos"></img><div className="mx-4 fs-6"> Liked videos </div> </div>
            
            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6 my-2"> Subscriptions  </div>          
            
        </div>
        
        </>
    );
}

export default Sidebarmenu;