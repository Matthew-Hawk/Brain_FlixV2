import "./Next.scss"
import VideoCard from "../VideoCard/VideoCard"
import { NavLink } from "react-router-dom"


function Next({videoDetails, activeVideo, setActiveVideo}) {

    // const id = useParams().id;
    // let selectedVideo = videoDetails.find(vid => id === vid.id);
    
    // setActiveVideo(id)

    return(
    <>
    <div className="next">
        <h3 className="next__title">NEXT VIDEO</h3>
        <div className="next__video-area">
            { videoDetails.map((info)=> {
                return(
                    <NavLink className={`navlink__next-video${activeVideo===info.id?" notme--butyes":""}`} to={`/${info.id}`}>
                    <VideoCard
                    key={info.id}
                    title={info.title}
                    channel={info.channel}
                    image={info.image}
                    setActiveVideo={setActiveVideo}
                    activeVideo={activeVideo}
                    videoDetails={videoDetails}
                    /></NavLink>
                )


            }) }
        </div>

    </div>
       
    </>
    )
}

export default Next