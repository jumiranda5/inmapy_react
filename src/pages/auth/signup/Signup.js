import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { signupSchema } from '../../../utils/yup_validation';
import { connect } from 'react-redux';
import * as sessionActions from '../../../redux/actions/sessionActions';
import SignupForm from './SignupForm';
import { nav_locale } from '../../../utils/nav_location';
import { authErrors } from '../../../utils/auth_errors';

const locale = nav_locale();
let lang;
if (locale === "pt") lang = "pt";
else lang = "en";
const errMessages = authErrors(lang);

const Signup = (props) => {

  const { session, signUp, history } = props;

  return (

    <Formik

      initialValues = {{
        email: '',
        username: '',
        password: '',
        errorMsg: '',
        rememberMe: false,
        _csrf: session.csrfToken || ''
      }}

      validationSchema = { signupSchema }

      onSubmit = {
        async (values, { setSubmitting, setErrors }) => {

          setSubmitting(true);

          const data = {
            email: values.email,
            username: values.username,
            password: values.password,
            rememberMe: values.rememberMe,
            _csrf: values._csrf
          }

          try {
            await signUp(data, lang);
            setSubmitting(false);
            history.push('/');
          }
          catch (error) {

            setSubmitting(false);

            if (error) {
              console.log(error);
              const errStatus = error.data.status || error.status;
              console.log(`Error => ${ errStatus } `);

              switch (errStatus) {
                case(419):
                  setErrors({ username: errMessages.username_unique });
                  break;
                case(420):
                  setErrors({ email: errMessages.email_unique });
                  break;
                case(422):
                  setErrors({ errorMsg: errMessages.error_validation });
                  break;
                case(403):
                  setErrors({ errorMsg: errMessages.error_csrf });
                  break;
                default:
                  setErrors({errorMsg: errMessages.error_ops});
              }
            }
            else {
              //setErrors({errorMsg: errMessages.error_network});
              history.push('/network-error');
            }
          }
        }
      }>

      {({ errors, touched, isSubmitting }) => (

        <div className="auth clearfix">

          <SignupForm
            errors = { errors }
            touched = { touched }
            isSubmitting = { isSubmitting }/>

        </div>

      )}

    </Formik>
  );
};

Signup.propTypes = {
  session: PropTypes.object,
  logIn: PropTypes.func
};

function mapStateToProps(state) {
  return {
    session: state.session,
    error: state.session.error
  }
}

const mapDispatchToProps = {
  signUp: sessionActions.signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
