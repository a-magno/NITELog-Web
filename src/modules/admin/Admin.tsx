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
            <input type="search" className="searchInput" />
            <button className="searchButton">
              <span>Pesquisar</span>
            </button>
          </div>
          <div className="table-container"></div>
        </div>
      </main>
    </>
  );
};

export default Admin;
