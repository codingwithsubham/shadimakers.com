import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/home/Home';
import CreateProfile from '../pages/profile/CreateProfile';
import SearchIndex from '../pages/search/SearchIndex';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/home" element={<PrivateRoute component={Home} />} />
      <Route exact path="/create-profile" element={<PrivateRoute component={CreateProfile} />} />
      <Route exact path="/search" element={<PrivateRoute component={SearchIndex} />} />
      <Route path="*" element={<Fragment />} />
    </Routes>
  );
};

export default AppRoutes;
