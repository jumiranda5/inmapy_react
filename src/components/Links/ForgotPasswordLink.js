import React from 'react';
import { FormattedMessage as Msg } from "react-intl";
import { Link } from 'react-router-dom';
import arrow1 from '../../assets/arrow1-1px.svg';
import arrow2 from '../../assets/arrow2-1px.svg';

const ForgotPasswordLink = () => {
  return (
    <div className="forgot_container flex-row">
      <img className="arrow1" src={arrow1} alt=""/>
      <Link to="/forgot-password" className="forgot-password">
        <Msg id="forgotPwdLink"/>
      </Link>
      <img className="arrow2" src={arrow2} alt=""/>
    </div>
  );
};


export default ForgotPasswordLink;
