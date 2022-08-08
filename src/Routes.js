import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// Pages
import Feed from './pages/feed/Feed';
import Home from './pages/home/Home';
import NetworkError from './pages/error/NetworkError';
import Signup from './pages/auth/signup/Signup';
import Login from './pages/auth/login/Login';
import Log from './pages/auth/Log';
import ForgotPwd from './pages/auth/forgot-pwd/ForgotPwd';
import EmailSuccess from './pages/auth/SuccessEmail';
import ResetPwd from './pages/auth/reset-pwd/ResetPwd';
import ResetPwdSuccess from './pages/auth/SuccessPassword';
import InvalidToken from './pages/auth/InvalidToken';
import ChangePwd from './pages/settings/change-pwd/ChangePwd';
import ChangePwdSuccess from './pages/settings/SuccessPassword';
import ChangeEmail from './pages/settings/change-email/ChangeEmail';
import ChangeEmailSuccess from './pages/settings/SuccessEmail';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/edit-profile/EditProfile';
import Followers from './pages/follows/Followers';
import Following from './pages/follows/Following';
import Search from './pages/search/Search';
import Settings from './pages/settings/Settings';
import AddTrip from './pages/add-trip/AddTrip';

const Routes = ({ session, apiResponse }) => {

  const { userId, csrfToken } = session;

  let landingPage;
  if (csrfToken === "" || apiResponse === "Error") landingPage = NetworkError;
  else {
    userId === "visitor" ? landingPage = Home : landingPage = Feed;
  }

  console.log(session);

  return (

    <Switch>
      <Route exact path="/" component = { landingPage } />
      <Route path="/signup" component = { Signup } />
      <Route path="/login" component = { Login } />
      <Route path="/log" component = { Log } />
      <Route path="/forgot-password/success"  component = { EmailSuccess } />
      <Route path="/forgot-password"  component = { ForgotPwd } />
      <Route path="/reset-password/invalid-token" component = { InvalidToken } />
      <Route path="/reset-password/success" component = { ResetPwdSuccess } />
      <Route path="/reset-password/:token" component = { ResetPwd } />
      <Route path="/settings/change-password/success" component = { ChangePwdSuccess } />
      <Route path="/settings/change-password" component = { ChangePwd } />
      <Route path="/settings/change-email/success" component = { ChangeEmailSuccess } />
      <Route path="/settings/change-email" component = { ChangeEmail } />
      <Route path="/settings" component = { Settings } />
      <Route path="/search" component = { Search } />
      <Route path="/add" component = { AddTrip } />

      <Route path="/network-error" render={
          () => <NetworkError apiResponse={apiResponse}/>
        }
      />

      <Route path="/:username/followers" component = { Followers } />
      <Route path="/:username/following" component = { Following } />
      <Route path="/:username/edit-profile" component = { EditProfile } />
      <Route path="/:username" component = { Profile } />
    </Switch>
  );
};

Routes.propTypes = {
  session: PropTypes.object.isRequired
};

export default Routes;
