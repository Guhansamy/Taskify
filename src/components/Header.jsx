import "../assets/styles.css"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>
                <div className="first-header"> 
                
                    <div className="first-1"> 
                        {/* <div> <img src="https://cdn-icons-png.flaticon.com/128/14607/14607522.png" className="header-logo"/> </div> */}
                        {/* <div className="header-logo"> D </div> */}
                        <Link to={'/'}>
                        <img className="header-logo" src="src/assets/logo.png"></img>
                        </Link>
                    </div>

                    <div className="first-2">
                        <div>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </div>
                        <div>Current</div>
                        <div>Profile</div>
                    </div>
                    
                </div>
        </>
    )
}

export default Header