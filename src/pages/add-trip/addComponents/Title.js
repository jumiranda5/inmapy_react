import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../../components/Inputs/TextInput';
import IconBtn from '../../../components/Buttons/IconBtn';
import { icNext } from '../../../assets/icons';
import { FormattedMessage as Msg } from "react-intl";

const Title = props => {

  const { values, touched, error, history } = props;

  const btnNextFunc = () => {
    history.push('/add/cover');
  }

  return (

    <fieldset className="title_fieldset">

      <TextInput
        type="text"
        id="title"
        name="title"
        label={ <Msg id="label_title"/>}
        error={ error }
        touched={ touched.title }/>

      <TextInput
        multiline={ true }
        type="text"
        id="about"
        name="about"
        label={ <Msg id="label_about"/>}
        touched={ touched.about }/>

      <IconBtn
        isDisabled = { error || values.title === "" ? true : false }
        btnFunction={ btnNextFunc }
        type='text_left'
        text={<Msg id="button_next"/>}
        btnStyle = 'next_btn'
        icStyle = 'ic_btn_next'
        icon = { icNext }/>

    </fieldset>

  );
};

Title.propTypes = {
  values: PropTypes.any.isRequired,
  touched: PropTypes.object.isRequired,
  error: PropTypes.object,
  history: PropTypes.any
};

export default Title;
