import { useRef } from "react";
import './modalvoice.css';
import voiceicon from '/src/assets/Icons/voice-search-icon.svg';


function ModalVoice({onClose}){
  
    const modalRef = useRef();

    function modalClose(e){
        if(modalRef.current === e.target )
        {
        onClose();
        }
    }

    return(
        <>
        <div ref={modalRef} onClick={(e)=>modalClose(e)} className="modalvoicecontainer">
            <div className="modalvoicecard ">
  
                        <div className="close" onClick={onClose}> X </div>
                        <h5> Search with your voice</h5> 
                        <p>To search by voice, go to your browser settings and allow access to microphone</p>

                        <img src={voiceicon} className=""></img>
               

             
            </div>
        </div>
        </>
    );

}

export default ModalVoice;