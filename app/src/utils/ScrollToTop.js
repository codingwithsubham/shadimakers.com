import { useEffect } from 'react';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

const ScrollToTop = ({
  children,
  router: {
    location: { pathname },
  },
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children || null;
};

export default withRouter(ScrollToTop);
