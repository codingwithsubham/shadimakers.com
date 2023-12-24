import React from 'react';
import { getImage } from '../../utils/imagebuilder';

const Profile = ({ profile: { profData } }) => {
  return (
    <div className="profile-card">
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="card-image">
              <img src={getImage(profData)} alt={''} />
              <div className="content">
                <span className="card-title">{profData?.info?.name}
                <i className="material-icons">check_circle</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
