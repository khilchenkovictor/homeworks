import SideMenu from "./components/SideMenu";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import usersData from './data/users.json';
import "./styles/styles.scss";

function App() {

  const users = usersData.rows;

  return (
    <div className="app">
      <SideMenu />
      <main className="app__content">
        <UserList users={users}/>
      </main>
    </div>
  )
}

export default App;
