import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";
import "@styles/index.css";
import "./styles/AuthStyles.css";
import NavBar from "@root/shared/Navbar";
import UJImg from "@images/unijorge-logo.png";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main id="auth">
        <div className="tituloForms">
          <div className="acessarPortal">Acessar o Portal</div>
          <div className="flex-row">
            <div className="texto">Insira seus dados</div>
            <div className="logoUJ">
              <img src={UJImg} alt="Logo UJ" />
            </div>
          </div>
        </div>
        {children || <Outlet />}
      </main>
    </>
  );
};

export default AuthLayout;
