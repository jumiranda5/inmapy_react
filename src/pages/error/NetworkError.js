import React, {useEffect} from 'react';
import Icon from '../../components/Icon/Icon';
import { icHeal } from '../../assets/icons';
import { FormattedMessage as Msg } from "react-intl";
import { withRouter } from "react-router-dom";

const NetworkError = (props) => {

  const { apiResponse, history} = props;

  useEffect(() => {
    if (apiResponse === "Ok") {
      history.push('/')
    }
  });

  return (
    <main className="error_page page-body flex-center-row">

      <div className="error_main">

        <Icon
          path={ icHeal }
          icStyle="ic_error_page"/>

        <p><Msg id="error_network"/></p>

      </div>

    </main>
  );
};

export default withRouter(NetworkError);
