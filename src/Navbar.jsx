import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
<>
<ul >
    <li ><NavLink exact activeClassName="active_link" to="/">Home</NavLink></li>
    <li ><NavLink exact activeClassName="active_link" to="/server2">Server2</NavLink></li>
</ul>


</>


    );
}
export default Navbar;