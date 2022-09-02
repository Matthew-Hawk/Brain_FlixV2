// Import the stylesheet
import './Disc.scss'

// import the Icons
import Heart from "../../Assets/Icons/likes.svg"
import Views from "../../Assets/Icons/views.svg"





function Disc({activeVideo}) {
  // console.log(activeVideo)


 

    return (
      <div className='curr'>
          <h1 className='curr__title'>{activeVideo.title}</h1>
          <div className='curr__info'>

              <div className='curr__info--1'>
                <h3 className='curr__channel'>{activeVideo.channel}</h3>
                <h3 className='curr__time'>{activeVideo.timestamp}</h3>
              </div>

              <div className='curr__info--2'>
                <div className='curr__views'>
                  <img alt="a grey eye" src={Views}/>
                  <h3 className='curr__views'>{activeVideo.views}</h3>
                </div>
                
                <div className='curr__likes'>
                  <img alt="a grey heart" src={Heart}/>
                  <h3 className='curr__likes-num'>{activeVideo.likes}</h3>
                </div>
              </div>
          </div>
         <h3 className='curr__disc'>{activeVideo.description}</h3>
      </div>
    );
  }
  
  export default Disc