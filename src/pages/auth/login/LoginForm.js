import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'formik';
import { FormattedMessage as Msg } from "react-intl";
import { Link } from 'react-router-dom';
import IconInput from '../../../components/Inputs/IconInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { icPerson } from '../../../assets/icons';
import ForgotPwdLink from '../../../components/Links/ForgotPasswordLink';

const LoginForm = props => {

  const { values, errors, touched, isSubmitting  } = props;

  return (
    <Form className="auth_form">

      <h1 className="headline"><Msg id="h_login"/></h1>

      <p className={ errors.errorMsg ? "form-error" : "" }>
        { errors.errorMsg }
      </p>

      <IconInput
        label={ <Msg id="label_user"/>}
        id = "user"
        type ="text"
        icon = { icPerson }
        touched = { touched.user }
        error = { errors.user }/>

      <PasswordInput
        label={<Msg id="label_password"/>}
        touched={ touched.password }
        error={ errors.password }/>

      <label htmlFor='rememberMe' className='ckb_container remember-label'>
        <Field
          className='remember-ckb'
          type="checkbox"
          name='rememberMe'
          id='rememberMe'
          checked={ values.rememberMe }/> <Msg id="label_rememberMe" />
      </label>

      <input
        type = "hidden"
        name = "_csrf"/>

      <SubmitButton
        btnText={ <Msg id="login"/> }
        btnStyle='submit-btn'
        isSubmitting={ isSubmitting }/>

      <ForgotPwdLink />

      <footer>
          <p><Msg id="newToInmapy"/> <Link to="/signup"><Msg id="signupLink"/></Link></p>
      </footer>

    </Form>

  );
};

LoginForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.any,
  touched: PropTypes.any,
  isSubmitting: PropTypes.bool
};

export default LoginForm;
