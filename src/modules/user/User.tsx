import NavBar from "@root/shared/Navbar";
import { useState } from "react";

import "@styles/user.css";
import logo from "@images/nite-logo.png";

const User = () => {
  const [name] = useState("Beltrano");
  const [email] = useState("beltrano@gmail.com");

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main id="user">
        <h1>Bem-vindo de volta, {name}.</h1>
        <div className="user-panel">
          <div className="user-photo-panel">
            <img src={logo} />
            <span className="name badge">{email}</span>
            <ul>
              <li>
                <b>Username:</b> {name}
              </li>
              <li>
                <b>Email:</b> {email}
              </li>
            </ul>
          </div>
          <div className="user-main-content">All</div>
        </div>
      </main>
    </>
  );
};

export default User;
