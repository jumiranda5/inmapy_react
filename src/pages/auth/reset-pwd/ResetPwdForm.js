import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import { FormattedMessage as Msg } from "react-intl";
import PasswordInput from '../../../components/Inputs/PasswordInput'
import SaveCancel from '../../../components/Buttons/SaveCancel';

const ResetPwdForm = props => {

  const { errors, touched, isSubmitting, onCancel } = props;

  return (
    <Form className="auth_form">

      <h1 className="headline"><Msg id="h_password_reset"/></h1>

      <p className={ errors.errorMsg ? "form-error" : "" }>
        { errors.errorMsg }
      </p>

      <PasswordInput
        label={<Msg id="label_password"/>}
        touched={ touched.password }
        error={ errors.password }/>

      <PasswordInput
        label = { <Msg id="label_password_confirm"/> }
        error = { errors.confirm_password }
        touched = { touched.confirm_password }
        isConfirm = { true }/>

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

ResetPwdForm.propTypes = {
  errors: PropTypes.any,
  touched: PropTypes.any,
  isSubmitting: PropTypes.bool,
  onCancel: PropTypes.func.isRequired
};

export default ResetPwdForm;
