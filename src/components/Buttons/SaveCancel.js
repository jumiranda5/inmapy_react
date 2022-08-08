import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';

const SaveCancel = ({ isSubmitting, cancelFunction, cancelText, saveText }) => {
  return (
    <div className="save-cancel">

      <button
        className = 'button border-btn'
        type = 'button'
        onClick = { cancelFunction }>

        { cancelText }

      </button>

      <SubmitButton
        btnText = { saveText }
        isSubmitting = { isSubmitting }/>

    </div>
  );
};

SaveCancel.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  cancelFunction: PropTypes.func.isRequired,
  saveText: PropTypes.object.isRequired,
  cancelText: PropTypes.object.isRequired
};

export default SaveCancel;
