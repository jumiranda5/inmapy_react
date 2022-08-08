import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';

const IconLink = props => {

  const {
    to,
    isTextVisible,
    text,
    path,
    icStyle,
    linkStyle,
    isNav } = props;

  if (isNav) {
    return (
      <NavLink
        exact={ to === '/' ? true : false }
        activeClassName='side_nav_link_active'
        to={ to }
        className={`flex-center-row ${ linkStyle }`}>

        <Icon path = { path } icStyle={ icStyle }/>
        <p className = { isTextVisible ? 'ellipsize': 'visually-hidden' }>
          { text }
        </p>

      </NavLink>
    );
  }
  else {
    return (
      <Link to = { to } className={`flex-center-row ${ linkStyle }`}>
        <Icon path = { path } icStyle={ icStyle }/>
        <p className = { isTextVisible ? '': 'visually-hidden' }>{ text }</p>
      </Link>
    );
  }


};

IconLink.propTypes = {
  to: PropTypes.string.isRequired,
  isTextVisible: PropTypes.bool,
  text: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  icStyle: PropTypes.string.isRequired,
  linkStyle: PropTypes.string,
  isNav: PropTypes.bool
};

export default IconLink;
