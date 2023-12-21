import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUCCESS } from '../../common/appConstants';
import { removeAlert } from '../../store/alert/alertSlice';

const Alert = () => {
  const { alerts } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  return (
    <div className="alert">
      {alerts?.map((itm) => (
        <div id={itm?.id} className="toast active" key={itm?.id}>
          <div className="toast-content">
            <i className="fas fa-solid fa-check x"></i>
            <i
              className={`material-icons ${
                itm?.alertType === SUCCESS ? 'check' : 'cross'
              }`}
            >
              {itm?.alertType === SUCCESS ? 'check' : 'clear'}
            </i>
            <div className="message">
              <span className="text text-1">{itm?.alertType}</span>
              <span className="text text-2">{itm?.msg}</span>
            </div>
          </div>
          <i className="material-icons close" onClick={() => dispatch(removeAlert(itm?.id))}>clear</i>
          <div className="c-progress active"></div>
        </div>
      ))}
    </div>
  );
};

export default Alert;
