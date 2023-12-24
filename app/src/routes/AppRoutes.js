import React, { Fragment, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/home/Home';
import CreateProfile from '../pages/profile/CreateProfile';
import SearchIndex from '../pages/search/SearchIndex';
import { getPathBasedOnSwipe } from '../utils/locationBuilder';

const AppRoutes = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      const path = getPathBasedOnSwipe(isLeftSwipe, location?.pathname);
      return navigate(path);
    }
  };
  return (
    <div
      className="screen"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<PrivateRoute component={Home} />} />
        <Route
          exact
          path="/create-profile"
          element={<PrivateRoute component={CreateProfile} />}
        />
        <Route
          exact
          path="/search"
          element={<PrivateRoute component={SearchIndex} />}
        />
        <Route path="*" element={<Fragment />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
