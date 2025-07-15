import { Outlet } from "react-router";
import type { PropsWithChildren } from "react";
import NavBar from "@root/shared/Navbar";
import "@styles/qrcode.css";

const QRCodeLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children || <Outlet />}</main>
    </>
  );
};

export default QRCodeLayout;
