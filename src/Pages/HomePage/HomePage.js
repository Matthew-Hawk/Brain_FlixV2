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
   const [videoList, setVideoList]= useState(null)
   
 
 
   const API_URL = process.env.R
   //Axios call to get Video Info
   useEffect(() =>{
     axios.get(`http://localhost:6969/videos"`)
     .then((res) =>{
       setVideoList(res.data)
      //  console.log(res.data)
       getActiveVideo(res.data[0].id)
     })
   }, [])
 
   function getActiveVideo(id){
     axios.get(`http://localhost:6969/videos/${id}`)
     .then((res) => {
       setActiveVideo(res.data)
     })
   }
 // console.log(activeVideo)
   // console.log(videoList)
 
   //This API CALL WORKs 
  
   if(!activeVideo){
    return <h1>Loading...</h1>
  }

    return (
    <div className="home-page">
      <Video activeVideo={activeVideo}/>
      <div className="home-page__bottom">
        <div className="home-page__video-misc">
          <Disc activeVideo={activeVideo}/>
          <CommentList activeVideo={activeVideo}/>
        </div>
        <Next videoList={videoList}
        activeVideo={activeVideo}/>
      </div>
      
    </div>
    );
}  
export default HomePage