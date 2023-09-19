import { useState, useEffect } from 'react';
import Splash from './components/screens/Splash';
import Login from './components/screens/Login';
import Home from './components/screens/Home';

const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 1000);
  }, []);

  return exibeSplash ? (
    <Splash />
  ) : logado ? (
    <Home onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
};

export default App;
