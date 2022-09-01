import "./Comment.scss"



function Comment({key, id, name, comment, timestamp}) {


    return(
        <>
        <div className="posted-comment-main">
            <div className="posted-comment-main__comm">
              <div className="posted-comment-main__comm-top">
                <h4 className="posted-comment-main__name">{name}</h4>
                <p className="posted-comment-main__timestamp">{timestamp}</p>
              </div>
              <p className="posted-comment-main__comment">{comment}</p>
            </div>
        </div>
        </>
    )
}

export default Comment