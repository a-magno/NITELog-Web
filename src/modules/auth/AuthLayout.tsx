import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";
import "@styles/index.css";
import "./styles/AuthStyles.css";
import NavBar from "@root/shared/Navbar";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="tituloForms">
          <div className="acessarPortal">Acessar o Portal</div>
          <div className="texto">Insira seus dados</div>
        </div>
        {children || <Outlet />}
      </main>
    </>
  );
};

export default AuthLayout;
