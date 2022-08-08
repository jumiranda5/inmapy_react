import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as Msg } from "react-intl";
import IconBtn from './IconBtn';
import { icNext, icPrev } from '../../assets/icons';

const NextPrev =  React.memo((props) => {

  console.log("Render NextPrev.");

  const { history, btnNextFunc, isDisabled } = props;

  const btnPrevFunc = (e) => {
    e.preventDefault();
    history.goBack();
  }

  return (
    <div className="next-prev flex-center-row">

      <IconBtn
        btnFunction={ btnPrevFunc }
        type='text_right'
        text={<Msg id="button_prev"/>}
        btnStyle = 'prev_btn cancel-btn'
        icStyle = 'ic_btn_prev'
        icon = { icPrev }/>

      <IconBtn
        isDisabled = { isDisabled }
        btnFunction={ btnNextFunc }
        type='text_left'
        text={<Msg id="button_next"/>}
        btnStyle = 'next_btn'
        icStyle = 'ic_btn_next'
        icon = { icNext }/>

    </div>
  );
});

NextPrev.propTypes = {
  history: PropTypes.any.isRequired,
  btnNextFunc: PropTypes.func.isRequired
};

export default NextPrev;
