import React, { Component } from 'react';
import { FormattedMessage as Msg } from "react-intl";
import SearchInput from '../../components/Inputs/SearchInput';
import { messages } from '../../utils/i18n';
import { nav_locale } from '../../utils/nav_location';
import UserList from '../../components/UserList/UserList';
import axios from 'axios';
import { get } from '../../configAxios';

class Following extends Component {
  constructor(props) {
    super(props);
    this.timeout =  0;
    this.state = {
      placeholder: '',
      isLoading: false,
      following: [],
      userToRemove: null,
      followingData: null,
      followingFilter: null
    };
  }

  componentDidMount() {

    const locale = nav_locale();
    locale === "pt" ?
    this.setState({placeholder: messages.pt.search}) :
    this.setState({placeholder: messages.en.search})

    this.getFollows();

  }

  getFollows = async () => {

    this.setState({isLoading: true});
    const { match, history } = this.props;
    const route = `/api/user/${ match.params.username }/following`;

    try {

      const res = await axios(get(route));
      const data = res.data;

      console.log(res);

      this.setState({
        isLoading: false,
        following: data.following,
        followingData: data.following
      });

    }
    catch (error) {
      console.log(error);
      this.setState({isLoading: false});
      history.push('/network-error');
    }
  }

  removeUser = (id) => {
    return new Promise((resolve, reject) => {
      try {
        this.setState({userToRemove: id});

        setTimeout(() => {
          this.setState({
            following: this.state.following.filter(
              (follow) => {
                return follow._id !== id
              }
            ),
            userToRemove: null
          });
          resolve();
        }, 600);
      }
      catch(error) {
        console.log(error);
        reject();
      }
    });
  }

  searchInputOnChange = (e) => {
    let keyword = e.target.value;

    let result = [];

    if (this.timeout) clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      result = this.search(keyword.toLowerCase());

      if (keyword.length > 0) this.setState({following: result});
      else this.setState({following: this.state.followingData});

    }, 500);

  }

  search = (keyword) => {

    const list = this.state.followingData;
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

    const { placeholder, following, userToRemove } = this.state;

    return (
      <main className="page_main follow_page">

        <h1 className="follow_h1 headline"><Msg id="h1_following"/></h1>

        <SearchInput
          placeholder = { placeholder }
          searchInput = { this.searchInputOnChange }
          isSubmitting = { false }
          handleSubmit = { () => {} }
        />

        {
          following.length === 0 ?

            <div className="follow_empty_container flex-center-column">

              <p className="follow_empty_h1"><Msg id="h_empty"/></p>

            </div>

          :

          <UserList
            userList = { following }
            removeUser = {this.removeUser}
            userToRemove = { userToRemove }
            history = {this.props.history}/>
        }



      </main>
    );
  }
}

export default Following;
