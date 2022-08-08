import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = props => {

  const { btnText, isSubmitting, btnStyle } = props;

  return (
    <button
      className = {`button submit-btn ${ btnStyle }`}
      type = 'submit'
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
};

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  btnText: PropTypes.object.isRequired,
  btnStyle: PropTypes.string
};

export default SubmitButton;
