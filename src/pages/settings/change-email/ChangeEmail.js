import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as sessionActions from '../../../redux/actions/sessionActions';
import { Formik } from 'formik';
import { changeEmailSchema } from '../../../utils/yup_validation';
import ChangeEmailForm from './ChangeEmailForm';
import { nav_locale } from '../../../utils/nav_location';
import { authErrors } from '../../../utils/auth_errors';

const locale = nav_locale();
let lang;
if (locale === "pt") lang = "pt";
else lang = "en";
const errMessages = authErrors(lang);

const ChangeEmail = (props) => {

  const { history, session, updateEmail } = props;

  useEffect(() => {
    if(session.userId === "visitor" || session.userId === "") {
      history.push('/login');
    }
  });

  const onCancel = () => {
    console.log(history);
    history.push('/settings');
  }

  return (
    <Formik

      initialValues = {{
        new_email: '',
        password: '',
        _csrf: session.csrfToken
      }}

      validationSchema = { changeEmailSchema }

      onSubmit = {
        async (values, { setSubmitting, setErrors }) => {

          setSubmitting(true);

          const data = {
            username: session.username,
            new_email: values.new_email,
            password: values.password,
            _csrf: values._csrf
          }

          try {
            const headers = { 'Lang': lang }
            await updateEmail(data, headers);
            setSubmitting(false);
            history.push('/settings/change-email/success');
          }
          catch(error) {

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
              history.push('/network-error');
            }
          }


          /**



          catch (error) {


           */
        }
      }>

      {({ errors, touched, isSubmitting }) => (

        <ChangeEmailForm
          userEmail = { session.email }
          errors = { errors }
          touched = { touched }
          isSubmitting = { isSubmitting }
          onCancel = { onCancel }/>

      )}

    </Formik>
  );
};

ChangeEmail.propTypes = {
  session: PropTypes.object,
  updateEmail: PropTypes.func
};

function mapStateToProps(state) {
  return {
    session: state.session,
    error: state.session.error
  }
}

const mapDispatchToProps = {
  updateEmail: sessionActions.updateEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail);
