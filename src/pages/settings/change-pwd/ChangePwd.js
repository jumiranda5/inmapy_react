import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { postWithHeaders } from '../../../configAxios';
import { Formik } from 'formik';
import ChangePwdForm from './ChangePwdForm';
import { changePwdSchema } from '../../../utils/yup_validation';
import { nav_locale } from '../../../utils/nav_location';
import { authErrors } from '../../../utils/auth_errors';

const locale = nav_locale();
let lang;
if (locale === "pt") lang = "pt";
else lang = "en";
const errMessages = authErrors(lang);

const ChangePwd = (props) => {

  const { history, session } = props;

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
        new_password: '',
        password: ''
      }}

      validationSchema = { changePwdSchema }

      onSubmit = {
        async (values, { setSubmitting, setErrors }) => {

          setSubmitting(true);

          const data = {
            password: values.password,
            new_password: values.new_password,
            _csrf: session.csrfToken,
            user: session.username
          }

            try {
              const headers = { 'Lang': lang }
              const route = `/api/change-password`
              const res = await axios(postWithHeaders(route, data, headers));
              console.log(`Response: ${res.data.message}`);
              setSubmitting(false);
              history.push('/settings/change-password/success');
            }
            catch (error) {

              setSubmitting(false);

              if (error.response) {
                console.log(error.response);
                const errStatus = error.response.data.status || error.response.status;
                console.log(`Error => ${ errStatus } `);
                console.log(`Error => ${ error.response.data.message } `);

                switch (errStatus) {
                  case(401):
                    setErrors({ errorMsg: errMessages.wrong_credentials });
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
                console.log(error.message);
                this.props.history.push('/network-error');
              }
            }

        }
      }>

      {({ errors, touched, isSubmitting }) => (

        <div className="auth clearfix">

          <ChangePwdForm
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
    session: state.session
  }
}

export default connect(mapStateToProps)(ChangePwd);
