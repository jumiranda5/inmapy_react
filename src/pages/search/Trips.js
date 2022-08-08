import React from 'react';
//import PropTypes from 'prop-types';
import PostsCompact from '../../components/Posts/PostsCompact';

const Trips = props => {

  // Use redux to get search input values...
  const trips = [
    {
      postId: 1,
      title: 'Trip to New York with big family',
      cover: '',
      user: 'testUser',
      like: false,
    },
    {
      postId: 2,
      title: 'Florida',
      cover: '',
      user: 'testUser',
      like: false,
    },
    {
      postId: 3,
      title: 'California',
      cover: '',
      user: 'testUser',
      like: false,
    },
    {
      postId: 4,
      title: 'Trip to New York with big family',
      cover: '',
      user: 'testUser',
      like: false,
    },
    {
      postId: 5,
      title: 'Florida',
      cover: '',
      user: 'testUser',
      like: false,
    },
    {
      postId: 6,
      title: 'California',
      cover: '',
      user: 'testUser',
      like: false,
    }
  ];

  return (
    <PostsCompact posts = { trips }/>
  );
};

Trips.propTypes = {

};

export default Trips;
