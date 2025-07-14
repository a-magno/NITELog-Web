import { Link } from "react-router";
import routes from "@routes";
import niteImg from './../assets/imagens/nite_6.png';
import UJImg from './../assets/imagens/unnamed.png';


const Home = () => {
    return (
        <div className="container">
            <aside className="sidebar">
                <div className="logo-wrapper">
                    <img src={niteImg} alt="Logo Nite" className="logo-nite" />
                    <span className="logo-title">
                        <span className="line1">Nite</span>
                        <span className="line2">Log</span>
                    </span>

                </div>

                <div className="menu">
                    <Link to={routes.AUTH.LOGIN} className="menu-button">
                        Login
                    </Link>
                    <Link to={routes.QRCODE} className="menu-button secondary">
                        Código QR
                    </Link>
                </div>
                <div className="footer-links">
                    <Link to={routes.DOCS}>Documentação</Link>
                    <Link to="https://nitelogdev.discloud.app/apidoc/index.html">Swagger</Link>
                </div>
                <img src={UJImg} alt="Logo UJ" className="logo-uj" />
            </aside>

            <div className="main-content">
                <h1 className="bemVindo">Bem-vindo ao NITE</h1>
            </div>
        </div>
    );
};

export default Home;