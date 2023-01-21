import LoginPage from './components/LoginPage';
import './App.scss';
import './AppSetup.css';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import NotesContainer from './components/NotesContainer';

function App() {
  console.log('App has rendered.');

  return (
    <>
      <LoginPage />

    {/* define paths */}
    <Routes>
      <Route path="/" element={ <NotesContainer />}/>
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
    </>
  );

}

export default App;
