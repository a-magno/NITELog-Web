import type React from "react";
import NavBar from "@root/shared/Navbar";
import { useEffect, useState } from "react";
import "@styles/admin.css";

const Admin = () => {
  const TabOptions = {
    USERS: 0,
    MEETINGS: 1,
    PROJECTS: 2,
    SETTINGS: 3,
  } as const;

  type TabOptions = (typeof TabOptions)[keyof typeof TabOptions];

  const tabLabels: Record<TabOptions, string> = {
    [TabOptions.USERS]: "Usuários",
    [TabOptions.MEETINGS]: "Reuniões",
    [TabOptions.PROJECTS]: "Projetos",
    [TabOptions.SETTINGS]: "Configurações",
  };
  const tabTooltips: Record<TabOptions, string> = {
    [TabOptions.USERS]: "Listar Usuários",
    [TabOptions.MEETINGS]: "Listar Reuniões",
    [TabOptions.PROJECTS]: "Listar Projetos",
    [TabOptions.SETTINGS]: "Listar Configurações",
  };
  const tabPlaceholders: Record<TabOptions, string> = {
    [TabOptions.USERS]: "Buscar por Usuários",
    [TabOptions.MEETINGS]: "Buscar por Reuniões",
    [TabOptions.PROJECTS]: "Buscar por Projetos",
    [TabOptions.SETTINGS]: "Buscar por Configurações",
  };
  const [tabSelected, setTabSelected] = useState(0);

  useEffect(() => {}, [tabSelected]);

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
              placeholder={Object.entries(tabPlaceholders)[tabSelected][1]}
              className="searchInput"
            />
            <button className="searchButton">
              <span>Pesquisar</span>
            </button>
          </div>
          <div className="table-container">
            <ul className="tabs-container">
              {Object.entries(tabLabels).map(([key, label]) => (
                <li
                  key={key}
                  className={`tab-option ${
                    key === tabSelected.toString() ? "active" : ""
                  }`}
                  onClick={() => setTabSelected(Number.parseInt(key))}
                  title={Object.entries(tabTooltips)[Number.parseInt(key)][1]}
                >
                  <button>{label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
