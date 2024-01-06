import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ProfileListCard from '../profile/ProfileListCard';
import { Link } from 'react-router-dom';

const MatchRequests = () => {
  const { profile } = useSelector((state) => state.auth);
  return (
    <div className="match-requests-wrap">
      <div className="form-break">
        <div className="text-frm-brk">Match Requests</div>
      </div>

      {!profile?.profData?.matchRequests ||
      profile?.profData?.matchRequests?.length <= 0 ? (
        <div className="no-match-flbk">
          <p>There are no new match requests.</p>
          <Link to="/search">
            <span className="new badge blue" data-badge-caption="">
              Start Matching
            </span>
          </Link>
        </div>
      ) : (
        profile?.profData?.matchRequests?.map((itm, idx) => (
          <Fragment key={idx}>
            <ProfileListCard id={itm} />
          </Fragment>
        ))
      )}

      <div className="form-break">
        <div className="text-frm-brk">Your Matches</div>
      </div>
      {!profile?.profData?.matches ||
      profile?.profData?.matches?.length <= 0 ? (
        <div className="no-match-flbk">
          <p>There are no matches for you.</p>
          <Link to="/search">
            <span className="new badge blue" data-badge-caption="">
              Start Matching
            </span>
          </Link>
        </div>
      ) : (
        profile?.profData?.matches?.map((itm, idx) => (
          <Fragment key={idx}>
            <ProfileListCard id={itm} />
          </Fragment>
        ))
      )}
    </div>
  );
};

export default MatchRequests;
