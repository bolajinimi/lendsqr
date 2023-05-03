import Login from './component/Login';
import UserPage from './component/UserPage';
import UserDetails from './component/UserDetails';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './style/style.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/" element={<Login />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/user-page/:userId" element={<UserPage />}>
        </Route>
        <Route path="/details" element={<UserDetails />}>
        </Route>
        </Routes>
      </Router>
   
      
    </div>
  );
}

export default App;
