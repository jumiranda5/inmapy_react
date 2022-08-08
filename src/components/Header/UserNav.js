import React from 'react';
import PropTypes from 'prop-types';
import UserLink from '../Links/UserLink';
import IconLink from '../Links/IconLink';
import { FormattedMessage as Msg } from "react-intl";
import { icSearch, icSettings } from '../../assets/icons';

const UserNav = ({ username, avatar }) => {
  return (
    <nav className="nav-user">
      <ul className="flex-row">
        <li>
          <UserLink
            username = { username }
            avatar = { avatar }
            avatarStyle = "header_avatar"
            linkStyle = "header_user_link"/>
        </li>
        <li>
          <IconLink
            to="/search"
            text = { <Msg id="search"/> }
            linkStyle = 'header_icon_link'
            path = { icSearch }
            icStyle = 'header_icon'
            isTextVisible = { false } />
        </li>
        <li>
          <IconLink
            to="/settings"
            text = { <Msg id="settings"/> }
            linkStyle = 'header_icon_link'
            path = { icSettings }
            icStyle = 'header_icon'
            isTextVisible = { false } />
        </li>
      </ul>
    </nav>
  );
};

UserNav.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default UserNav;
