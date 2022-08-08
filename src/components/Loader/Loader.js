import React from 'react';
import Icon from '../Icon/Icon';
import { icLoader } from '../../assets/icons';
import { IntlProvider, FormattedMessage as Msg } from "react-intl";
import { messages } from '../../utils/i18n';
import { nav_locale } from '../../utils/nav_location';

const locale = nav_locale();

const Loader = () => {
  return (
    <div className="Loader flex-center-column">

      <div className="Loader_compass">
        <Icon
          path = { icLoader }
          icStyle = ''/>
      </div>

      <IntlProvider locale={locale} messages={messages[locale]}>

        <h1><Msg id="h_loading"/></h1>

      </IntlProvider>

    </div>
  );
};

export default Loader;
