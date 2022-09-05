import './Video.scss'




// 
function Video({activeVideo}) {
console.log(activeVideo)


    return (
      <>
        <div className="main-video">
          <video className="main-video__main" 
          src="#" 
          alt="Current Selected Video"
          poster={activeVideo.image} 
          controls></video>
        </div>
        {/* <Disc
          // currentVideo={currentVideo}
        /> */}
      </>
    );
  }
  
  export default Video