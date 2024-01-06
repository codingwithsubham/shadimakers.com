import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AUTH_TOKEN } from '../common/appConstants';
import Loader from '../components/layout/Loader';
import { socket } from '../utils/connectSocket';

const PrivateRoute = ({ component: RouteComponent }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const token = localStorage.getItem(AUTH_TOKEN);

  return (
    <div className='app-content'>
      {!isAuthenticated && !token ? (
        <Navigate to='/' />
      ) : token && loading && !isAuthenticated ? (
        <Loader />
      ) : (
        isAuthenticated && !loading && <RouteComponent socket={socket}/>
      )}
    </div>
  );
};

export default PrivateRoute;
