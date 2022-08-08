import React from 'react';
import { FormattedMessage as Msg } from "react-intl";
import { Form } from 'formik';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import IconInput from '../../../components/Inputs/IconInput';
import { icMailOut } from '../../../assets/icons';
import SaveCancel from '../../../components/Buttons/SaveCancel';
import ForgotPwdLink from '../../../components/Links/ForgotPasswordLink';

const ChangeEmailForm = (props) => {

  const { errors, touched, isSubmitting, onCancel, userEmail } = props;

  return (
    <div className="auth clearfix">

      <Form className="auth_form">

        <h1 className="headline"><Msg id="h_change_email"/></h1>

        <p className={ errors.errorMsg ? "form-error" : "" }>
          { errors.errorMsg }
        </p>

        <p className="settings_user_email">{ userEmail }</p>

        <IconInput
          label={ <Msg id="label_email_new"/>}
          id="new_email"
          type ="new_email"
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

        <SaveCancel
          saveText = { <Msg id="button_submit"/> }
          cancelText = { <Msg id="button_cancel"/> }
          isSubmitting = { isSubmitting }
          cancelFunction = { onCancel }
        />

        <ForgotPwdLink />

      </Form>

    </div>
  );
};

export default ChangeEmailForm;
