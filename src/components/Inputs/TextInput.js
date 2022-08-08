import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const TextInput = props => {

  const { label, id, type, name, error, touched, multiline } = props;

  let fieldAs;
  multiline ? fieldAs = "textarea" : fieldAs = "input";

  let fieldStyle;
  multiline ? fieldStyle = 'input input_multiline' : fieldStyle = 'input';

  return (
    <>
      <div className= "input_container">
        <label className = 'input_label' htmlFor = { id }>
          { label }
        </label>

        <Field
          as = { fieldAs }
          className = { touched && error ? `${fieldStyle} input_error` : fieldStyle }
          id = { id }
          type = { type }
          name = { name }
          placeholder = ""/>

      </div>

      { touched && error && <p className="input_error_msg">{ error }</p>}

    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.object,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
  multiline: PropTypes.bool
};

export default TextInput;
