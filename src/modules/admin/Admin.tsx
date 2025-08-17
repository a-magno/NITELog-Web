import type React from "react";
import NavBar from "@root/shared/Navbar";
import { useEffect, useState } from "react";
import "@styles/admin.css";
import { getMeetings, getUsers } from "@root/services/api";
import { type Meeting, type User } from "@root/services/interfaces";

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

  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("token") || "";

    async function fetchMeetings() {
      const response = await getMeetings(token);

      if (response?.meetings_list) {
        setMeetings(response.meetings_list);
      } else {
        setMeetings([]);
        setError(response?.status);
      }

      console.log(error);
    }

    async function fetchUsers() {
      const response = await getUsers(token);

      if (response?.users_list) {
        setUsers(response.users_list);
      } else {
        setUsers([]);
        setError(response?.status);
      }
    }

    fetchUsers();
    fetchMeetings();
  }, [tabSelected]);

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
                  <button disabled={Number(key) > 1}>{label}</button>
                </li>
              ))}
            </ul>
            {tabSelected === 0 && (
              <ul>
                {users.length === 0 && <li>Nenhum Usuário Encontrado</li>}
                {users.map((user) => (
                  <li>
                    <strong>{user.id}</strong> | {user.name} | {user.email}
                  </li>
                ))}
              </ul>
            )}

            {tabSelected === 1 && (
              <ul>
                {meetings.length === 0 && <li>Nenhuma Reunião Encontrada</li>}
                {meetings.map((meetings) => (
                  <li>
                    <strong>{meetings.id}</strong> - {meetings.date}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
