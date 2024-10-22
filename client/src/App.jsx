import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import UserDashboard from './components/UserDashboard';
import DriverDashboard from './components/DriverDashboard';
import Booking from './components/Bookings';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className=" min-w-full bg-zinc-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/customer-dashboard"
            element={
              <>
                <Navbar />
                <UserDashboard />
              </>
            }
          />
          <Route
            path="/driver-dashboard"
            element={
              <>
                <Navbar />
                <DriverDashboard />
              </>
            }
          />
          <Route
            path="/booking"
            element={
              <>
                <Navbar />
                <Booking />
              </>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;