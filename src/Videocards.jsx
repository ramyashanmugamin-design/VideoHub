import React, { useState,useEffect } from "react";
import Header from "./Header";
import "./index.css"


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
        <div className="header-height"><Header /></div>

        <div> 
            {cards.length > 0 ? (

            <div className="container-fluid">
                <div className="row justify-content-center">
                
                
                        {cards.map((card) => (
                            <div key={card.id} className="col-lg-4 col-md-6 col-xs-12 my-2 highlight">
                                <img src={card.thumbnail} className="thumbnail"></img> 
                        

                            <div className="d-flex"> 
                                    <div> 
                                        <img src={card.channel.avatar} className="rounded-circle channel m-2"></img> 
                                    </div>
                                    <div className="mx-3 my-2 lh-1">  
                                        <div className="d-flex"> 
                                        <h6 style={{width : "365px"}}> {card.title}   </h6>
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

            ) : (

                <div> <h3> "Loading Videos"  </h3></div>
            )
            }
        </div>

        </>
    );
}

export default Videocards