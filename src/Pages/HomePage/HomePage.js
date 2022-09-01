//Import StyleSheet
import "./HomePage.scss"
//Components
import Video from "../../Components/Video/Video"
import Disc from "../../Components/Disc/Disc"
import CommentList from "../../Components/CommentList/CommentList"
import Next from "../../Components/Next/Next"

//Other Important Stuff
import { useState, useEffect } from "react" 
import axios from "axios"
import Vid from "../Vid/Vid"

//The JSON Files Since the API wasnt working
import Videos from "../../Assets/Data/videos.json"
import vidDisc from "../../Assets/Data/video-details.json"







function HomePage() {
  // console.log(currentVideo)
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentVideo, setCurrentVido]= useState(Videos)
  const [videoDetails, setVideoDetails] = useState(vidDisc)

  
  //Axios call to get Video Info
  // useEffect(() =>{
  //   const fetchData = async () => {
  //   try {
  //     axios.get(`https://project-2-api.herokuapp.com/videos/?api_key=c4050ace-fe9c-4796-a68a-4ec9d8f75997`)
  //   .then((res) =>{
  //     setCurrentVido(res.data)
  //   })
  //   } catch(err) {
  //     console.log("this thing broke")
  //   }}
  //   fetchData()
  // }, [])

  //This API CALL WORKs 
 
 


    return (
    <div className="home-page">
      <Video 
        currentVideo={currentVideo}
        activeVideo={activeVideo}/>
      <div className="home-page__bottom">
        <div className="home-page__video-misc">
          <Disc 
            videoDetails={videoDetails}
            activeVideo={activeVideo}/>
          <CommentList 
            videoDetails={videoDetails}
            activeVideo={activeVideo}/>
        </div>
        <Next 
          videoDetails={videoDetails}
          setActiveVideo={setActiveVideo}
          activeVideo={activeVideo}/>
      </div>
      
    </div>
    );
}  
export default HomePage