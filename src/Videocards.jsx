import React, { useState,useEffect } from "react";
import "./index.css";
import "./header.css";
import "./videocard.css";
import db from "./db.json";


function Videocards() {

    const [cards,setCards] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [selectedId,setSelectedId] =useState('1');
    

 {/* 
    useEffect(()=>{
        fetch('/VideoHub/videocard').
        then((data)=>data.json()).
        then((data)=>{ setCards(data); setFilteredVideos(data)} ).
        catch(err => console.log(err))
    },[]);
    
*/}

      const data = db.videocard;
    useEffect(()=>{
      setCards(data); 
      setFilteredVideos(data);
       },[]);


    function filterVideos(category,id)
    {
        setSelectedId(id);
        
        if(category === 'all')
        {
            setFilteredVideos(cards);
        }
        else
        {
            const newFilteredVideos = cards.filter((card) => card.category === category);
            setFilteredVideos(newFilteredVideos);
        }
        
    }
    return ( 
        <>
       
       <div>
            <ul className="pagination">
            
                <li onClick={() => filterVideos('all','1')} className={`${selectedId == '1' ? 'selected-item' : 'item'}`}>All</li>
                <li onClick={() => filterVideos('music','2')} className={`${selectedId == '2' ? 'selected-item' : 'item'}`}>Music</li>
                <li onClick={() => filterVideos('cooking','3')} className={`${selectedId == '3' ? 'selected-item' : 'item'}`}>Cooking</li>
                <li onClick={() => filterVideos('phython','4')} className={`${selectedId == '4' ? 'selected-item' : 'item'}`}>Phython</li>
                <li onClick={() => filterVideos('data structure','5')} className={`${selectedId == '5' ? 'selected-item' : 'item'}`}>Data Structure</li>
                <li onClick={() => filterVideos('html','6')} className={`${selectedId == '6' ? 'selected-item' : 'item'}`}>Html</li>
                <li onClick={() => filterVideos('pizza','7')} className={`${selectedId == '7' ? 'selected-item' : 'item'}`}>Pizza</li>
                <li onClick={() => filterVideos('programming','8')} className={`${selectedId == '8' ? 'selected-item' : 'item'}`}>Computer Programming</li>
                <li onClick={() => filterVideos('baking','9')} className={`${selectedId == '9' ? 'selected-item' : 'item'}`}>Baking</li>
                <li onClick={() => filterVideos('kids','10')} className={`${selectedId == '10' ? 'selected-item' : 'item'}`}>Kids</li>
                <li onClick={() => filterVideos('movie','11')} className={`${selectedId == '11' ? 'selected-item' : 'item'}`}>Movie</li>
                <li onClick={() => filterVideos('entertainment','12')} className={`${selectedId == '12' ? 'selected-item' : 'item'}`}>Entertainment</li>
                <li onClick={() => filterVideos('sweet','13')} className={`${selectedId == '13' ? 'selected-item' : 'item'}`}>Sweets</li>
                
            </ul>
                 
        </div>

        <div> 
            {cards.length > 0 ? (

                  
            <div className="container-videocard">

                    <div className="row">

                        {filteredVideos.map((card) => (
                           
                            <div key={card.id} className="col-lg-4 col-md-6 col-xs-12 my-2 highlight videocard" onClick={()=>{window.open(card.videoUrl,'_blank')}}>
                                <img src={card.thumbnail} className="thumbnail img-fluid"></img> 
                        
                            <div className="d-flex thumbnaildetails"> 
                                    <div> 
                                        <img src={card.channel.avatar} className="rounded-circle channel m-2"></img> 
                                    </div>
                                    <div className="mx-2 my-2 lh-1">  
                                        <div className="d-flex cardtitle"> 
                                        <h6> {card.title} </h6>
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