import { NavLink, Link} from "react-router-dom";
import { useState } from "react";


function NavBar() {
    const [active, setActive] = useState("")


    const handleActive = () => {
        setActive(active)
    }
    return(
        <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
            <Link className="navbar-brand" to="/">
            <p>Emmy's recipe</p>
             </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <NavLink
                        className={
                            active === "home" ? "nav-link active" : "nav-link"
                        }
                        to="/"
                        onClick={handleActive}
                        >
                             Home
                        </NavLink>
                    </li>
                    <li className="nav-items">
                     <NavLink
                        className={
                            active === "About" ? "nav-link active" : "nav-link"
                        }
                        to="/about"
                        onClick={handleActive}
                        >
                        About
                </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink
                        className={
                            active === "Contact" ? "nav-link active" : "nav-link"
                        }
                        to="/contact"
                        onClick={handleActive}
                        >
                        Contact
                </NavLink>
                    </li>
                </ul>
     
            </div>
        </div>
    </nav>
        
        
        </>
    )
} 
export default NavBar