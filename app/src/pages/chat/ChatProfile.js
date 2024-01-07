import React from 'react';
import { getImage } from '../../utils/imagebuilder';
import { Link } from 'react-router-dom';

const ChatProfile = ({ profile }) => {
  return !profile ? (
    <div className="prfl-crd-lst">
      <div className="chat-itms">
        <div className="dmy-img-flbk"></div>
        <div className="chat-itm-content">
          <p className="name">
            <div className="dmy-txt-flbk"></div>
          </p>
          <p>
            <div className="dmy-txt-flbk"></div>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <Link to={`/chat/${profile?.user}`}>
      <div className="chat-itms">
        <img src={getImage(profile?.profData)} alt={''} />
        <div className="chat-itm-content">
          <p className="name">{profile?.profData?.info?.name}</p>
          <p>
            {profile?.profData?.info?.city}, {profile?.profData?.info?.state}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ChatProfile;
