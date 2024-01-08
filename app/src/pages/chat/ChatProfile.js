import React from 'react';
import { getImage } from '../../utils/imagebuilder';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChatProfile = ({ profile, unreadCount, lastMsg }) => {
  const { user } = useSelector((state) => state.auth);

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
          <p className="name">
            {profile?.profData?.info?.name}{' '}
            {profile?.isOnline ? (
              <span className="online" />
            ) : (
              <span className="offline" />
            )}
          </p>
          <p
            className={`${
              unreadCount > 0 && lastMsg?.from !== user?._id && 'bold'
            }`}
          >
            {lastMsg?.text}
          </p>
        </div>
        {unreadCount > 0 && lastMsg?.from !== user?._id && (
          <span className="new badge blue" data-badge-caption="">
            {unreadCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ChatProfile;
