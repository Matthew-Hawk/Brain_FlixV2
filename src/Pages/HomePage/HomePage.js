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
// import Videos from "../../Assets/Data/videos.json"
// import vidDisc from "../../Assets/Data/video-details.json"







function HomePage() {
   // console.log(currentVideo)
   const [activeVideo, setActiveVideo] = useState(null);
   const [videoList, setVideoList]= useState(null)
   
   //CREATE API URL
   const API_URL = process.env.REACT_APP_API_URL
  // console.log(API_URL)

   //Axios call to get Video Info
   useEffect(() =>{
    //OLD API CALL
    //  axios.get(`https://project-2-api.herokuapp.com/videos?api_key=1ca167b9-272c-4e02-bc2b-c537032b5d2c`)
    //NEW API CALL
     axios.get(`${API_URL}/videos`)
     .then((res) =>{
       setVideoList(res.data)
       console.log(res.data.videoList)
       getActiveVideo(res.data.videoList[0])
     })
   }, [])
 
   function getActiveVideo(id){
    // OLD API CALL
    //  axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=1ca167b9-272c-4e02-bc2b-c537032b5d2c`)
    // NEW API CALL
    axios.get(`http://localhost:8080/videos/${id}`)
     .then((res) => {
        console.log(res.data)
       setActiveVideo(res.data)
     })
     .catch((error) =>{
        console.log("this thang aint working")
     })
   }
//  console.log(activeVideo)
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
        <Next 
        videoList={videoList}
        activeVideo={activeVideo}/>
      </div>
    </div>
    );
}  
export default HomePage