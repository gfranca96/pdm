import { useState, useEffect } from 'react';
import Splash from './components/screens/Splash';
import Login from './components/screens/Login';
import Home from './components/screens/Home';

const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 1000);
  }, []);

  return exibeSplash ? <Splash /> : <Home />;
};

export default App;
