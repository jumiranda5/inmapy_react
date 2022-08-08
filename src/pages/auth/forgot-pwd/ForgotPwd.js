import React from 'react';
import { Formik } from 'formik';
import { forgotPwdSchema } from '../../../utils/yup_validation';
import { connect } from 'react-redux';
import axios from 'axios';
import { postWithHeaders } from '../../../configAxios';
import { nav_locale } from '../../../utils/nav_location';
import ForgotPwdForm from './ForgotPwdForm';
import { authErrors } from '../../../utils/auth_errors';

const locale = nav_locale();
let lang;
if (locale === "pt") lang = "pt";
else lang = "en";
const errMessages = authErrors(lang);


const ForgotPwd = (props) => {

  const { history, session } = props;

  const onCancel = () => {
    console.log(history);
    history.push('/login');
  }

  return (
    <Formik

      initialValues = {{
        email: '',
        _csrf: session.csrfToken
      }}

      validationSchema = { forgotPwdSchema }

      onSubmit = {
        async (values, { setSubmitting, setErrors }) => {

          setSubmitting(true);

          const data = {
            email: values.email,
            _csrf: values._csrf
          }

          try {

            const headers = { 'Lang': lang }

            const res = await axios(postWithHeaders('/api/forgot-password', data, headers));

            console.log(res.data.message);
            setSubmitting(false);

            history.push('/forgot-password/success');

          }
          catch (error) {

            if (error.response) {
              console.log(error.response);
              const errStatus = error.response.data.status || error.response.status;
              console.log(`Error => ${ errStatus } `);
              console.log(`Error => ${ error.response.data.message } `);

              switch (errStatus) {
                case(401):
                  setErrors({ errorMsg: errMessages.email_not_found });
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
              history.push('/network-error');
            }

          }

        }
      }>

      {({ errors, touched, isSubmitting }) => (

        <div className="auth">

          <ForgotPwdForm
            errors = { errors }
            touched = { touched }
            isSubmitting = { isSubmitting }
            onCancel = { onCancel }/>

        </div>

      )}

    </Formik>
  );
};

function mapStateToProps(state) {
  return {
    session: state.session,
    error: state.session.error
  }
}

export default connect(mapStateToProps)(ForgotPwd);
