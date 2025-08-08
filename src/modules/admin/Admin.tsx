import NavBar from "@root/shared/Navbar";
import "@styles/admin.css";

const Admin = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main id="admin">
        <div className="searchbar">
          <i className="searchIcon">Q</i>
          <input type="search" name="searchInput" id="searchInput" />
        </div>
        <div className="table-container"></div>
      </main>
    </>
  );
};

export default Admin;
