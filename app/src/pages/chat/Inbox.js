import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ChatProfile from './ChatProfile';

const Inbox = () => {
  const { profile } = useSelector((state) => state.auth);

  return (
    <div className="chat-list-wrap">
      {profile?.profData?.matches?.map((itm, idx) => (
        <Fragment key={idx}>
          <ChatProfile id={itm} />
        </Fragment>
      ))}
    </div>
  );
};

export default Inbox;
