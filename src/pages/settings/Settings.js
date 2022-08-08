import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as sessionActions from '../../redux/actions/sessionActions';
import { FormattedMessage as Msg } from "react-intl";
import { Link } from 'react-router-dom';
import TextLink from '../../components/Links/TextLink';
import { icExit } from '../../assets/icons';
import IconBtn from '../../components/Buttons/IconBtn';
import Loader from '../../components/Loader/Loader';

class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.session.email,
      isPrivate: false,
      isLoading: false
    };
  }

  componentDidMount() {
    if(this.props.session.userId === "visitor" || this.props.session.userId === "") {
      this.props.history.push('/login');
    }
  }

  togglePrivate = () => {
    const {isPrivate} = this.state;
    console.log(`From: ${isPrivate}`);

    isPrivate === true ?
    this.setState({isPrivate:false}) :
    this.setState({ isPrivate: true });

  }

  logout = async () => {

    const { logOut, session } = this.props;
    const data = { _csrf: session.csrfToken }

    try {
      this.setState({isLoading: true});
      await logOut(data)
      this.setState({isLoading:false});
      this.props.history.push('/');
    }
    catch(error) {
      console.log(error);
      this.props.history.push('/network-error');
    }

  }

  render() {

    const {isPrivate, isLoading} = this.state;
    console.log(`Private: ${isPrivate}`);

    if(isLoading) {
      return (
        <Loader />
      );
    }
    else {
      return (
        <main className="page_main settings_page">

          <h1 className="settings_h1 headline"><Msg id="title_settings"/></h1>

          <nav>
            <ul>
              <li>
                <h2><Msg id="settings_account"/></h2>
                <ul className="account_ul">
                  <li>
                    <TextLink
                      to='/settings/change-email'
                      text={ this.state.email }
                      linkStyle='settings_account_link'/>
                  </li>
                  <li>
                    <TextLink
                      to='/settings/change-password'
                      text={ <Msg id="settings_change_password"/> }
                      linkStyle='settings_account_link'/>
                  </li>
                  <li>
                    <label className="flex-center-row">

                      <Msg id="settings_private_mode" />

                      <button
                        type = "button"
                        onClick={this.togglePrivate}
                        className={ isPrivate ? 'toggle_btn_on' : 'toggle_btn_off'}>
                        {
                          isPrivate ?
                          <p className="visually-hidden">On</p> :
                          <p className="visually-hidden">Off</p>
                        }
                        <span
                          className={ isPrivate ? "toggle_btn_slider_on" : "toggle_btn_slider_off" }
                          aria-hidden={true}>
                        </span>
                      </button>

                    </label>
                  </li>
                  <li>
                    <TextLink
                      to='/settings/delete-account'
                      text={<Msg id="settings_delete_account" /> }
                      linkStyle='settings_account_link'/>
                  </li>
                </ul>
              </li>
              <li className="settings_privacy_policy">
                <Link to="/">
                  <h2><Msg id="privacy_policy"/></h2>
                </Link>
              </li>
              <li className="flex-center-row-vertical settings_log_out">

                <IconBtn
                  type="text_right"
                  ariaLabel=""
                  btnStyle="logout_btn"
                  icon={ icExit }
                  icStyle="ic_settings_exit"
                  text={<Msg id="log_out"/>}
                  btnFunction={this.logout}/>

              </li>
            </ul>
          </nav>

        </main>
      );
    }
  }
}

Settings.propTypes = {
  session: PropTypes.object,
  logOut: PropTypes.func
};

function mapStateToProps(state) {
  return {
    session: state.session,
    error: state.session.error
  }
}

const mapDispatchToProps = {
  logOut: sessionActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
