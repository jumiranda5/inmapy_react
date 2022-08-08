import React from 'react';
import MsgSuccess from '../auth/MsgSuccess';
import { FormattedMessage as Msg } from "react-intl";
import { icKey } from '../../assets/icons';

const SuccessPassword = () => {
  return (
    <MsgSuccess
      icon = { icKey }
      msg = {<Msg id="password_reset_success"/>}
      to = "/settings"/>
  );
};

export default SuccessPassword;
