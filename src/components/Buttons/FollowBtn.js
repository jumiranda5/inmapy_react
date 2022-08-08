import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as Msg } from "react-intl";
import axios from 'axios';
import { post } from '../../configAxios';

class FollowBtn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      isFollowing: false,
    };
  }

  componentDidMount() {
    this.setState({isFollowing: this.props.isFollowing});
  }

  onFollow = async () => {

    console.log("Following user...");

    this.setState({isSubmitting:true});

    const { id, history } = this.props;

    console.log(id);

    const route = `/api/follow/${id}`;

    try {

      await axios(post(route, null)); // add csrf

      this.setState({
        isSubmitting: false,
        isFollowing: true
      });

    }
    catch(error) {
      console.log(error);
      this.setState({isSubmitting: false});
      history.push('/network-error');
    }

  };

  onUnfollow = async () => {

    console.log("unFollowing user...");

    this.setState({isSubmitting:true});

    const { removeUser, id, history } = this.props;
    const route = `/api/unfollow/${id}`;

    try {

      await axios(post(route, null)); // add csrf

      this.setState({
        isSubmitting: false,
        isFollowing: false
      });

    }
    catch(error) {
      console.log(error);
      this.setState({isSubmitting: false});
      history.push('/network-error');
    }

    // remove from list (if Following Page);
    if (removeUser) await removeUser(id);

  }

  render() {

    const { isSubmitting } = this.state;
    const { isFollowing } = this.state;

    let btnText;
    isFollowing ? btnText = <Msg id="button_following"/> :
    btnText = <Msg id="button_follow"/>

    let btnFunc;
    isFollowing ? btnFunc = this.onUnfollow :
    btnFunc = this.onFollow;

    return (
      <button
        className = {`button ${ isFollowing ? 'border-btn unfollow_btn' : 'submit-btn follow_btn' }`}
        type = 'button'
        onClick = { btnFunc }
        disabled={ isSubmitting ? true : false }>

        { isSubmitting ?
          <div className='flex-row submitting'>
            <div className="loader"></div>
          </div>
          :
          btnText
        }

      </button>
    );
  }
}

FollowBtn.propTypes = {
  isFollowing: PropTypes.bool.isRequired
};

export default FollowBtn;
