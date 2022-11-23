import { NavLink } from "react-router-dom"
import "../styles/Navigation.css"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Presentation</NavLink></li>
                <li><NavLink to="/routing">Routage</NavLink></li>
                <li><NavLink to="/static">Static</NavLink></li>
                <li><NavLink to="/hooks">Hooks</NavLink></li>
                <li><NavLink to="/props">Props</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/effect">Effect</NavLink></li>
                <li><NavLink to="/request">Request</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;