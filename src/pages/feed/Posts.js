import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowCompass from '../../assets/compass-arrow-light.svg';
import { FormattedMessage as Msg } from "react-intl";
import UserLink from '../../components/Links/UserLink';
import IconBtn from '../../components/Buttons/IconBtn';
import LikeBtn from '../../components/Buttons/LikeBtn';
import { icShare } from '../../assets/icons';

const Post = props => {

  const { posts, session, isLoading } = props;

  return (
    <>
      <ul className = 'post_list flex-row'>

        { posts.map((post) =>

          <li key = { post.tripId } className = 'post'>

            <div className="post_top_div flex-center-row">
              <h1 className='headline post_title ellipsize'>{ post.title }</h1>
              <IconBtn
                  icon={icShare}
                  ariaLabel={<Msg id="aria_share_btn"/>}
                  btnFunction={()=>{}}
                  btnStyle="post_share_btn"
                  icStyle="ic_post_share"/>
            </div>


            <Link to = {`/${post.user}/post/${post.postId}`} >

              <img
                className={ post.cover !== "" ?  "post_cover" : "post_cover_empty" }
                src = { post.cover === "" ?  ArrowCompass : post.cover }
                alt=""/>

            </Link>

            <div className="post_bottom_div flex-center-row">

              <UserLink
                avatar={post.avatar}
                username={post.username}
                avatarStyle='post_avatar'
                linkStyle='post_user_link'/>

              <div className="post_buttons_div flex-row">

                <LikeBtn
                  like={ post.like }
                  userId={ session.userId }
                  tripId={ post.tripId }
                  likeId={ post.likeId }
                />

              </div>

            </div>

          </li>
        )}

      </ul>

      {
        isLoading
        ?
        <p>Loading...</p>
        :
        null
      }

    </>
  );
};

Post.propTypes = {
  posts: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  session: PropTypes.object.isRequired
};

export default Post;
