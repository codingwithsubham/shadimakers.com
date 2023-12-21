import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ProfileSummry from './ProfileSummry';
import AdSummry from './AdSummry';
import SearchSummry from './SearchSummry';

const Home = () => {
  const { profile, loading } = useSelector((state) => state.auth);

  if (!profile && !loading) {
    return <Navigate to="/create-profile" />;
  }

  return (
    <div className="home insta-an">
      <div className="row">
        <div className="col s12 m6 l4">
          <ProfileSummry />
        </div>
        <div className="col s12 m6 l4">
          <AdSummry />
        </div>
        <div className="col s12 m6 l4">
          <SearchSummry />
        </div>
      </div>
    </div>
  );
};

export default Home;
