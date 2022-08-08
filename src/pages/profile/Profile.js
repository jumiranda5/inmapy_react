import React, { Component } from 'react';
import User from './User';
import WorldMap from '../../components/WorldMap/WorldMap';
import Posts from './Posts';
import axios from 'axios';
import { get } from '../../configAxios';
import Loader from '../../components/Loader/Loader';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOwnProfile: false,
      isFollowing: false,
      isLoading: true,
      profile: {
        userId: "",
        username: "",
        name: "",
        avatar: "",
        followersCount: 0,
        followingCount: 0,
        tripCount: 0,
        countryCount: 0,
        countries: []
      },
      posts : []
    };
  }

  componentDidMount() {
    this.getProfileData();
  }

  componentDidUpdate(prevProps) {
    const {match} = this.props;
    if (match.params.username !== prevProps.match.params.username) {
      this.getProfileData();
    }
  }

  getProfileData = async () => {

    this.setState({isLoading: true});

    const { match, history } = this.props;
    const route = `/api/user/${ match.params.username }`;

    try {

      const res = await axios(get(route));
      console.log(res.data);
      const data = res.data;

      this.setState({
        isLoading:false,
        isOwnProfile: data.isOwnProfile,
        isFollowing: data.isFollowing,
        profile: {
          userId: data.user._id,
          username: data.user.username,
          name: data.user.name,
          avatar: data.user.avatar,
          followersCount: data.followers,
          followingCount: data.following,
          tripCount: data.tripCount,
          countryCount: data.countriesCount,
          countries: data.countries
        },
        posts: data.trips
      });
    }
    catch(error) {
      console.log(error);
      this.setState({isLoading: false});
      history.push('/network-error');
    }
  }

  scrollToTrips = () => {
    console.log('Scroll to trips');
    this.$ref.scrollIntoView({
      behaviour: 'smooth',
      block: 'start',
      inline: 'center',
    });
  }

  render() {

    const {
      profile,
      isOwnProfile,
      posts,
      isFollowing,
      isLoading
    } = this.state;

    const { history } = this.props;

    return (
      <>

        {
          isLoading ? <Loader /> :

          <main className="profile_main">

            <User
              isOwnProfile = { isOwnProfile }
              profile = { profile }
              scrollToTrips = {this.scrollToTrips}
              isFollowing = { isFollowing }
              history = { history } />

            <WorldMap countryList = { profile.countries } />

            <div
              className = "profile_posts"
              id={"trips"}
              ref={ref => {this.$ref = ref;}}>

              <Posts posts = { posts }/>

            </div>

          </main>

        }

      </>

    );
  }
}

export default Profile;
