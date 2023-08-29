import React from 'react';
import { useUser } from './UserContext'; // Import the useUser hook

const Dashboard = () => {
  const { user } = useUser(); // Get user data from context

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
