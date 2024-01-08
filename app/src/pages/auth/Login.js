import React from 'react';
import Form from '../../components/common/Form';
import { Link, Navigate } from 'react-router-dom';
import { loginFormData } from './options';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/auth/authEffect';
import Loader from '../../components/layout/Loader';
import { connectSocket } from '../../utils/connectSocket';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const callBack = (respo) => {
    dispatch(userLogin(respo));
  };

  if (isAuthenticated) {
    connectSocket();
    return <Navigate to="/inbox" />;
  }

  return (
    <div className="login-wrap">
      <div className="idfy drk">
        Shadi<b>makers.com</b>
      </div>
      <div className="form-holder insta-an">
        <div className="frm-hdr">
          <h1>Welcome Back</h1>
          <p>Login to your Account</p>
        </div>
        
        <div className="frm-body">
          {!loading ? (
            <Form data={loginFormData} callBack={callBack} />
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

export default Login;
