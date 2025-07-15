import { Link } from "react-router";
import routes from "@root/routes";
import niteImg from "@images/nite-logo.png";
import "@styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={routes.HOME} className="nav-item" id="brand">
        <img src={niteImg} alt="Logo Nite" />
      </Link>

      <section className="nav-sec" id="links">
        <Link to={routes.QRCODE} className="nav-item">
          Reuniões
        </Link>
        <Link to={"/admin"} className="nav-item">
          Administração
        </Link>
      </section>

      <section className="nav-sec" id="auth">
        <Link to={routes.AUTH.LOGIN} className="nav-item">
          Login
        </Link>
        <Link to={routes.AUTH.LOGIN} className="nav-item">
          Register
        </Link>
      </section>
    </div>
  );
};

export default NavBar;
