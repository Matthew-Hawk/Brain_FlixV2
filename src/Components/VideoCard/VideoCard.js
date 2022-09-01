import "./VideoCard.scss"
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function VideoCard({title, channel, image, setActiveVideo, activeVideo, videoDetails}) {

    const id = useParams().id;

    let selectedVideo = videoDetails.find(vid => id === vid.id);
    
    setActiveVideo(id);

//    useEffect(()=>{
//     console.log(activeVideo)
//    }, [activeVideo])

   
    
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