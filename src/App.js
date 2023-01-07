import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { useState } from 'react';
import './App.css';
import './AppSetup.css';

function App() {
  console.log('App has rendered.');

  const [login, setLogin] = useState(false);

  const handleClick = () => {
    setLogin(!login);
  }


  return (
    <>
      <button onClick={handleClick}>{
        login
        ? 'Log out'
        : 'Log in'
      }</button>

      {
        login
        ? <HomePage />
        : <LoginPage />
      }
    </>
  );
}

export default App;
