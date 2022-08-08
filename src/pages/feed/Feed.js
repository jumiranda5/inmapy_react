import React, { Component } from 'react';
import Posts from './Posts';
import axios from 'axios';
import { get } from '../../configAxios';
import debounce from "lodash.debounce";
import { connect } from 'react-redux';
import { FormattedMessage as Msg } from "react-intl";

class Feed extends Component {

  _isMounted = false;

  constructor() {
    super();
    this.state = {
      isLoading: false,
      trips: [],
      page: 0,
      hasMore: true,
      error: false
    };
  }

  componentDidMount() {
    this._isMounted = true;

    this.loadFeed();
    if (this._isMounted) this.fetchDataOnScroll();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchDataOnScroll = () => {
    window.onscroll = debounce(() => {

      const { isLoading, hasMore, error } = this.state;

      if (error || isLoading || !hasMore) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.innerHeight + document.documentElement.scrollTop;

      if (((scrollHeight - 300) >= scrollPos) / scrollHeight === 0) {
        this.loadFeed();
        console.log('Load more...');
      }
    }, 100);
  }

  loadFeed = async () => {

    const nextPage = this.state.page + 1;

    this.setState({isLoading: true, page: nextPage});
    const { history } = this.props;
    const route = `/api/feed/${nextPage}`;

    try {

      const res = await axios(get(route));
      const data = res.data;

      console.log(data);

      if (data.message === "No trips found.") this.setState({hasMore: false, isLoading: false});
      else {
        const { trips } = this.state;

        this.setState({
          isLoading: false,
          trips: [...trips, ...data.feedCards]
        });
      }

    }
    catch (error) {
      console.log(error);
      this.setState({isLoading: false, error: true});
      history.push('/network-error');
    }
  }

  refresh = async () => {
    this.setState({page: 0});
    this.loadFeed();
  }

  render() {

    const { trips, isLoading } = this.state;

    console.log(trips);

    return (
      <main className="page_main feed_page">

        {
          trips.length === 0 && !isLoading?

          <div className="feed_no_trips_container flex-center-column">

            <p className="feed_empty_h1"><Msg id="h_empty"/></p>

          </div>

          :

          <Posts
            posts={ trips }
            session={this.props.session}
            isLoading={isLoading}/>
        }

      </main>
    );
  }
}


function mapStateToProps(state) {
  return {
    session: state.session,
  }
}

export default connect(mapStateToProps, {})(Feed);
