import React from 'react';
import Form from '../../components/common/Form';
import { Link, Navigate } from 'react-router-dom';
import { registerFormData } from './options';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistration } from '../../store/auth/authEffect';
import Loader from '../../components/layout/Loader';
import { connectSocket } from '../../utils/connectSocket';

const Register = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  
  const callBack = (data) => {
    let respo = data;
    if (respo?.pwd === respo['c-pwd']) {
      delete respo['c-pwd'];
      dispatch(userRegistration(respo));
    }
  };

  if (isAuthenticated) {
    connectSocket();
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-wrap">
      <div className="idfy drk">
        Shadi<b>makers.com</b>
      </div>
      <div className="form-holder insta-an">
        <div className="frm-hdr">
          <h1>Let's a Fresh Start</h1>
          <p>This can a start of Good Vibes</p>
        </div>
        <div className="frm-body">
          {!loading ? (
            <Form data={registerFormData} callBack={callBack} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div className="lgin-foot">
        <div className="txt-w-btn">
          Want to go back ?{' '}
          <Link className="btn-outlined" to="/">
            Back
          </Link>
        </div>
      </div>
      <div className="bg-effct-round-half" />
    </div>
  );
};

export default Register;
