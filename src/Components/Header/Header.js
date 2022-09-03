//import the style sheets and assests
import "./Header.scss"
import Logo from "../../Assets/Logo/BrainFlix-logo.svg"
import search from "../../Assets/Icons/search.svg"
import photo from "../../Assets/Images/Mohan-muruge.jpg"
import upload from "../../Assets/Icons/upload.svg"
// improt this thing for the navagation utilitiy
import { Link } from "react-router-dom"


function Header() {
    return (
        <div className="header">
            <Link className="header__logo" to="/"><img  src={Logo} alt="Logo"></img></Link>
                <div className="header__search-div">
                    <div className="header__search-bar">
                        <img className="header__search-icon" src={search} alt="search"></img>
                        <label htmlFor="search"></label>
                        <input  id="search" className="header__input" name="search" type="text" placeholder="Search" size="8"></input>
                    </div>
                        <img className="header__photo--1" src={photo} alt="Profile"></img>
                </div>
                <Link className="header__link" to="/upload">
                <div className="header__button-div">
                    
                    <img className="header__upload-img" src={upload} alt="upload img"></img>
                    <button className="header__button" >Upload</button>
                </div>
                </Link>
                <div className="header__photo-div--2">
                        <img className="header__photo--2" src={photo} alt="Profile"></img>
                </div>
        </div>
    );
}  
export default Header;