import { useState } from 'react';
import Login from './components/screens/Login';
import Home from './components/screens/Home';

const App = () => {
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  return (
    <>
      {logado ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
