import { Link } from "react-router";
import routes from "@root/routes";
import "@styles/navbar.css"

const NavBar = () => {
    return (
        <div className="navbar">
            <div id='brand'>
                <Link 
                    to={routes.HOME}
                    className="nav-item">
                        <img src="/public/vite.svg" />
                </Link>
            </div>
            <section className='nav-sec' id="links">
                <Link 
                    to={routes.HOME}
                    className="nav-item">
                        Home
                </Link>
                <Link 
                    to={routes.QRCODE}
                    className="nav-item">
                        Reuniões
                </Link>
                <Link 
                    to={'/admin'}
                    className="nav-item">
                        Administração
                </Link>
            </section>
            <section className="nav-sec" id="auth">
                <Link 
                    to={routes.LOGIN}
                    className="nav-item">
                        Login
                </Link>
                <Link 
                    to={routes.LOGIN}
                    className="nav-item">Register</Link>
            </section>
        </div>
    )
}

export default NavBar;