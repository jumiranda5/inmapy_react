import React from 'react';
import { FormattedMessage as Msg } from "react-intl";
import TextLink from '../Links/TextLink';

const VisitorNav = () => {
  return (
    <nav className="nav-visitor">
      <ul className="flex-row">
        <li>
          <TextLink
            to="/signup"
            text = { <Msg id="signup"/> }
            linkStyle = 'textLinkDarkBg' />
        </li>
        <li>
          <TextLink
            to="/login"
            text = { <Msg id="login"/> }
            linkStyle = 'textLinkOrangeBg' />
        </li>
        <li>
          <TextLink
            to="/log"
            text = { <Msg id="login"/> }
            linkStyle = 'textLinkOrangeBg' />
        </li>
      </ul>
    </nav>
  );
};

export default VisitorNav;
