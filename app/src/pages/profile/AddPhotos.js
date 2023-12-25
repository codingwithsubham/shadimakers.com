import React from 'react';
import { useDispatch } from 'react-redux';
import FileUploader from '../../components/common/FileUploader';
import { updatePhotos } from '../../store/profile/profileEffects';

const AddPhotos = () => {
  const dispatch = useDispatch();
  const handleImagesUrls = (data) => {
    dispatch(updatePhotos(data));
  };
  return (
    <div className="photos-upload">
      <div className="img-uploader">
        <h1>Upload Photos</h1>
        <p>This will let your profile more visible</p>
        <FileUploader callBack={handleImagesUrls} />
      </div>
    </div>
  );
};

export default AddPhotos;
