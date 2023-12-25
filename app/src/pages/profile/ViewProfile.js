import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Profile from './Profile';

const ViewProfile = () => {
  const location = useLocation();
  const [profileData] = useState(location?.state ? location?.state : null);

  return <Profile profileData={profileData}  isSelf={false}/>;
};

export default ViewProfile;
