import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as Msg } from "react-intl";
import FileInput from '../../../components/Inputs/FileInput';
import NextPrev from '../../../components/Buttons/NextPrev';

const Cover = props => {

  const {
    onFileUpload,
    cover,
    history
  } = props;

  const btnNextFunc = () => {
    history.push('/add/city');
  }

  return (
    <fieldset>

      <FileInput
        type="Cover"
        file={ cover ? cover : ""}
        onFileUpload={ onFileUpload }
        label = {<Msg id="label_add_cover" />}
        alt = { <Msg id="alt_cover" /> }/>

      <NextPrev
        btnNextFunc = { btnNextFunc }
        history = { history }/>

    </fieldset>
  );
};

Cover.propTypes = {
  onFileUpload: PropTypes.func.isRequired,
  cover: PropTypes.string,
  history: PropTypes.any.isRequired
};

export default Cover;
