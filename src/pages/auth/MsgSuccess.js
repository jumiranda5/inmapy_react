import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../components/Icon/Icon';
import TextLink from '../../components/Links/TextLink';
import { FormattedMessage as Msg } from "react-intl";

const MsgSuccess = props => {

  const { msg, icon, to } = props;

  return (
    <div className="auth clearfix">
      <div className = 'success_msg_container'>
        <Icon
          icStyle = 'ic_success_msg'
          path = { icon } />

        <h1>{ msg }</h1>

        <TextLink
          to = { to }
          linkStyle = "link_grey_border"
          text={ <Msg id="button_ok"/> }/>

      </div>
    </div>

  );
};

MsgSuccess.propTypes = {
  msg: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default MsgSuccess;
