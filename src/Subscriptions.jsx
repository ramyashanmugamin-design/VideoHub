import './sidebar.css'


function Subscriptions() {
    return(
        <>
        
        <div className ="subscription">

            

            <div className="mx-1 mt-2"> 
                <h5>  Subscriptions  </h5> 
            </div>    

            <div> <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} /> </div>

            <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/madras samayal.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Madras Samayal </p>
            </div>    

            <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/blippi.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Blippi world </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/vicky.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Vicky Cinemas </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/codeio.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Code-io Tamil </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/thinkmusic.png" className="channellogo"></img>
                <p className="mx-4 my-1"> Think Music India </p>
            </div>  

            <div className="side-links highlight my-2">
                <img src="src/assets/ChannelImages/tseries.png" className="channellogo"></img>
                <p className="mx-4 my-1"> T-Series </p>
            </div>  
        
        </div>

        </>

    );

}

export default Subscriptions;