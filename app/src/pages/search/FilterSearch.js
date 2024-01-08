import React, { useState } from 'react';

const FilterSearch = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
  };

  return (
    <div className="fltr">
      <div className="fltr-head" onClick={() => setShow(!show)}>
        <div className="row">
          <i className="material-icons">filter_list</i>
          <h4>Filter</h4>
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
      </div>
      {show && (
        <div className="fltr-body insta-an-d">
          <div className="search">
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
      )}
    </div>
  );
};

export default FilterSearch;
