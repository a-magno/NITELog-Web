import NavBar from "@root/shared/Navbar";
import "@styles/admin.css";

const Admin = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main id="admin">
        <div>
          <div className="searchbar">
            <button className="searchButton">
              <i className="searchIcon">Q</i>
            </button>
            <input
              type="search"
              placeholder="Buscar por usuários"
              className="searchInput"
            />
            <button className="searchButton">
              <span>Pesquisar</span>
            </button>
          </div>
          <div className="table-container">
            <ul className="tabs-container">
              <li className="tab-option active">Usuários</li>
              <li className="tab-option">Reuniões</li>
              <li className="tab-option">Projetos</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
