import React from "react";

function Sidebarmenu(){
    return(
        <>

        <div>
                         
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/home.png" className="home"></img> <h5 className="mx-4 my-1">  Home  </h5> </div>
               
           <div className="highlight d-flex  my-2"><img src="src/assets/menu items/shorts.png" className="shorts"></img><h5 className="mx-4 my-1"> Shorts </h5> </div> 
           
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/subscriptions.png" className="subscriptions"></img><h5 className="mx-4 my-1"> Subscriptions </h5> </div>

            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6  my-2"> You  </div> 

            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/history.png" className="history"></img><h5 className="mx-4 my-1"> History </h5> </div>

            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/playlists.png" className="playlists"></img><h5 className="mx-4 my-1"> Playlists </h5> </div>

            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/your videos.png" className="yourvideos"></img><h5 className="mx-4 my-1"> Your videos</h5> </div>
            
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/watchlater.png" className="watchlater"></img><h5 className="mx-4 my-1"> Watch Later </h5> </div>
            
            <div className="highlight d-flex my-2"> <img src="src/assets/menu items/like.png" className="likedvideos"></img><h5 className="mx-4 my-1"> Liked videos </h5> </div>
            
            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="mx-1 fs-6 my-2"> Subscriptions  </div>          
            
        </div>
        
        </>
    );
}

export default Sidebarmenu;