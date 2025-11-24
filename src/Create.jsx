
import './header.css';
import uploadvideos from 'src/assets/menu items/your videos.png';

function Create() {
    return(
        <>
         <div className="create-popup d-flex highlight  my-2"> 
                <img src={uploadvideos} className="uploadvideos"></img>
                <p className="mx-2 my-2"> Upload videos</p> 
            </div>
        </>
    );

}

export default Create;