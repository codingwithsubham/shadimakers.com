import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../../store/fileupload/fileUpload';
import { Link } from 'react-router-dom';

const FileUploader = ({ callBack }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [imgSrc, setImgSrc] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleChange = (e) => {
    setImages([...e.target.files]);
  };

  const getImages = async (images) => {
    let imgs = [];
    for (let itm of images) {
      const data = await getBase64(itm);
      imgs.push(data);
    }
    setImgSrc(imgs);
  };

  useEffect(() => {
    getImages(images);
  }, [images]);

  const clearImage = (idx) => {
    setImages(images?.filter((_, i) => i !== idx));
    setImgSrc(imgSrc?.filter((_, i) => i !== idx));
  };

  const handleUpload = () => {
    const myImgs = [...images];
    let respoUrl = [];
    const progressToAdd = 100 / images?.length;
    setSubmitted(true);
    setProgress(progress + progressToAdd);

    for (const itm of myImgs) {
      dispatch(uploadFile(itm)).then((data) => {
        respoUrl.push(data);
        if (respoUrl?.length >= myImgs?.length) {
          callBack(respoUrl);
        }   
      });
    }
  };

  return isSubmitted ? (
    <div className="upload-progress">
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  ) : (
    <div className="upld-wrap">
      {imgSrc?.length > 0 && (
        <button
          className="waves-effect waves-light btn-large btn"
          onClick={() => handleUpload()}
        >
          <i className="material-icons left">cloud_upload</i>Upload Now
        </button>
      )}
      {imgSrc?.length <= 0 && (
        <div className="Neon Neon-theme-dragdropbox">
          <input
            style={{
              zIndex: 999,
              opacity: 0,
              width: '320px',
              height: '200px',
              position: 'absolute',
              right: '0px',
              left: '0px',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
            name="files[]"
            id="filer_input2"
            multiple="multiple"
            type="file"
            onChange={(e) => handleChange(e)}
          />
          <div className="Neon-input-dragDrop">
            <div className="Neon-input-inner">
              <div className="Neon-input-icon">
                <i className="fa fa-file-image-o"></i>
              </div>
              <div className="Neon-input-text">
                <h3>Drag &amp; Drop Images here</h3>{' '}
                <span style={{ display: 'inline-block', margin: '15px 0' }}>
                  or
                </span>
              </div>
              <Link to="#" className="Neon-input-choose-btn blue">
                Choose images
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="selected-photos">
        {imgSrc?.map((itm, idx) => (
          <div className="img-holder" key={idx}>
            <i className="material-icons" onClick={() => clearImage(idx)}>
              clear
            </i>
            <img src={itm} alt={idx} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
