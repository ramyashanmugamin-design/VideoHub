import React, { useState,useEffect } from "react";
import "./index.css";
import "./header.css";


function Videocards() {

    const [cards,setCards] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/videocard').
        then((data)=>data.json()).
        then((data)=>setCards(data)).
        catch(err => console.log(err))
    },[]);

    return ( 
        <>
       
       <div>
            <ul className="pagination">
                <li><a href="#" className="leftarrow">&laquo;</a></li>
                <li><a href="#">All</a></li>
                <li><a href="#">Tech</a></li>
                <li><a href="#">Challenge</a></li>
                <li><a href="#">Math</a></li>
                <li><a href="#">Gaming</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Cricket</a></li>
                <li><a href="#">Baking</a></li>
                <li><a href="#">Comedy</a></li>
                <li><a href="#">Mixes</a></li>
                <li><a href="#">Computer Programming</a></li>
                <li><a href="#">Asian music</a></li>
                <li><a href="#">Recently uploaded</a></li>
                <li><a href="#">Watched</a></li>
                <li><a href="#" className="rightarrow">&raquo;</a></li>
            </ul>
                 
        </div>

        <div> 
            {cards.length > 0 ? (

                  
            <div className="container-videocard">
                
               <div className="row">

                        {cards.map((card) => (
                           
                            <div key={card.id} className="col-lg-4 col-md-6 col-xs-12 my-2 highlight videocard-display">
                                <img src={card.thumbnail} className="thumbnail img-fluid"></img> 
                        
                            <div className="d-flex thumbnaildetails"> 
                                    <div> 
                                        <img src={card.channel.avatar} className="rounded-circle channel m-2"></img> 
                                    </div>
                                    <div className="mx-2 my-2 lh-1">  
                                        <div className="d-flex cardtitle"> 
                                        <h6 style={{width : "100%"}}> {card.title}   </h6>
                                        <i className="bi bi-three-dots-vertical fs-5"></i>
                                        </div>
                                        <p className="p-mb"> {card.channel.name}</p>
                                        <span>{card.views}  views <i className="bi bi-dot"></i></span>
                                        <span className="mx-1">{card.uploadDate}</span>
                                        
                                    </div>   
                            </div>
                            </div>
                
                        )
                        )
                        }
               </div>

                  
            </div>

           
         

            ) : (   <div> <h3> "Loading Videos"  </h3></div> )   }
        </div>

        </>
    );
}

export default Videocards;