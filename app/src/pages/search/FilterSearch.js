import React, { useState } from 'react';

const FilterSearch = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fltr">
      <div className="fltr-head" onClick={() => setShow(!show)}>
        <div className="row">
          <i className="material-icons">filter_list</i>
          <h4>Filter</h4>
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
      </div>
      {show && <div className="fltr-body insta-an-d">Awesome Content</div>}
    </div>
  );
};

export default FilterSearch;
