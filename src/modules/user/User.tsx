import NavBar from "@root/shared/Navbar";
import { useState } from "react";

import "@styles/user.css";
import logo from "@images/nite-logo.png";

const User = () => {
  const [fname] = useState("Beltrano");
  const [mname] = useState("Silva");
  const [lname] = useState("Alves");
  const [username] = useState("Chad Belt");
  const [email] = useState("beltrano@gmail.com");
  const [linkedin] = useState("Beltrano Silva");
  const [github] = useState("ChadBelt");

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main id="user">
        <h1>Bem-vindo de volta, {fname}.</h1>
        <div className="user-panel">
          <div className="user-sidebar-panel">
            <img src={logo} />
            <span className="fname badge">{email}</span>
            <ul className="details-sheet">
              <li>
                <div className="detail-cell">
                  <label>Nome Completo</label>
                </div>
                <div className="detail-cell">
                  <span>
                    {fname} {lname}
                  </span>
                </div>
              </li>
              <li>
                <div className="detail-cell">
                  <label>Username</label>
                </div>
                <div className="detail-cell">
                  <span>{fname}</span>
                </div>
              </li>
              <li>
                <div className="detail-cell">
                  <label>Email</label>
                </div>
                <div className="detail-cell">
                  <span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </span>
                </div>
              </li>
              <li>
                <div className="detail-cell">
                  <label>LinkedIn</label>
                </div>
                <div className="detail-cell">
                  <span>
                    <a href={`https://br.linkedin.com/${linkedin}`}>
                      {linkedin}
                    </a>
                  </span>
                </div>
              </li>
              <li>
                <div className="detail-cell">
                  <label>Github</label>
                </div>
                <div className="detail-cell">
                  <span>
                    <a href={`https://github.com/${github}`}>
                      github.com/{github}
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="user-main-content">
            <div className="name-callout">
              <div className="first-row">
                <h3 className="username">{username}</h3>
                <sub className="github-user">
                  <a href={`https://github.com/${github}`}>@{github}</a>
                </sub>
              </div>
              <div className="second-row fullname">
                <span>{fname}</span>
                <span>{mname}</span>
                <span>{lname}</span>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default User;
