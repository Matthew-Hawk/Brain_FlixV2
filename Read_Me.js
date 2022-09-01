//  ALl of this is OLD CODE

// <div className="main-video">
// <video 
//   className="main-video__main" src="#" alt="Currently selected Video" 
//   poster={currentVideoPlaying.image} />
// </div>


// {/* //THIS IS THE VIDEO INFO AND COMMENT SECTION PARENT div */}


// <div className="main-bottom">
// <div className="disc-com-space">
//     <div className="disc-com-space__disc-main">
//     <h1 className='disc-com-space__title'>{currentVideoInfo.title}</h1>
// <div className='disc-com-space__info'>
//   <div className='disc-com-space__info--1'>
//     <h3 className='disc-com-space__channel'>{currentVideoInfo.channel}</h3>
//     <h3 className='disc-com-space__time'>{currentVideoInfo.timestamp}</h3>
//   </div>

//   <div className='disc-com-space__info--2'>
//     <div className='disc-com-space__views'>
//       <img alt="a grey eye" src={View}/>
//       <h3 className='disc-com-space__views'>{currentVideoInfo.views}</h3>
//     </div>
    
//     <div className='disc-com-space__likes'>
//       <img alt="a grey heart" src={Heart}/>
//       <h3 className='disc-com-space__likes-num'>{currentVideoInfo.likes}</h3>
//     </div>
//   </div>
// </div>
// <h3 className='disc-com-space__disc'>{currentVideoInfo.description}</h3>
//     </div>
//     <div className="disc-com-space__comments-main">
    
//         {/* THIS IS WHERE THE COMMENT SECTION STARTS */}

//         <div className="disc-com-space__user-space">
//           <div className="disc-com-space__user-pic-div">
//             <img className="disc-com-space__user-pic" src={Photo}></img>
//           </div>
//           {/* User UI */}
//           <div className="disc-com-space__user-comm-div">
//             <div className="disc-com-space__user-comm-tblock">
//               <label
//                 className="disc-com-space__user-comm-label"
//                 htmlFor="comment"
//                 >JOIN THE CONVERSATION</label>
//               <input className="disc-com-space__user-comm-field"          type="text" placeholder="Add a new comment"></input>
//             </div>
//             {/* Comment Button */}
//             <div className="disc-com-space__user-button">
//               <img className="disc-com-space__user-button-icon" src={textBox}></img>
//               <button className="disc-com-space__user-button-btn">COMMENT</button>
//             </div>
//           </div>
//         </div>
//         {/* This is where the comments get posted */}
//       <div className="comments__comm-bottom">
//           <h3>{currentVideoInfo.comments[0].name}</h3>
//           <p>{currentVideoInfo.comments[0].timestamp}</p>
//           <p>{currentVideoInfo.comments[0].comment}</p>
//       </div>
      
      
//     </div>
// </div>
// <div className="next">
// <h3 className="next__title">NEXT VIDEO</h3>
// <div className="next__videoa-area">
// {videoDetails.map((info)=> {
//     return(
//       <NavLink to="/Vid">
//         <Video_Card
//         setActiveVideo={setActiveVideo}
//         key={info.id}
//         id={info.id}
//         title={info.title}
//         channel={info.channel}
//         image={info.image}
//         />
//       </NavLink>
        
//     )})}
// </div>
// </div>
// </div>