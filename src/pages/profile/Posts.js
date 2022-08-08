import React from 'react';
import PropTypes from 'prop-types';
import arrow1 from '../../assets/arrow1-black.svg';
import arrow2 from '../../assets/arrow2-black.svg';
import PostsCompact from '../../components/Posts/PostsCompact';
import { FormattedMessage as Msg } from "react-intl";

const Posts = React.memo(props => {

  const { posts } = props;

  console.log('render posts');

  return (
    <>

      <div className="profile_posts_title_container flex-center-row">

        <img className="profile_arrow" src={arrow1} alt=""/>

        <h1 className="headline"><Msg id="trips_title"/></h1>

        <img className="profile_arrow" src={arrow2} alt=""/>

      </div>

      {
        posts.length === 0 ?

        <div className="profile_no_trips_container flex-center-column">

          <p className="feed_empty_h1"><Msg id="h_empty"/></p>

        </div>

        :

        <PostsCompact posts = { posts }/>
      }

    </>
  );
});

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
