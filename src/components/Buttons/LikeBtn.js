import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconBtn from './IconBtn';
import { FormattedMessage as Msg } from "react-intl";
import axios from 'axios';
import { post } from '../../configAxios';
import { icHeart } from '../../assets/icons';

class LikeBtn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      like: this.props.like,
      likeId: this.props.likeId
    };
  }

  onLike = async () => {

    console.log("Like");

    const { userId, tripId, history } = this.props;

    console.log(`userId: ${userId}`);
    console.log(`tripId: ${tripId}`);

    const route = `/api/like/${userId}/${tripId}`;

    this.setState({like:true});

    try {

      const res = await axios(post(route, null)); // add csrf
      const likeId = res.data.like._id;
      console.log(likeId);

      this.setState({likeId: likeId});

    }
    catch(error) {
      console.log(error);
      this.setState({like:false});
      //history.push('/network-error');
    }

  };

  onDislike = async () => {
    console.log("Dislike");

    const { history } = this.props;

    const route = `/api/delete-like/${this.state.likeId}`;

    try {

      await axios(post(route, null)); // add csrf

      this.setState({
        like:false,
        likeId: null
      });

    }
    catch(error) {
      console.log(error);
      history.push('/network-error');
    }

  }

  render() {
    return (

      <IconBtn
        icon={icHeart}
        ariaLabel={<Msg id="aria_like_btn"/>}
        btnFunction={ this.state.like ? this.onDislike : this.onLike }
        btnStyle="post_like_btn"
        icStyle={ this.state.like ? "ic_post_like ic_like_true" : "ic_post_like" }/>

    );
  }
}

LikeBtn.propTypes = {
  like: PropTypes.bool.isRequired
};

export default LikeBtn;
