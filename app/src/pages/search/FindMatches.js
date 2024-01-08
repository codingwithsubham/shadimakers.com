import React, { useEffect, useState } from 'react';
import { fetchProfiles } from '../../store/profile/profileEffects';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from '../profile/ProfileCard';
import Loader from '../../components/layout/Loader';
import { getFilter } from '../../utils/filterBuilder';

const FindMatches = () => {
  const dispatch = useDispatch();
  const { profLoading, profiles } = useSelector((state) => state.profile);
  const [query, setQuery] = useState(getFilter(''));

  useEffect(() => {
    dispatch(fetchProfiles(query));
  }, [dispatch, query]);

  return (
    <div className="match-wrap">
      {profLoading ? (
        <Loader />
      ) : (
        profiles?.map((itm, idx) => <ProfileCard profile={itm} key={idx} />)
      )}
    </div>
  );
};

export default FindMatches;
