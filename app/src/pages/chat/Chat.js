import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getImage } from '../../utils/imagebuilder';
import { useDispatch, useSelector } from 'react-redux';
import { getConversation } from '../../store/chat/chatEffects';

const Chat = ({ socket }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [conversation, setConversation] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    id &&
      user?._id &&
      dispatch(getConversation(user?._id, id)).then((d) => setConversation(d));
  }, [dispatch]);

  const [text, setText] = useState('');
  useEffect(() => {
    socket?.on('receive_message', (data) => {
      setConversation(data);
    });
  }, [socket]);

  const getProfile = () => {
    const profile = conversation?.profiles?.find((x) => x?.user === id);
    return profile;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket?.emit('send_message', {
      conversation_id: conversation?._id,
      message: text,
      from: user?._id,
      to: id,
    });
    setText('');
  };

  return (
    <div className="chat-wrap">
      <div className="mesgs-area">
        <div className="chat-hdr prfle-info">
          <Link to="/inbox" style={{ color: '#fff' }}>
            <i className="material-icons">arrow_back</i>
          </Link>
          <img src={getImage(getProfile()?.profData)} alt={''} />
          <div className="info">
            <h3>{getProfile()?.profData?.info?.name}</h3>
            <p>{getProfile()?.isOnline ? 'Online' : 'Offline'}</p>
          </div>
        </div>
        <div className="chat-body">
          {conversation?.messages?.map((itm, idx) => (
            <div className={`chat-row${
              itm?.from !== user?._id ? ' left' : ' right'
            }`} key={idx}>
              <div
                className={`chat-itm${
                  itm?.from !== user?._id ? ' left' : ' right'
                }`}
              >
                <p>{itm?.text}</p>
                <p className='date'>{new Date(itm?.created_at)?.toLocaleString('en-US')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="typing-area">
        <form className="chat-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message ..."
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
