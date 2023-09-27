import { NavLink} from "react-router-dom";

import "./Styles.css"

export const Header = () =>{
 return(
    <div className="navbar">
        <NavLink className="nav_head" to="/">UPSYS</NavLink>
        <div className="nav_links">
        <NavLink className="nav_elements" to="/services">Services</NavLink>
         <NavLink className="nav_elements" to="/about">About Us</NavLink>
         <NavLink className="nav_elements" to="/contact">Contact</NavLink> 
         <NavLink className="nav_elements" to="/login">Login</NavLink> 
         <NavLink className="nav_elements" to="/signup">Signup</NavLink> 
    </div>
    </div>
 )
}