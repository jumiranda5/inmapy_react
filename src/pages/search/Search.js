import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchInput from '../../components/Inputs/SearchInput';
import Trips from './Trips';
import Users from './Users';
import { messages } from '../../utils/i18n';
import { nav_locale } from '../../utils/nav_location';
import { FormattedMessage as Msg } from "react-intl";
import { icProfile, icMap } from '../../assets/icons';
import SecondaryNav from '../../components/Navigation/SecondaryNav';
import axios from 'axios';
import { post } from '../../configAxios';
import debounce from "lodash.debounce";

class Search extends Component {

  constructor(props) {
    super(props);
    this.timeout =  0;
    this.state = {
      placeholder: '',
      isLoading: false,
      searchValue: "",
      users: [],
      page: 0,
      hasMore: true,
      error: false,
      activeLink: '',
      navLinks: [],
      session: this.props.session
    };
  }

  componentDidMount() {

    const locale = nav_locale();
    locale === "pt" ?
    this.setState({placeholder: messages.pt.search}) :
    this.setState({placeholder: messages.en.search})

    this.setSecondaryNavLinks();
    this.fetchDataOnScroll();

  }

  setSecondaryNavLinks = () => {
    const { history } = this.props;
    const activeLink = history.location.pathname;

    const navLinks = [
      {
        to: '/search',
        icon: icProfile,
        key: 1,
        text: <Msg id="link_travelers"/>
      },
      {
        to: '/search/trips',
        icon: icMap,
        key: 2,
        text: <Msg id="link_trips"/>
      }
    ]

    this.setState({navLinks: navLinks, activeLink: activeLink});
  }

  searchInput = (e) => {
    let keyword = e.target.value;
    this.setState({
      searchValue: keyword,
      page: 0,
      users: [],
      hasMore: true,
      error: false
    });
    console.log(this.state.searchValue);

    if(this.timeout) {
      console.log('>>>>>>> Cancel api call.')
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      console.log('>>>>>>> Calling api.');
      this.callApi();
    }, 500);
  }

  handleSubmit = async (e) => {
    console.log('Search: ' + this.state.searchValue);
    e.preventDefault();
    this.callApi();
  }

  fetchDataOnScroll = () => {
    window.onscroll = debounce(() => {

      console.log("fetch data on scroll");

      const { isLoading, hasMore, error } = this.state;

      if (error || isLoading || !hasMore) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.innerHeight + document.documentElement.scrollTop;

      if (((scrollHeight - 300) >= scrollPos) / scrollHeight === 0) {
        this.callApi();
        console.log('Load more...');
      }
    }, 100);
  }

  callApi = async () => {

    const nextPage = this.state.page + 1;

    this.setState({isLoading: true, page: nextPage});

    const {session} = this.props;
    const route = `/api/search/${session.userId}/user/${nextPage}`;
    const data = { search: this.state.searchValue }

    try {
      const res = await axios(post(route, data)); // add csrf
      console.log(res.data);

      if (res.data.message === "No users found.") {
        this.setState({
          hasMore: false,
          isLoading: false
        });
      }
      else {
        const { users } = this.state;

        this.setState({
          isLoading: false,
          users: [...users, ...res.data]
        });
      }
    }
    catch(error) {
      console.log(error);
      this.setState({isLoading: false, error: true});
    }
  }

  render() {

    return (
      <main className="page_main search_page">

        <SearchInput
          placeholder = { this.state.placeholder }
          handleSubmit = { this.handleSubmit }
          searchInput = { this.searchInput }
          isSubmitting = { false } />

        <SecondaryNav
          activeLink = {this.state.activeLink}
          navLinks={this.state.navLinks}/>

        <Switch>
          <Route exact path={`/search`} render={
            () =>
              <Users
                users={this.state.users}
                session = { this.state.session }
                isLoading = { this.state.isLoading }
              />
          }/>
          <Route path={`/search/trips`} component={ Trips }/>
        </Switch>

      </main>
    );
  }
}

Search.propTypes = {
  session: PropTypes.object
};

function mapStateToProps(state) {
  return {
    session: state.session,
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Search);
