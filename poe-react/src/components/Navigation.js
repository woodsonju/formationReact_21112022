import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li NavLink to="/">Prensentation</li>
                <li NavLink to="/routing">Routage</li>
            </ul>
        </nav>
    )
}
export default Navigation;