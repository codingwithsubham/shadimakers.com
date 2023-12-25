import React, { useState } from 'react';

const Form = ({ data, callBack }) => {
  const [formData, setFormData] = useState([...data?.inputs]);

  const handleChange = (e, idx) => {
    let inputs = [...formData];
    inputs[idx].value = e.target.value;
    setFormData(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    formData.map((itm) => (data[itm?.name] = itm?.value));
    const entries = Object.keys(data).filter((x) => data[x] === '')?.length;
    if (entries <= 0) {
      callBack(data);
    }
  };

  return (
    <form className="form basic" onSubmit={(e) => handleSubmit(e)}>
      {formData?.map((itm, idx) =>
        itm?.type === 'formBreak' ? (
          <div className="form-break" key={idx}>
            <div className="counter-frm-brk">{itm?.counter}</div>
            <div className="text-frm-brk">{itm?.text}</div>
          </div>
        ) : itm?.type === 'radio' ? (
          <div
            className="radio"
            key={idx}
            name={itm?.name}
            onChange={(e) => handleChange(e, idx)}
          >
            <label className="fl-wd">{itm?.label}</label>
            {itm?.options?.map((item) => (
              <label className="col s6" key={item}>
                <input
                  className="with-gap"
                  name={item}
                  type="radio"
                  value={item}
                  checked={itm?.value === item}
                  readOnly={true}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        ) : itm?.type === 'select' ? (
          <div className="input-field col s6 select-box"  key={idx}>
            <i className="material-icons prefix">{itm?.icon}</i>
            <select
              onChange={(e) => handleChange(e, idx)}
              name={itm?.name}
              value={itm?.value ? itm?.value : itm?.options[0]}
            >
              <option value={itm?.options[0]} disabled>
              {itm?.options[0]}
              </option>
              {itm?.options?.filter((_, i) => i > 0)?.map((item) => (
                <option value={item} key={item}>{item}</option>
              ))}
            </select>
          </div>
        ) : itm?.type === 'textarea' ? (
          <div className="input-field col s6" key={idx}>
            <i className="material-icons prefix">{itm?.icon}</i>
            <textarea
              id={itm?.name}
              value={itm?.value}
              type={itm?.type}
              className="materialize-textarea"
              name={itm?.name}
              autoComplete={itm?.type === 'password' ? 'current-password' : ''}
              onChange={(e) => handleChange(e, idx)}
            />
            <label htmlFor={itm?.name} className={itm?.value !== '' ? 'active' : ''}>{itm?.label}</label>
          </div>
        ) : (
          <div className="input-field col s6" key={idx}>
            <i className="material-icons prefix">{itm?.icon}</i>
            <input
              id={itm?.name}
              value={itm?.value}
              type={itm?.type}
              className="validate"
              name={itm?.name}
              autoComplete={itm?.type === 'password' ? 'current-password' : ''}
              onChange={(e) => handleChange(e, idx)}
            />
            <label htmlFor={itm?.name} className={itm?.value !== '' ? 'active' : ''}>{itm?.label}</label>
          </div>
        )
      )}
      <button type="submit" className="waves-effect waves-light btn-large btn">
       {data?.btnText}
      </button>
    </form>
  );
};

export default Form;
