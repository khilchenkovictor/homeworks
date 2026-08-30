import { useState } from 'react';
import Page from './components/Page';
import { UserContext } from './context/UserContext';


function App() {

  const userData = {
    name: 'Vasiliy',
    id: '12345',
    city: 'Odesa',
    status: 'online'
  };

  const [user, setUser] = useState(userData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Page />
    </UserContext.Provider>
  );
}

export default App
