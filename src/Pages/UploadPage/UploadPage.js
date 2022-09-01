import "./UploadPage.scss"

import { Link } from "react-router-dom"

import Up from "../../Assets/Icons/publish.svg"
import Photo from "../../Assets/Images/Upload-video-preview.jpg"

function UploadPage() {

    return (
        <> 
        <div className="upload">
            <div className="upload__header">
                <h1 className="upload__title">Upload Video</h1>
            </div>
            <div className="upload__mid">
                <div className="upload__thumb">
                    <p className="upload__thumb-title">VIDEO THUMBNAIL</p>
                    <img className="upload__img" src={Photo} alt="Upload snippit"></img>
                </div>
                <div className="upload__text">
                    <form className="upload__form">
                        <label className="upload__label" htmlFor="title">TITLE YOUR VIDEO
                        <input 
                        className="upload__input" 
                        name="title" 
                        placeholder="Add a title to your video" 
                        type="text">
                        </input></label>
                        <label className="upload__label" htmlFor="description">ADD A VIDEO DESCRIPTION 
                        <textarea 
                        className="upload__input" 
                        name="description" 
                        placeholder="Add a description to your video"
                        rows="5"
                        ></textarea></label>
                    </form>
                </div>
            </div>
            <div className="upload__bottom">
                <div className="upload__cb">
                    <Link to="/" className="upload__bottom-cancel"><h3>Cancel</h3>
                    </Link>
                </div>
                <div className="upload__bottom-button">
                    <Link className="upload__button" to="/good">
                        <img className="upload__button-img" src={Up}></img>
                        <button className="upload__button-actual">PUBLISH</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default UploadPage