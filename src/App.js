import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import * as sessionActions from './redux/actions/sessionActions';
import Routes from './Routes';
import Header from './components/Header/Header';
import SideNav from './components/Navigation/SideNav';
import Loader from './components/Loader/Loader';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      apiResponse: null,
      timestamp: ''
    };
  }

  componentDidMount() {

    // header shrink on scroll
    this.resizeHeaderOnScroll();

    // Start visitor session or refresh user session
    setTimeout(() => {
      this.generateSession();
    }, 500);
  }

  resizeHeaderOnScroll = () => {
    window.addEventListener("scroll", () => {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 50,
      header = document.getElementById("header");

      if (distanceY > shrinkOn) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  }

  generateSession = async () => {
    try {
      await this.props.loadSession();
      this.setState({
        isLoading: false,
        apiResponse: 'Ok'
      });
    }
    catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        apiResponse: "Error"
      });
      console.log(error);
    }
  }

  render() {

    const { session } = this.props;
    const sessionId = session.userId;
    const username  = session.username;
    const avatar = session.avatar;

    return (
      <Router>

        <Header
          sessionId = { sessionId }
          username = { username }
          avatar = { avatar } />

        {
          this.state.isLoading
          ?
          <Loader />
          :
          <Routes
            session = { session }
            apiResponse={this.state.apiResponse}
          />
        }

        {
          sessionId === "visitor" ?
          null :
          <SideNav username = { username } />
        }

      </Router>
    );
  }
}


App.propTypes = {
  session: PropTypes.object,
  loadSession: PropTypes.func
};

function mapStateToProps(state) {
  return {
    session: state.session,
  }
}

const mapDispatchToProps = {
  loadSession: sessionActions.loadSession
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
