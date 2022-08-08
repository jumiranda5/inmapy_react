import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import { FormattedMessage as Msg } from "react-intl";
import IconInput from '../../../components/Inputs/IconInput';
import { icMailOut } from '../../../assets/icons';
import SaveCancel from '../../../components/Buttons/SaveCancel';

const ForgotPwdForm = props => {

  const { errors, touched, isSubmitting, onCancel } = props;

  return (
    <Form className="auth_form">

      <p className={ errors.errorMsg ? "form-error" : "" }>
        { errors.errorMsg }
      </p>

      <h1 className="headline"><Msg id="h_forgot_password"/></h1>

      <p className="forgot-form-text"><Msg id="forgot_password_text"/></p>

      <IconInput
        label={ <Msg id="label_email"/>}
        id="email"
        type ="email"
        icon = { icMailOut }
        touched={ touched.email }
        error={ errors.email }/>

      <input
        type = "hidden"
        name = "_csrf"/>

      <SaveCancel
        saveText = { <Msg id="button_submit"/> }
        cancelText = { <Msg id="button_cancel"/> }
        isSubmitting = { isSubmitting }
        cancelFunction = { onCancel }
      />

    </Form>

  );
};

ForgotPwdForm.propTypes = {
  errors: PropTypes.any,
  touched: PropTypes.any,
  isSubmitting: PropTypes.bool,
  onCancel: PropTypes.func.isRequired
};

export default ForgotPwdForm;
