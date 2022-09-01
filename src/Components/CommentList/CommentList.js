import "./CommentList.scss"
import Photo from "../../Assets/Images/Mohan-muruge.jpg"
import Text from "../../Assets/Icons/add_comment.svg"


import Comment from "../Comment/Comment"





function CommentList({videoDetails, activeVideo}) {
    
    
    
    return (
        <>
            <div className="comm-user">
                <img className="comm-user__user-pic" src={Photo}></img>
            <div className="comm-user__input">
                <div className="comm-user__tblock">
                    <label className="comm-user__label" htmlFor="comment">JOIN THE CONVERSATION</label>
                    <input className="comm-user__field" type="text" placeholder="Add a new comment"></input>
                </div>
                <div className="comm-user__add-div">
                    <img className="comm-user__add-img" src={Text} alt="White text box"></img>
                    <button className="comm-user__add-btn">COMMENT</button>
                </div>
            </div>
            </div>
            <div className="comment-list">
                <div className="comment-list__user-space">
                </div>
                <div className="comment-list__comm-space">
                    {videoDetails[0].comments.map((comm) =>{
                        return(
                            <Comment 
                            key={comm.id}
                            id={comm.id}
                            name={comm.name}
                            comment={comm.comment}
                            timestamp={comm.timestamp}
                        />
                        )
                  
                    })}
                </div>
               
            </div>
            
        </>
    );
  }
 export default CommentList

