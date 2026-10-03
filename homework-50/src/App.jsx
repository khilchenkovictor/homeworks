import { useState, useMemo } from "react";
import SideMenu from "./components/SideMenu";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import usersData from './data/users.json';
import "./styles/styles.scss";
import FilterPanel from "./components/FilterPanel";

function App() {

  const [users, setUsers] = useState(usersData.rows);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [photoFilter, setPhotoFilter] = useState('all');
  const [lastNameFilter, setLastNameFilter] = useState('all');

  const itemsPerPage = 100;

  const filteredUsers = useMemo(() => {
    return users.filter(([id, username, firstName, lastName, photo, status]) => {
      const query = search.toLowerCase();

      const matchesSearch = (
        firstName?.toLowerCase().includes(query) ||
        username?.toLowerCase().includes(query) ||
        status?.toLowerCase().includes(query) ||
        lastName?.toLowerCase().includes(query) ||
        String(id)?.includes(query)
      );

      const matchesStatus = statusFilter === 'all' || status === statusFilter;
      const matchesPhoto = photoFilter === 'all' || (photoFilter === 'yes' ? photo === '1' : photo === '-');
      const matchesLastName = lastNameFilter === 'all' || (lastNameFilter === 'yes' ? lastName : !lastName);

      return matchesSearch && matchesStatus && matchesPhoto && matchesLastName;
    });
  }, [users, search, statusFilter, photoFilter, lastNameFilter]);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user[0] !== userId));
  };

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="app">
      <SideMenu />
      <main className="app__content">
        <UserList
          users={paginatedUsers}
          onDeleteUser={handleDeleteUser}
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          photoFilter={photoFilter}
          setPhotoFilter={setPhotoFilter}
          lastNameFilter={lastNameFilter}
          setLastNameFilter={setLastNameFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </main>
    </div>
  )
}

export default App;
