import { useState, useMemo, useCallback } from "react";
import SideMenu from "./components/SideMenu";
import UserList from "./components/UserList";
import usersData from './data/users.json';
import "./styles/styles.scss";

const checkSearchMatch = (user, query) => {
  const [id, username, firstName, lastName, photo, status] = user;

  return (
    firstName?.toLowerCase().includes(query) ||
    username?.toLowerCase().includes(query) ||
    status?.toLowerCase().includes(query) ||
    lastName?.toLowerCase().includes(query) ||
    String(id)?.includes(query)
  );
};

const checkStatusMatch = (status, filter) => {
  if (filter === 'all') return true;
  return status === filter;
};

const checkPhotoMatch = (photo, filter) => {
  if (filter === 'all') return true;
  if (filter === 'yes') return photo === 1;
  if (filter === 'no') return photo === 0;
  return true;
};

const checkLastNameMatch = (lastName, filter) => {
  if (filter === 'all') return true;
  if (filter === 'yes') return Boolean(lastName);
  if (filter === 'no') return !lastName;
  return true;
};

function App() {

  const [users, setUsers] = useState(usersData.rows);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [photoFilter, setPhotoFilter] = useState('all');
  const [lastNameFilter, setLastNameFilter] = useState('all');

  const itemsPerPage = 100;

  const filteredUsers = useMemo(() => {
    const query = search.toLowerCase();

    return users.filter((user) => {
      const matchesSearch = checkSearchMatch(user, query);
      const [id, username, firstName, lastName, photo, status] = user;

      const matchesStatus = checkStatusMatch(status, statusFilter);
      const matchesPhoto = checkPhotoMatch(photo, photoFilter);
      const matchesLastName = checkLastNameMatch(lastName, lastNameFilter);

      return matchesSearch && matchesStatus && matchesPhoto && matchesLastName;
    });
  }, [users, search, statusFilter, photoFilter, lastNameFilter]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDeleteUser = useCallback((userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user[0] !== userId));
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleStatusFilterChange = useCallback((value) => {
    setStatusFilter(value);
  }, []);

  const handlePhotoFilterChange = useCallback((value) => {
    setPhotoFilter(value);
  }, []);

  const handleLastNameFilterChange = useCallback((value) => {
    setLastNameFilter(value);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="app">
      <SideMenu />
      <main className="app__content">
        <UserList
          users={paginatedUsers}
          onDeleteUser={handleDeleteUser}
          search={search}
          onSearchChange={handleSearchChange}
          statusFilter={statusFilter}
          setStatusFilter={handleStatusFilterChange}
          photoFilter={photoFilter}
          setPhotoFilter={handlePhotoFilterChange}
          lastNameFilter={lastNameFilter}
          setLastNameFilter={handleLastNameFilterChange}
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          totalPages={totalPages}
        />
      </main>
    </div>
  );
}

export default App;
