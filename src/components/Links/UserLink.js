import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

const UserLink = props => {

  const { linkStyle, avatarStyle, username, avatar } = props;

  return (
    <Link to={`/${username}`} className={`${ linkStyle } flex-center-row`}>
      <Avatar
        avatar={ avatar }
        avatarStyle={ avatarStyle }/>
      <p className="ellipsize">{ username }</p>
    </Link>
  );
};

UserLink.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatarStyle: PropTypes.string.isRequired,
  linkStyle: PropTypes.string.isRequired
};

export default UserLink;
