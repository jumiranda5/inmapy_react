import React from 'react';
import PropTypes from 'prop-types';
import DefaultAvatar from '../../assets/default-avatar.jpg';

const Avatar = ({ avatar, avatarStyle }) => {

  let avatarImg;
  avatar === "" ?
  avatarImg = DefaultAvatar :
  avatarImg = avatar;

  return (
    <div className = {`avatar ${ avatarStyle }`}>
      <img
        className = 'image-fit-circle'
        src = { avatarImg }
        alt = "" />
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.any.isRequired,
  avatarStyle: PropTypes.string.isRequired
};

export default Avatar;
