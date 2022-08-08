import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import axios from 'axios';
import { get, postWithHeaders } from '../../../configAxios';
import { resetPwdSchema } from '../../../utils/yup_validation';
import ResetPwdForm from './ResetPwdForm';
import { authErrors } from '../../../utils/auth_errors';
import { nav_locale } from '../../../utils/nav_location';

const locale = nav_locale();
let lang;
if (locale === "pt") lang = "pt";
else lang = "en";
const errMessages = authErrors(lang);

class ResetPwd extends Component {

  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      message: null,
      invalidToken: false,
    };
  }

  componentDidMount() {

    this.verifyToken();

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  verifyToken = () => {

    const { match, history } = this.props;
    const route = `/api/reset-password/${ match.params.token }`

    axios(get(route)).then((res) => {
      console.log(res.data.message);
      if (this._isMounted) this.setState({ isLoading: false });
    })
    .catch((error) => {
      const err = error.response;
      if (err) {
        console.log(`Error: ${err.data.message}`);
        console.log(`Error status: ${err.status}`);
        if (err.status === 403) {
          if (this._isMounted) this.setState({ invalidToken: true });
          history.push('/reset-password/invalid-token');
        }
      }
      else {
        console.log(error);
      }
      if (this._isMounted) this.setState({ isLoading: false, });
    });
  }

  onCancel = () => {
    const { history } = this.props;
    console.log(history);
    history.push('/');
  }

  render() {
    return (
      <Formik

        initialValues = {{
          password: '',
          confirm: '',
          _csrf: this.props.session.csrfToken
        }}

        validationSchema = { resetPwdSchema }

        onSubmit = {
          async (values, { setSubmitting, setErrors }) => {

            setSubmitting(true);

            const data = {
              password: values.password,
              confirm: values.confirm,
              _csrf: values._csrf
            }

            try {
              const headers = { 'Lang': lang }
              const route = `/api/reset-password/${this.props.match.params.token}`
              const res = await axios(postWithHeaders(route, data, headers));
              console.log(`Response: ${res.data.message}`);
              setSubmitting(false);
              this.props.history.push('/reset-password/success');
            }
            catch (error) {

              setSubmitting(false);

              if (error.response) {
                console.log(`Error: ${JSON.stringify(error.response)}`);
                error.response.data.message === "invalid csrf token" ?
                setErrors({errorMsg: errMessages.error_csrf}) :
                this.setState({ invalidToken: true });

              }
              else {
                console.log(error.message);
                //setErrors({errorMsg: errMessages.error_network});
                this.props.history.push('/network-error');
              }
            }
          }

        }>

        {({ errors, touched, isSubmitting }) => (

          <div className="auth clearfix">

            <ResetPwdForm
              errors = { errors }
              touched = { touched }
              isSubmitting = { isSubmitting }
              onCancel = { this.onCancel } />

          </div>

        )}

      </Formik>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session,
    error: state.session.error
  }
}

export default connect(mapStateToProps)(ResetPwd);
