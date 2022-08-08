import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";
import { nav_locale } from './utils/nav_location';
import { messages } from './utils/i18n';

const store = configureStore();

const locale = nav_locale();

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
