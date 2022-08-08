import React from 'react';
import { FormattedMessage as Msg } from "react-intl";
import TextLink from '../../components/Links/TextLink';

const Log = () => {
  return (
    <nav className="log_page_nav clearfix">
      <ul>
        <li>
          <p className="log_page_text"><Msg id="have_account"/></p>
          <TextLink
            to="/login"
            text = { <Msg id="login"/> }
            linkStyle = 'textLinkOrangeBg' />
        </li>
        <li>
          <p className="log_page_text"><Msg id="newToInmapy"/></p>
          <TextLink
            to="/signup"
            text = { <Msg id="signup"/> }
            linkStyle = 'textLinkBlackBorder' />
        </li>
      </ul>
    </nav>
  );
};

export default Log;
