import React from 'react';
import MsgSuccess from './MsgSuccess';
import { FormattedMessage as Msg } from "react-intl";
import { icSend } from '../../assets/icons';

const SuccessEmail = () => {
  return (
    <MsgSuccess
      icon = { icSend }
      msg = { <Msg id="success_email"/> }
      to = "/login" />
  );
};

export default SuccessEmail;
