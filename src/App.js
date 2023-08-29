import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import HomePage from './Components/Home';
import SignupForm from './Components/Signup';
import LoginForm from './Components/Login';
import Dashboard from './Components/Dashboard';
import { UserContext } from './Components/UserContext';

const App = () => {
  const [user, setUser] = useState(null); // Initialize user state

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
