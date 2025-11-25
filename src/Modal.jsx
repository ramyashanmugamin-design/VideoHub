import React from "react";
import { useRef } from "react";
import share from '/src/assets/menu items/share.png';
import './modal.css';


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
                        <h5 className="name">RamyaS</h5> 
                        <div className="close" onClick={onClose}> X </div>
               </div>

                <div className="d-flex flex-column ">
                    <h4 className="info mx-4">More info</h4>
                    <div className="d-flex"> <i class="bi bi-globe fs-4 mt-2 mx-4"></i> <p className="mt-3 highlight"  onClick={onClose}>www.VideoHub.com/@RamyaS-z2s</p> </div>
                     <div className="d-flex"> <i class="bi bi-info-circle fs-4 mt-2 mx-4"></i> <p className="mt-3"> Joined 20 Nov 2025 </p> </div>
                    
                     <div className="d-flex highlight sharechannel"><img src={share} className="share"></img><p className="mt-2"> Share Channel </p></div>

                </div>
             
            </div>
        </div>
        </>
    );

}

export default Modal;