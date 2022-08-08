import React from 'react';
import MsgSuccess from './MsgSuccess';
import { FormattedMessage as Msg } from "react-intl";
import { icKey } from '../../assets/icons';

const SuccessPassword = () => {
  return (
    <MsgSuccess
      icon = { icKey }
      msg = {<Msg id="password_reset_success"/>}
      to = "/login"/>
  );
};

export default SuccessPassword;
