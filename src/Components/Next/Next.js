import "./Next.scss"
import VideoCard from "../VideoCard/VideoCard"
import { NavLink } from "react-router-dom"


function Next({videoList, activeVideo}) {
    // console.log(videoList)


    return(
    <>
    <div className="next">
        <h3 className="next__title">NEXT VIDEO</h3>
        <div className="next__video-area">
            { videoList.map((info)=> {
                return(
                    <NavLink className={`navlink__next-video${activeVideo===info.id?" notme--butyes":""}`} to={`/${info.id}`}>
                    <VideoCard
                    key={info.id}
                    title={info.title}
                    channel={info.channel}
                    image={info.image}
                    activeVideo={activeVideo}
                    videoList={videoList}
                    /></NavLink>
                )
            }) }
        </div>

    </div>
       
    </>
    )
}

export default Next