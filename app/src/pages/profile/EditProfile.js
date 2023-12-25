import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/common/Form';
import { getEditData } from './options';
import { updateProfile } from '../../store/profile/profileEffects';

const EditProfile = () => {
  const dispatch = useDispatch()
  const { profile } = useSelector((state) => state.auth);
  const profileData = profile?.profData;
  const handleProfileData = (data) => {
    dispatch(updateProfile(data));
  };

  return (
    <div className="profile-editor">
      <Form data={getEditData(profileData?.info)} callBack={handleProfileData} />
    </div>
  );
};

export default EditProfile;
