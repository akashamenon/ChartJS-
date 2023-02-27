import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import LineChart from './LineChart';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<LineChart />} />
       </Routes>
    </div>
  );
}

export default App;
