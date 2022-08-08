import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as Msg } from "react-intl";
import IconLink from '../Links/IconLink';
import { withRouter } from 'react-router-dom';
import {
  icHome,
  icExplore,
  icNotifications,
  icAdd,
  icProfile
} from '../../assets/icons';

const SideNav = (props) => {

  const {username, history} = props;

  const activeLink = history.location.pathname;
  console.log(activeLink);

  const navDisplay =
    (activeLink === `/${username}/edit-profile`) ||
    (activeLink === `/${username}/edit-profile/image-editor`) ||
    (activeLink === `/${username}/following`) ||
    (activeLink === `/${username}/followers`) ||
    (activeLink === `/add`) ||
    (activeLink === `/add/cover`) ||
    (activeLink === `/add/city`) ||
    (activeLink === `/add/album`) ||
    (activeLink === `/add/post`) ||
    (activeLink === `/add/image-editor`) ||
    (activeLink === `/search`)
   ? 'hide-nav' : '';

  return (
    <div className={`side_nav_container ${navDisplay}`}>
      <nav>
        <ul className="flex-center-row">
          <li>
            <IconLink
              to="/"
              text = { <Msg id="home"/> }
              path = { icHome }
              linkStyle = 'side_nav_link'
              icStyle = 'side_nav_icon'
              isTextVisible = { true }
              isNav={true}/>
          </li>
          <li>
            <IconLink
              to="/explore"
              text = { <Msg id="explore"/> }
              path = { icExplore }
              linkStyle = 'side_nav_link'
              icStyle = 'side_nav_icon side_nav_icon_explore'
              isTextVisible = { true }
              isNav={true}/>
          </li>
          <li>
            <IconLink
              to="/add"
              text = { <Msg id="add"/> }
              path = { icAdd }
              linkStyle = 'side_nav_link'
              icStyle = 'side_nav_icon side_nav_icon_add'
              isTextVisible = { true }
              isNav={true}/>
          </li>
          <li>
            <IconLink
              to="/notifications"
              text = { <Msg id="notifications"/> }
              path = { icNotifications }
              linkStyle = 'side_nav_link'
              icStyle = 'side_nav_icon'
              isTextVisible = { true }
              isNav={true}/>
          </li>
          <li>
            <IconLink
              to={ `/${username}` }
              text = { <Msg id="profile"/> }
              path = { icProfile }
              linkStyle = 'side_nav_link'
              icStyle = 'side_nav_icon'
              isTextVisible = { true }
              isNav={true}/>
          </li>
        </ul>
      </nav>
    </div>
  );
};

SideNav.propTypes = {
  username: PropTypes.string.isRequired
};

export default withRouter(SideNav);
