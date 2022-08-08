import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Icon from '../Icon/Icon';
import { icVisibilityOff, icVisibilityOn, icLockOut } from '../../assets/icons';

class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      type: "password"
    };
  }

  handleClick = () => {
    if (this.state.isVisible === false) {
      this.setState({
        isVisible: true,
        type: "text"
      });
    }
    else {
      this.setState({
        isVisible: false,
        type: "password"
      });
    }
  }

  render() {

    const { label, error, touched, isConfirm, isNewPwd } = this.props
    const isVisible = this.state.isVisible;
    const type = this.state.type;

    let id;
    let name;

    if (isConfirm) {
      id = "confirm";
      name = "confirm";
    }
    else if (isNewPwd) {
      id = "new_password";
      name = "new_password";
    }
    else {
      id = "password";
      name = "password";
    }

    return (
      <>
        <div className= "input_container">
          <label
            className = "input_label"
            htmlFor = { id }>
            { label }
          </label>

          <Icon path = { icLockOut } icStyle='input_icon'/>

          <Field
            className = { touched && error ? "input pwd_input input_error" : "input pwd_input"}
            id = { id }
            type = { type }
            name = { name }
            placeholder = ""/>

          <div onClick = { this.handleClick }>
            <Icon
              path = { isVisible ? icVisibilityOn : icVisibilityOff }
              icStyle={ isVisible ? "input_icon_pwd_visibility is_pwd_visible" : "input_icon_pwd_visibility"}
            />
          </div>

        </div>
        { touched && error && <p className="input_error_msg">{ error }</p>}
      </>
    );
  }
}

PasswordInput.propTypes = {
  label: PropTypes.object,
  error: PropTypes.string,
  touched: PropTypes.bool,
  isConfirm: PropTypes.bool,
  isNewPwd: PropTypes.bool
};

export default PasswordInput;
