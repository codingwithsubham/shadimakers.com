import React from 'react';
import { getImage } from '../../utils/imagebuilder';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  const profData = profile?.profData;
  return (
    <Link
      className="profile-card"
      to={`/profile/${profile?.user}`}
      state={profData}
    >
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="card-image">
              <img src={getImage(profData)} alt={''} />
              <div className="content">
                <span className="card-title">
                  {profData?.info?.name}
                  <i className="material-icons">check_circle</i>
                </span>
                <p className="card-desc">
                  {profData?.info?.age}yrs, {profData?.info?.body}cm{' '}
                  <span className="blt" />
                  {profData?.info?.religion} <span className="blt" />
                  {profData?.info?.cast} <br />
                  {profData?.info?.city}, {profData?.info?.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
