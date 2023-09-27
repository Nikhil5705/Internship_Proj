import { NavLink} from "react-router-dom";

import "./Styles.css"

export const Footer = () =>{
 return(
    <div className="footer">
        <NavLink className="footer_head" to="/">UPSYS</NavLink>
        <div className="footer_text">Connect me on
         <NavLink className="footer_link" to="https://www.linkedin.com/company/upsys-it-and-marketing-solutions/">LinkedIn</NavLink> 
    </div>
    </div>
 )
}