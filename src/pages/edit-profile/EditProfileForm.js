import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import { FormattedMessage as Msg } from "react-intl";
import TextInput from '../../components/Inputs/TextInput';
import FileInput from '../../components/Inputs/FileInput';
import SaveCancel from '../../components/Buttons/SaveCancel';

const EditProfileForm = props => {

  const {
    avatar,
    onFileUpload,
    onCancel,
    errors,
    touched,
    isSubmitting
  } = props;

  return (
    <Form className="auth_form edit_profile">

      <FileInput
        type = "Avatar"
        file = { avatar }
        label = {<Msg id="label_edit_avatar" />}
        onFileUpload={ onFileUpload }
        alt = { <Msg id="alt_avatar" /> }/>

      <p className={ errors.errorMsg ? "form-error" : "" }>
        { errors.errorMsg }
      </p>

      <TextInput
        label={ <Msg id="label_username"/>}
        id="username"
        name = "username"
        type ="text"
        touched={ touched.username }
        error={ errors.username }/>

      <TextInput
        label={ <Msg id="label_name"/>}
        id="name"
        name = "name"
        type ="text"
        touched={ touched.name }
        error={ errors.name }/>

      <SaveCancel
        saveText = { <Msg id="button_save"/> }
        cancelText = { <Msg id="button_cancel"/> }
        isSubmitting = { isSubmitting }
        cancelFunction = { onCancel }
      />

    </Form>

  );
};

EditProfileForm.propTypes = {
  avatar: PropTypes.string,
  onFileUpload: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.any,
  isSubmitting: PropTypes.bool
};

export default EditProfileForm;
