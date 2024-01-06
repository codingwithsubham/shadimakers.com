import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfileByUser } from '../../store/profile/profileEffects';
import { getImage } from '../../utils/imagebuilder';
import { Link } from 'react-router-dom';

const ProfileListCard = ({ id }) => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    dispatch(fetchProfileByUser(id)).then((d) => setProfile(d));
  }, [dispatch, id]);

  return !profile ? (
    <div className="prfl-crd-lst">
      <div className="card horizontal">
        <div className="card-image">
          <div className="dmy-img-flbk"></div>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p className="name">
              <div className="dmy-txt-flbk"></div>
            </p>
            <p>
              <div className="dmy-txt-flbk"></div>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Link
      to={`/profile/${id}`}
      state={profile?.profData}
      className="prfl-crd-lst"
    >
      <div className="card horizontal">
        <div className="card-image">
          <img src={getImage(profile?.profData)} alt={''} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p className="name">
              {profile?.profData?.info?.name}
              <i className="material-icons">check_circle</i>
            </p>
            <p>
              {profile?.profData?.info?.city}, {profile?.profData?.info?.state}
            </p>
            <p className="infos">
              <span
                className="new badge blue"
                data-badge-caption={profile?.profData?.info?.cast}
              ></span>
              <span
                className="new badge red"
                data-badge-caption={profile?.profData?.info?.religion}
              ></span>
              <span
                className="new badge green"
                data-badge-caption={profile?.profData?.info?.work}
              ></span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileListCard;
