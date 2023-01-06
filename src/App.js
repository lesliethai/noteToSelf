import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { useState } from 'react';
import './App.css';
import './AppSetup.css';

function App() {
  console.log('App has rendered.');

  return (
    <>
    <LoginPage />
    </>
  );
}

export default App;
