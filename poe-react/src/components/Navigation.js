import { NavLink } from "react-router-dom"
import "../styles/Navigation.css"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Presentation</NavLink></li>
                <li><NavLink to="/routing">Routage</NavLink></li>
                <li><NavLink to="/static">Static</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;