import "./VideoCard.scss"
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function VideoCard({title, channel, image}) {
    //TEST TO SEE IF PROPS IS PASSES 
    // console.log(title)
    // console.log(channel)
    // console.log(image)
   
    
    return(
    <>
        <div className="video-card">
            <div className="video-card__image-div">
            <img className="video-card__image" src={image} alt="Video pic"></img>
            </div>
            <div className="video-card__text-area">
                <p className="video-card__title">{title}</p>
                <p className="video-card__channel">{channel}</p>
            </div>
        </div>
    </>
    )
}

export default VideoCard