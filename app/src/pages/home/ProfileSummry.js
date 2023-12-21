import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileSummry = () => {
  const {
    profile: { profData },
  } = useSelector((state) => state.auth);
  return (
    <div className="prfle-smry">
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card green darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  Hi <b>{profData?.info?.name.split(' ')[0]},</b>
                </span>
                <p>
                  Welcome to the Shadi<b>makers.com</b>, a perfect place for
                  your match making. You can upgrade your plan get more visibility.
                </p>
              </div>
              <div className="card-action">
                <Link to="/upgrade">Upgrade Plan</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummry;
