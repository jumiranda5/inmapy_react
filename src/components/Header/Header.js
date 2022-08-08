import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { nav_locale } from '../../utils/nav_location';
import { messages } from '../../utils/i18n';
// Components
import VisitorNav from './VisitorNav';
import UserNav from './UserNav';
// assets
import Logo from '../../assets/logo-light.svg';

const locale = nav_locale();
let logo_alt;
if (locale === "pt") logo_alt = messages.pt.logoAlt
else logo_alt = messages.en.logoAlt;

const Header = ({sessionId, username, avatar}) => {

  return (

    <header id="header" className="header flex-center-row">

      <div className="flex-row header_container">

        <Link to='/'>
          <img className="header_logo" src={ Logo } alt={ logo_alt }/>
        </Link>

        {
          sessionId === "visitor"
          ?
          <VisitorNav/>
          :
          <UserNav
            username = { username }
            avatar = { avatar }/>
        }

      </div>

    </header>

  );
};

Header.propTypes = {
  sessionId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default Header;
