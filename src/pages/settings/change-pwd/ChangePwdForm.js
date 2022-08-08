import React from 'react';
import { Form } from 'formik';
import { FormattedMessage as Msg } from "react-intl";
import PasswordInput from '../../../components/Inputs/PasswordInput'
import SaveCancel from '../../../components/Buttons/SaveCancel';
import ForgotPwdLink from '../../../components/Links/ForgotPasswordLink';

const ChangePwdForm = props => {

  const { errors, touched, isSubmitting, onCancel } = props;

  return (

    <Form className="auth_form">

      <h1 className="headline"><Msg id="h_change_password"/></h1>

      <p className={ errors.errorMsg ? "form-error" : "" }>
        { errors.errorMsg }
      </p>

      <PasswordInput
        label={<Msg id="label_password_new"/>}
        touched={ touched.new_password }
        error={ errors.new_password }
        isNewPwd={ true }/>

      <PasswordInput
        label={<Msg id="label_password"/>}
        touched={ touched.password }
        error={ errors.password }/>

      <input
        type = "hidden"
        name = "_csrf"/>

      <SaveCancel
        saveText = { <Msg id="button_submit"/> }
        cancelText = { <Msg id="button_cancel"/> }
        isSubmitting = { isSubmitting }
        cancelFunction = { onCancel }
      />

      <ForgotPwdLink />

    </Form>

  );
};

export default ChangePwdForm;
