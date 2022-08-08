import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import { FormattedMessage as Msg } from "react-intl";
import IconInput from '../../../components/Inputs/IconInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import { icPerson, icMailOut } from '../../../assets/icons';
import SubmitButton from '../../../components/Buttons/SubmitButton';

const SignupForm = props => {

  const { errors, touched, isSubmitting } = props;

  return (
    <Form className="auth_form">

      <h1 className="headline"><Msg id="h_signup"/></h1>

      <p className={ errors.errorMsg ? "form-error" : "" }>
        { errors.errorMsg }
      </p>

      <IconInput
        label={ <Msg id="label_username"/>}
        id = "username"
        type ="text"
        icon = { icPerson }
        touched = { touched.username }
        error = { errors.username }/>

      <IconInput
        label={ <Msg id="label_email"/>}
        id="email"
        type ="email"
        icon = { icMailOut }
        touched={ touched.email }
        error={ errors.email }/>

      <PasswordInput
        label={<Msg id="label_password"/>}
        touched={ touched.password }
        error={ errors.password }/>

      <input
        type = "hidden"
        name = "_csrf"/>

      <p className="terms">
        <Msg id="signup_terms_1"/><br/>
        <Link to='/terms'><Msg id="signup_terms_2"/></Link>
      </p>

      <SubmitButton
        btnText={ <Msg id="signup"/> }
        isSubmitting={ isSubmitting }/>

      <footer>
          <p><Msg id="have_account"/> <Link to="/login"><Msg id="login"/></Link></p>
      </footer>

    </Form>

  );
};

SignupForm.propTypes = {
  errors: PropTypes.any,
  touched: PropTypes.any,
  isSubmitting: PropTypes.bool
};

export default SignupForm;
