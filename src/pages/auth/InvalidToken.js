import React from 'react';
import { icHeal } from '../../assets/icons';
import TextLink from '../../components/Links/TextLink';
import Icon from '../../components/Icon/Icon';
import { FormattedMessage as Msg } from "react-intl";

const InvalidToken = () => {
  return (

    <div className="auth clearfix">
      <div className = 'success_msg_container invalid-token'>

      <Icon
        path = { icHeal }
        icStyle="ic_fail_msg"/>

      <h1><Msg id="reset_link_expired"/></h1>

      <TextLink
        to="/forgot-password"
        linkStyle="link_grey_border"
        text={ <Msg id="button_click_here"/> }/>

      </div>
    </div>

  );
};

export default InvalidToken;
