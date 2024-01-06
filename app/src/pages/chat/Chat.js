import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getImage } from '../../utils/imagebuilder';

const Chat = ({socket}) => {
  const { profile } = useSelector((state) => state.auth);
  const location = useLocation();
  const [profileData] = useState(location?.state ? location?.state : null);
  const [text, setText] = useState('');

  useEffect(() => {
    socket?.on('receive_message', (data) => {
      alert(data.message);
    });
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket?.emit('send_message', {
      users: [profileData?.user, profile?.user],
      message: text,
      sentBy: profile?.user,
      timestamp: new Date().getTime(),
      read: false,
    });
  };

  return (
    <div className="chat-wrap">
      <div className="mesgs-area">
        <div className="chat-hdr prfle-info">
          <Link to="/inbox" style={{ color: '#fff' }}>
            <i className="material-icons">arrow_back</i>
          </Link>
          <img src={getImage(profileData?.profData)} alt={''} />
          <p>{profileData?.profData?.info?.name}</p>
        </div>
      </div>
      <div className="typing-area">
        <form className="chat-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn-chat-send" type="submit">
            <i className="material-icons">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
