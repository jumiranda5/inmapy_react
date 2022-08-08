import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Icon from '../Icon/Icon';

const IconInput = props => {

  const { label, icon, id, type, error, touched } = props;

  return (
    <>
      <div className= "input_container">
        <label className = 'input_label' htmlFor = { id }>
          { label }
        </label>

        <Icon path={ icon } icStyle='input_icon' />

        <Field
          className = { touched && error ? "input icon_input input_error" : "input icon_input"}
          id = { id }
          type = { type }
          name = { id }
          placeholder = ""/>

      </div>
      { touched && error && <p className="input_error_msg">{ error }</p>}
    </>
  );
};

IconInput.propTypes = {
  label: PropTypes.object,
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool
};

export default IconInput;
