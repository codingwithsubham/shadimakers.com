import React, { useState } from 'react';
import { profileFormData } from './options';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/common/Form';
import Loader from '../../components/layout/Loader';
import FileUploader from '../../components/common/FileUploader';
import { buildProfile } from '../../store/profile/profileEffects';
import { Navigate } from 'react-router-dom';

const CreateProfile = () => {
  const dispatch = useDispatch();
  const { loading, profile } = useSelector((state) => state.auth);
  const [profileData, setprofiledata] = useState({
    info: null,
    imgs: null,
  });
  const { info, imgs } = profileData;

  const handleProfileData = (data) => {
    setprofiledata({ ...profileData, info: data });
  };

  const handleImagesUrls = (urls) => {
    setprofiledata({ ...profileData, imgs: urls });
  };

  const handleCreate = () => {
    dispatch(buildProfile(profileData));
  };

  if (!loading && profile) {
    return <Navigate to="/search" />;
  }

  return (
    <div className="create-profile fullscreen">
      <div className="login-wrap profile-wrap">
        <div className="idfy drk">
          Shadi<b>makers.com</b>
        </div>
        {imgs ? (
          <div className="creat-prfl">
            <h1>All set !</h1>
            <p>Let's Create Your Profile</p>
            <button
              className="waves-effect waves-light btn-large btn"
              onClick={() => handleCreate()}
            >
              Create Profile
            </button>
          </div>
        ) : !info ? (
          <div className="form-holder insta-an">
            <div className="frm-hdr">
              <h1>Let's Start</h1>
              <p>Let us know more about you</p>
            </div>
            <div className="frm-body">
              {!loading ? (
                <Form data={profileFormData} callBack={handleProfileData} />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        ) : (
          <div className="img-uploader">
            <h1>Upload Images</h1>
            <p>This will let your profile more visible</p>
            <FileUploader callBack={handleImagesUrls} />
          </div>
        )}
      </div>
      <div className="bg-effct-round-half" />
    </div>
  );
};

export default CreateProfile;
