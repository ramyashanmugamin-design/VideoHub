import './sidebar.css'
import ms from '/src/assets/ChannelImages/madras samayal.png';
import blippi from '/src/assets/ChannelImages/blippi.png';
import vicky from '/src/assets/ChannelImages/vicky.png';
import codeio from '/src/assets/ChannelImages/codeio.png';
import thinkmusic from '/src/assets/ChannelImages/thinkmusic.png';
import tseries from '/src/assets/ChannelImages/tseries.png';

function Subscriptions() {
    return(
        <>
        
        <div className ="subscription">

            

            <div className="mx-1 mt-2"> 
                <h5>  Subscriptions  </h5> 
            </div>    

            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="side-links highlight my-2">
                <img src={ms} className="channellogo"></img>
                <p className="mx-4 my-1"> Madras Samayal </p>
            </div>    

            <div className="side-links highlight my-2">
                <img src={blippi} className="channellogo"></img>
                <p className="mx-4 my-1"> Blippi world </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src={vicky} className="channellogo"></img>
                <p className="mx-4 my-1"> Vicky Cinemas </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src={codeio} className="channellogo"></img>
                <p className="mx-4 my-1"> Code-io Tamil </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src={thinkmusic} className="channellogo"></img>
                <p className="mx-4 my-1"> Think Music India </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src={tseries} className="channellogo"></img>
                <p className="mx-4 my-1"> T-Series </p>
            </div>  
        
        </div>

        </>

    );

}

export default Subscriptions;