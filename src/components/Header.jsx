import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav className="d-flex">
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/" >Homepage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies">Movies</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}