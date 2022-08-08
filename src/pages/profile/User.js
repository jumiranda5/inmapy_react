import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar/Avatar';
import TextLink from '../../components/Links/TextLink';
import Counter from './Counter';
import FollowBtn from '../../components/Buttons/FollowBtn';
import { FormattedMessage as Msg } from "react-intl";

const User = React.memo( props => {

  const { profile, isOwnProfile, scrollToTrips, isFollowing, history  } = props;

  console.log('== render user ==');
  console.log(`Own profile: ${isOwnProfile}`);

  return (
    <div className="user clearfix">

      <div className="flex-row user_container">

        <Avatar
          avatar={ profile.avatar }
          avatarStyle="profile_avatar"/>

        <div className="name_container flex-center-column-vertical">
          <p className="username ellipsize">{ profile.username }</p>
          <p className="name ellipsize">{ profile.name }</p>

          {
            isOwnProfile ?
              <TextLink
                text={ <Msg id="link_edit_profile"/> }
                to={`/${profile.username}/edit-profile`}
                linkStyle="textLinkGreyBorder"/>
            :
              <FollowBtn
                isFollowing={ isFollowing }
                id={ profile.userId }
                history={ history }/>
          }

        </div>

      </div>

      <nav>
        <ul className="user_counters flex-row">

          <Counter
            linkTo = {`/${ profile.username }/#trips`}
            count = { profile.tripCount }
            label = { <Msg id="link_trips"/> }
            scrollToTrips = { scrollToTrips }/>

          <Counter
            linkTo = { `/${ profile.username }/countries` }
            count = { profile.countryCount }
            label = { <Msg id="link_countries"/> }/>

          <Counter
            linkTo = { `/${ profile.username }/followers` }
            count = { profile.followersCount }
            label = { <Msg id="link_followers"/> }/>

          <Counter
            linkTo = { `/${ profile.username }/following` }
            count = { profile.followingCount }
            label = { <Msg id="link_following"/> }/>

        </ul>

      </nav>

    </div>
  );
});

User.propTypes = {
  isOwnProfile: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  scrollToTrips: PropTypes.func
};

export default User;
