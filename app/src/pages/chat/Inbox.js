import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatProfile from './ChatProfile';
import { getChats } from '../../store/chat/chatEffects';

const Inbox = ({ socket }) => {
  const { user } = useSelector((state) => state.auth);
  const [chats, setChats] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    user?._id && dispatch(getChats(user?._id)).then((d) => setChats(d));
  }, [dispatch, user?._id]);

  const getProfile = (chat) => {
    const profile = chat?.profiles.find((x) => x?.user !== user?._id);
    return profile;
  };

  useEffect(() => {
    socket?.on('receive_message', () => {
      user?._id && dispatch(getChats(user?._id)).then((d) => setChats(d));
    });
  }, [socket]);

  return (
    <div className="chat-list-wrap">
      {chats?.map((itm, idx) => (
        <Fragment key={idx}>
          <ChatProfile
            profile={getProfile(itm)}
            unreadCount={itm?.unread}
            lastMsg={itm?.messages[itm?.messages?.length - 1]}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Inbox;
