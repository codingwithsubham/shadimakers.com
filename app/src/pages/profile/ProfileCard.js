import React from 'react';
import { getImage } from '../../utils/imagebuilder';

const Profile = ({ profile: { profData } }) => {
  console.log(profData);
  return (
    <div className="profile-card">
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="card-image">
              <img src={getImage(profData?.imgs[0]?.id)} alt={''} />
              <div className="content">
                <span className="card-title">{profData?.info?.name}
                <i className="material-icons">check_circle</i>
                </span>
                <p className="card-desc">
                  {profData?.info?.age}yrs, {profData?.info?.body}cm{' '}
                  <span className="blt" />
                  {profData?.info?.religion} <span className="blt" />
                  {profData?.info?.cast} <br/>
                  {profData?.info?.city}, {profData?.info?.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
