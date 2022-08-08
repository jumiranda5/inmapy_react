import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as sessionActions from '../../../redux/actions/sessionActions';
import { Formik } from 'formik';
import { loginSchema } from '../../../utils/yup_validation';
import { authErrors } from '../../../utils/auth_errors';
import { nav_locale } from '../../../utils/nav_location';
import LoginForm from './LoginForm';

const locale = nav_locale();
let lang;
if (locale === "pt") lang = "pt";
else lang = "en";
const errMessages = authErrors(lang);

const Login = (props) => {

  const { session, logIn, history } = props;

  return (
    <Formik

      initialValues = {{
        user: '',
        password: '',
        errorMsg: '',
        rememberMe: false,
        _csrf: session.csrfToken
      }}

      validationSchema = { loginSchema }

      onSubmit = {
        async (values, { setErrors, setSubmitting }) => {

          setSubmitting(true);

          const data = {
            user: values.user,
            password: values.password,
            rememberMe: values.rememberMe,
            _csrf: values._csrf
          }

          try {
            await logIn(data);
            setSubmitting(false);
            history.push('/');
          }
          catch (error) {

            if (error) {

              console.log(error);
              const errStatus = error.data.status || error.status;
              console.log(`Error => ${ errStatus } `);
              console.log(`Error => ${ error.data.message } `);

              switch (errStatus) {
                case(401):
                  setErrors({ errorMsg: errMessages.wrong_credentials });
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
              setSubmitting(false);
            }
            else {
              setSubmitting(false);
              //setErrors({errorMsg: errMessages.error_network});
              history.push('/network-error');
            }
          }

        }
      }>

      {({values, errors, touched, isSubmitting }) => (

        <div className="auth clearfix">

          <LoginForm
            values = { values }
            errors = { errors }
            touched = { touched }
            isSubmitting = { isSubmitting }/>

        </div>

      )}

    </Formik>
  );
};

Login.propTypes = {
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
  logIn: sessionActions.logIn,
  loadSession: sessionActions.loadSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
