import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import FollowBtn from '../Buttons/FollowBtn';

const UserList = props => {

  const { userList, removeUser, userToRemove, history, session } = props;

  return (

    <ul className="user_list">

      {
        userList.map((user) =>

          <li
            key = { user._id }
            className = {`user_list_li flex-row ${ userToRemove === user._id ? 'animate_remove_user' : null}`}>

            <Link to = {`/${ user.username }`} className='user_list_link flex-row'>

              <Avatar
                avatar = { user.avatar }
                avatarStyle='user_list_avatar'/>

              <div className="user_link_user_container flex-center-column-vertical">
                <p className="user_link_username ellipsize">{ user.username }</p>
                <p className="user_link_name ellipsize">{ user.name }</p>
              </div>

            </Link>

            {
              session && user._id === session.userId ?
              null
              :
              <FollowBtn
                isFollowing={ user.following }
                id = { user._id }
                removeUser={ removeUser }
                history={ history }/>
            }

          </li>

        )
      }

    </ul>


  );
};

UserList.propTypes = {
  userList: PropTypes.array.isRequired,
  isFollowing: PropTypes.bool,
  session: PropTypes.object
};

export default UserList;
