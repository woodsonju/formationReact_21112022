import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import "../styles/Navigation.css"

const Navigation = () => {

    const basket = useSelector((state) => state.basket.value);

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
                <li><NavLink to="/forms">Forms</NavLink></li>
                <li><NavLink to="/nimportequoi">404</NavLink></li>
                <li><NavLink to="/redux">Redux</NavLink></li>
                <li>Panier : {basket}</li>
            </ul>
        </nav>
    )
}
export default Navigation;