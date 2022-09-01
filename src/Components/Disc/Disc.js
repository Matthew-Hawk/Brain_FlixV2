// Import the stylesheet
import './Disc.scss'

// import the Icons
import Heart from "../../Assets/Icons/likes.svg"
import Views from "../../Assets/Icons/views.svg"





function Disc({videoDetails, activeVideo}) {
  // console.log(videoDetails)

// let x = vidDisc.find(current => current.id==={currentVideo})

 

    return (
      <div className='curr'>
          <h1 className='curr__title'>{videoDetails[0].title}</h1>
          <div className='curr__info'>

              <div className='curr__info--1'>
                <h3 className='curr__channel'>{videoDetails[0].channel}</h3>
                <h3 className='curr__time'>{videoDetails[0].timestamp}</h3>
              </div>

              <div className='curr__info--2'>
                <div className='curr__views'>
                  <img alt="a grey eye" src={Views}/>
                  <h3 className='curr__views'>{videoDetails[0].views}</h3>
                </div>
                
                <div className='curr__likes'>
                  <img alt="a grey heart" src={Heart}/>
                  <h3 className='curr__likes-num'>{videoDetails[0].likes}</h3>
                </div>
              </div>
          </div>
         <h3 className='curr__disc'>{videoDetails[0].description}</h3>
      </div>
    );
  }
  
  export default Disc