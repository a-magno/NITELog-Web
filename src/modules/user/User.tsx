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
              <li className="detail-row">
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
              <div className="third-row detail-row">
                <label>Curso:</label>
                <span>Ciência da Computação</span>
              </div>
            </div>
            <div className="skills-panel">
              <div className="tabs-container">
                <button className="tab">Projetos</button>
                <button className="tab">Especialidades</button>
                <button className="tab">Interesses</button>
                <button className="tab">Sobre mim</button>
              </div>
              <div className="skills-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  laborum impedit, vero odio, doloribus itaque sapiente
                  dignissimos, nesciunt vitae consectetur veritatis culpa
                  assumenda commodi recusandae repudiandae? Ratione dolorem quia
                  velit! Harum illo exercitationem maiores, quia minima
                  adipisci. Quam sit magnam qui deleniti sint nam blanditiis a
                  eveniet tempora, distinctio reiciendis dolor debitis magni.
                  Voluptatibus quasi omnis et cupiditate aspernatur sunt! Fuga
                  ad quod quas totam recusandae esse ab! Totam doloremque
                  beatae, quis modi commodi suscipit. Eveniet, illo tempore fuga
                  distinctio sed a doloribus corrupti quia itaque magni deleniti
                  placeat iure! Animi, unde sed perferendis quibusdam quos
                  eligendi distinctio accusamus ea illo quo, cumque tempore
                  laborum impedit suscipit obcaecati modi corrupti aperiam ipsum
                  voluptatibus ut praesentium! Unde eum hic quo eveniet.
                  Voluptate similique veniam perferendis autem atque, totam
                  eveniet facilis cumque accusantium voluptas architecto unde
                  amet harum? Modi reiciendis facere dicta, ut repellat minima
                  rerum sequi praesentium hic vero? Labore, eligendi. Delectus
                  at error laborum est repellendus? Aliquam, ipsa ullam
                  veritatis repellendus incidunt aut dolorem laboriosam, eos ex,
                  eius magnam nesciunt quidem quaerat! Minima quis praesentium
                  ad dicta obcaecati ex laudantium. Eveniet totam eius
                  blanditiis qui quasi fugiat doloremque veritatis ducimus ea.
                  Quaerat placeat possimus eum perferendis ab, doloribus
                  expedita aliquid cupiditate eveniet cum modi nostrum itaque.
                  Eum temporibus nemo minima? Inventore, commodi veniam placeat
                  pariatur distinctio autem similique nihil itaque odio atque
                  tempora ea error rerum temporibus dolor molestias aperiam
                  officiis totam possimus doloribus rem? Ullam soluta omnis
                  illum itaque. Voluptatibus sint placeat perferendis blanditiis
                  esse maxime pariatur veritatis illum, iusto porro veniam ullam
                  reprehenderit molestiae minus nostrum. Unde illo sapiente
                  dicta aliquid ipsum sit perferendis accusantium. Fuga,
                  nesciunt laborum. Sit, officia nulla, assumenda doloremque
                  praesentium perspiciatis, necessitatibus ratione ab ea ullam
                  officiis quae recusandae reprehenderit soluta iure? Velit
                  veritatis officia tempore! Id animi ut voluptates porro
                  praesentium quaerat et. Totam corporis consequatur id quas,
                  voluptas eligendi? Unde facilis commodi saepe nostrum quam
                  cumque id autem laboriosam nisi perferendis accusamus
                  perspiciatis quisquam esse, quod assumenda in quo dolorem,
                  iste neque. Tempore distinctio architecto rem laboriosam
                  cumque non, qui error provident eaque rerum ea deserunt
                  debitis delectus perferendis sint sed sapiente culpa, nulla
                  animi tempora soluta facilis laudantium nobis magni!
                  Obcaecati! Alias recusandae nesciunt delectus iure magni
                  soluta sint nam perferendis doloremque, fugit repellat
                  laborum. Quisquam minima animi accusantium nostrum, magnam,
                  nihil assumenda tenetur harum alias repellat magni voluptate,
                  veniam ea? Laboriosam sequi architecto eos error.
                  Consequuntur, ducimus eligendi. Dicta quidem quod aut atque
                  error iure nobis temporibus commodi, labore recusandae, sequi
                  in earum magnam expedita vero odit dolorem. Nulla, rem.
                  Soluta, voluptates? Tempore consequuntur officia rem eos.
                  Tempora consequatur porro magni totam natus cupiditate
                  sapiente, harum veritatis aliquid, quam nisi repellat nobis
                  assumenda dolores, esse error nihil consectetur voluptatum
                  officiis! Accusamus doloribus temporibus iusto est eaque
                  praesentium necessitatibus iste quod animi ipsum, commodi,
                  distinctio deleniti eos dolore sunt quas, error optio nam?
                  Dolorem, eos placeat hic provident expedita porro sit?
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default User;
