import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowCompass from '../../assets/compass-arrow-light.svg';

const PostsCompact = props => {

  const { posts } = props;

  return (
    <ul className = 'post_compact_list flex-row'>

      { posts.map((post) =>

        <li key = { post._id } className = 'post_compact'>

          <Link to = {`/${post.user}/post/${post._id}`} >

            <img
              className={ post.cover !== "" ?  "post_compact_cover" : "post_compact_cover_empty" }
              src = { post.cover === "" ?  ArrowCompass : post.cover }
              alt=""/>

            <p className='post_compact_title ellipsize'>{ post.title }</p>

          </Link>

        </li>
      )}

    </ul>
  );
};

PostsCompact.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsCompact;
