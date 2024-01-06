import React from 'react';
import { useSelector } from 'react-redux';
import Profile from './Profile';

const MyProfile = () => {
  const { profile } = useSelector((state) => state.auth);
  const profileData = profile?.profData;

  return <Profile profileData={profileData} isSelf={true}/>;
};

export default MyProfile;
