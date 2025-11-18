import React from "react";
import { useRef } from "react";


function Modal({onClose}){
  
    const modalRef = useRef();

    function modalClose(e){
        if(modalRef.current === e.target )
        {
        onClose();
        }
    }

    return(
        <>
        <div ref={modalRef} onClick={(e)=>modalClose(e)} className="modalcontainer">
            <div className="modalcard ">
               <div className="d-flex"> 
                        <h5 className="name">Ramya S</h5> 
                        <div className="close" onClick={onClose}> X </div>
               </div>

                <div className="d-flex flex-column ">
                    <h4 className="info mx-4">More info</h4>
                    <div className="d-flex"> <i class="bi bi-globe fs-4 mt-2 mx-4"></i> <p className="mt-3 highlight"  onClick={onClose}>www.youtube.com/@ramyashanmugam2</p> </div>
                     <div className="d-flex"> <i class="bi bi-info-circle fs-4 mt-2 mx-4"></i> <p className="mt-3"> Joined 24 Feb 2014 </p> </div>
                    <div className="d-flex"><img src="src/assets/menu items/your videos.png" className="video"></img><p className="mt-3 mx-3"> 1 video </p> </div>
                    <div className="d-flex"><i class="bi bi-graph-up-arrow fs-5 mt-2 mx-4"></i><p className="mt-3"> 40 views </p> </div>
                     <div className="d-flex highlight sharechannel"><img src="src/assets/menu items/share.png" className="share"></img><p className="mt-2"> Share Channel </p></div>

                </div>
             
            </div>
        </div>
        </>
    );

}

export default Modal;