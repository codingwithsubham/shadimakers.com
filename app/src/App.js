import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './utils/ScrollToTop';
import Alert from './components/layout/Alert';
import { loadUser } from './store/auth/authEffect';
import Navbar from './components/layout/Navbar';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <div className="App insta-an">
            <div className="main-content">
              <ScrollToTop />
              <Alert />
              <Navbar />
              <AppRoutes />
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
