import './Video.scss'




// 
function Video({currentVideo, activeVideo}) {
// console.log(currentVideo)




// let currentVideoPlaying = Videos.find(curr => curr.id===currentVideo);

    return (
      <>
        <div className="main-video">
          <video className="main-video__main" 
          src="#" 
          alt="Current Selected Video"
          poster={currentVideo[0].image} 
          // MIGHT HAVE TO CHANGE TO LOOK FOR IMAGE INSTEAD OF VIDEO
          controls></video>
        </div>
        {/* <Disc
          // currentVideo={currentVideo}
        /> */}
      </>
    );
  }
  
  export default Video