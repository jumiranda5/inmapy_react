import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';

const SecondaryNav = React.memo((props) => {

  console.log('== Render secondary nav. ==');

  const { navLinks, activeLink } = props;
  const linkCount = navLinks.length;

  return (
    <nav className="secondary_nav">
      <ul className={`flex-row secondary_nav_${linkCount}`}>
        {
          navLinks.map(link =>
            <li
              key={link.key}
              className={activeLink === link.to ? `position${link.key} active` : ''}>

                <NavLink
                  exact
                  className = "sec_nav_link flex-center-row"
                  to = { link.to }>

                  <Icon
                    path = { link.icon }
                    icStyle = {'ic_sec_nav'}/>

                  <p>{link.text}</p>

                </NavLink>

            </li>
          )
        }
        <li className={`active_line_${linkCount}`} aria-hidden='true'></li>
      </ul>
    </nav>
  );
});

SecondaryNav.propTypes = {
  navLinks: PropTypes.array.isRequired,
  activeLink: PropTypes.string
};

export default SecondaryNav;
