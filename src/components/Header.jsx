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
                        <img className="header-logo" src="http://localhost:5256/static/logo.png"></img>
                        </Link>
                    </div>

                    <div className="first-2">
                        <div>
                            <Link to={'/Body'}>
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to={'/login'}>Login</Link>
                        </div>
                        <div className="profile"><h2 className="D">D</h2></div>
                    </div>
                    
                </div>
        </>
    )
}

export default Header