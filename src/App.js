import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import RegistrationPage from './RegistrationPage';
import ProfilePage from './ProfilePage';

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />

       </Routes>
    </div>
  );
}

export default App;
