import React, { Component } from 'react';
import { FormattedMessage as Msg } from "react-intl";
import SearchInput from '../../components/Inputs/SearchInput';
import { messages } from '../../utils/i18n';
import { nav_locale } from '../../utils/nav_location';
import UserList from '../../components/UserList/UserList';
import axios from 'axios';
import { get } from '../../configAxios';

class Followers extends Component {
  constructor(props) {
    super(props);
    this.timeout =  0;
    this.state = {
      placeholder: '',
      isLoading: true,
      followers: [],
      followersData: null,
      followersFilter: null
    };
  }

  componentDidMount() {

    const locale = nav_locale();
    locale === "pt" ?
    this.setState({placeholder: messages.pt.search}) :
    this.setState({placeholder: messages.en.search});

    this.getFollowers();

  }

  getFollowers = async () => {

    this.setState({isLoading: true});
    const { match, history } = this.props;
    const route = `/api/user/${ match.params.username }/followers`;

    try {

      const res = await axios(get(route));
      const data = res.data;

      console.log(res);

      this.setState({
        isLoading: false,
        followers: data.followers,
        followersData: data.followers
      });

    }
    catch (error) {
      console.log(error);
      this.setState({isLoading: false});
      history.push('/network-error');
    }
  }

  searchInputOnChange = (e) => {
    let keyword = e.target.value;

    let result = [];

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      result = this.search(keyword.toLowerCase());

      if (keyword.length > 0) this.setState({followers: result});
      else this.setState({followers: this.state.followers});

    }, 500);

  }

  search = (keyword) => {

    const list = this.state.followersData;
    const searchResult = [];

    for (let i = 0; i < list.length; i++) {

      const username = list[i].username.toLowerCase();
      const name = list[i].name.toLowerCase();

      if (username.search(keyword) !== -1 || name.search(keyword) !== -1) {
        searchResult.push(list[i]);
      }

    }

    return searchResult;

  }

  render() {

    const { placeholder, followers } = this.state;

    return (
      <main className="page_main follow_page">

        <h1 className="follow_h1 headline"><Msg id="h1_followers"/></h1>

        <SearchInput
          placeholder = { placeholder }
          searchInput = { this.searchInputOnChange }
          isSubmitting = { false }
          handleSubmit = { () => {} }/>

        {
          followers.length === 0 ?

            <div className="follow_empty_container flex-center-column">

              <p className="follow_empty_h1"><Msg id="h_empty"/></p>

            </div>

          :

            <UserList
              userList = { followers }
              history = {this.props.history}/>
        }

      </main>
    );
  }
}

export default Followers;
