import "./GoodUpload.scss"
import { Link } from "react-router-dom"

function GoodUpload () {
    return(
        <>
        <div className="main">
        <h1 className="main__title">Nisuu C:</h1>
        <Link  to="/"><button className="main__link">Click Me To Go Home</button></Link>
        </div>
        </>
    )
}
export default GoodUpload