import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const IconBtn = props => {

  const {
    type,
    text,
    ariaLabel,
    btnFunction,
    btnStyle,
    icStyle,
    icon,
    isSubmitting,
    isDisabled,
    id
  } = props;

  return (
    <button
      id = { id }
      type = "button"
      aria-label = { ariaLabel }
      className = {`button ${ btnStyle } flex-center-row`}
      onClick = { btnFunction }
      disabled={ isDisabled || isSubmitting ? true : false }>

      { isSubmitting ?
          <div className='flex-row submitting'>
            <div className="loader"></div>
          </div>
          :
          null
        }

      {
        type === "text_left" && !isSubmitting
        ? <p>{ text }</p>
        : null
      }

      {
        !isSubmitting ?
        <Icon
          path = { icon }
          icStyle = { icStyle } /> :
        null
      }



      {
        type === "text_right" && !isSubmitting
        ? <p>{ text }</p>
        : null
      }

    </button>
  );

};

IconBtn.propTypes = {
  type: PropTypes.string,
  ariaLabel: PropTypes.any,
  btnFunction: PropTypes.func.isRequired,
  btnStyle: PropTypes.string,
  icStyle: PropTypes.string,
  isSubmitting: PropTypes.bool,
  isDisabled: PropTypes.bool,
  icon: PropTypes.string.isRequired
};

export default IconBtn;
