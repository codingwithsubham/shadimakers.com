import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { userLogout } from '../../store/auth/authEffect';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, profile } = useSelector((state) => state.auth);
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    isAuthenticated && (
      <div className="navbar-fixed">
        <nav className="nav-extended my-nav">
          <div className="nav-wrapper mob-bttm-bar">
            <Link to="#" className="brand-logo">
              <div className="idfy app-logo">
                Shadi<b>makers.com</b>
              </div>
            </Link>
            <Link
              to="#"
              data-target="mobile-demo"
              className="sidenav-trigger"
              onClick={() => setOpenSideNav(!openSideNav)}
            >
              <i className="material-icons">menu</i>
            </Link>
            <Link
              to="/match-requests"
              data-target="mobile-demo"
              className="notifications sidenav-trigger"
            >
              <i className="material-icons">supervisor_account</i>
              {profile?.profData?.matchRequests?.length &&
                profile?.profData?.matchRequests?.length > 0 && (
                  <span className="count">
                    {profile?.profData?.matchRequests?.length}
                  </span>
                )}
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#" onClick={() => dispatch(userLogout())}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <NavLink to="/home">
                  <i className="material-icons">home</i>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/search">
                  <i className="material-icons">search</i>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/profile">
                  <i className="material-icons">person_outline</i>
                </NavLink>
              </li>
              <li className="tab">
                <NavLink to="/inbox">
                  <i className="material-icons">chat_bubble_outline</i>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {openSideNav && (
          <div
            className="side-nav-bg"
            onClick={() => setOpenSideNav(!openSideNav)}
          />
        )}
        <ul className={`sidenav${openSideNav ? ' open' : ''}`} id="mobile-demo">
          <li>
            <Link to="#" onClick={() => setOpenSideNav(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => setOpenSideNav(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => {
                dispatch(userLogout());
                setOpenSideNav(false);
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    )
  );
};

export default Navbar;
