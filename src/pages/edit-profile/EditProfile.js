import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as sessionActions from '../../redux/actions/sessionActions';
import { Route, Switch } from 'react-router-dom';
import ImageEditor from '../../components/ImageEditor/ImageEditor';
import { getOrientation } from '../../components/ImageEditor/helpers/getOrientation';
import { removeExif } from '../../components/ImageEditor/helpers/removeExif';
import { resetOrientation } from '../../components/ImageEditor/helpers/resetOrientation';
import { dataURLtoFile } from '../../components/ImageEditor/helpers/convertToFile';
import EditProfileForm from './EditProfileForm';
import { editProfileSchema } from '../../utils/yup_validation';
import { nav_locale } from '../../utils/nav_location';
import { authErrors } from '../../utils/auth_errors';
const locale = nav_locale();

let lang;
if (locale === "pt") lang = "pt";
else lang = "en";

const errMessages = authErrors(lang);

class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileToCrop: null,
      avatar: this.props.session.avatar,
      avatarFile: null,
      filename: null,
      fileToDelete: null
    };
  }

  /* ----------------------------------
            Upload avatar file
  ------------------------------------- */

  onFileUpload = async (e) => {

    e.preventDefault();

    let file = e.target.files[0];
    console.log(`file: ${ file }`);

    console.log(file);

    if (file) {

      // remove exif data...
      const noExifFile = await removeExif(file);

      console.log(`No exif: ${noExifFile}`);

      let blob;
      if (noExifFile) blob = URL.createObjectURL(noExifFile);
      else blob = URL.createObjectURL(file);

      console.log(`Blob: ${blob}`);

      const orientation = await getOrientation(file);
      const dataUrl = await resetOrientation(blob, orientation);
      this.setState({fileToCrop: dataUrl});

      const { session, history } = this.props;
      history.push(`/${session.username}/edit-profile/image-editor`);

    }

    //e.target.value = null; => error

  }

  /* ---------------------------------------
            Get avatar from cropper
  ------------------------------------------ */

  getCroppedImage = async (avatar) => {
    const userId = this.props.session.userId;
    const filename = `${ userId }-${Date.now()}.jpg`;
    const avatarFile = await this.convertResultToFile(avatar, filename);
    const fileToDelete = await this.fileToDelete();

    this.setState({
      avatar: avatar,
      avatarFile: avatarFile,
      filename: filename,
      fileToDelete: fileToDelete
    });
  }

  convertResultToFile = (avatar, filename) => {
    return new Promise((resolve, reject) => {
      try {
        const avatarFile = dataURLtoFile(avatar, filename);
        console.log(`coverFile: ${avatarFile}`);
        resolve(avatarFile);
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  fileToDelete = () => { // Needed when replacing photo => s3 takes time to update
    return new Promise((resolve, reject) => {
      try {
        const fileToDeleteUrl = this.props.session.avatar;
        const fileToDeleteNameParts = fileToDeleteUrl.split('.com/');
        const fileToDeleteName = fileToDeleteNameParts[1];
        console.log(`file to delete: ${fileToDeleteName}`);
        resolve(fileToDeleteName);
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  /* ----------------------------------
                 Cancel
  ------------------------------------- */

  onCancel = () => {
    const { history, session } = this.props;
    history.push(`/${session.username}`);
  }

  /* -----------------------------------------
                    Render
  -------------------------------------------- */

  render() {

    const { session, history } = this.props;
    const { fileToCrop, avatar, avatarFile, filename, fileToDelete } = this.state;

    return (

      <Formik
        initialValues = {{
          username: session.username,
          name: session.name,
          _csrf: session.csrfToken
        }}

        validationSchema = { editProfileSchema }

        onSubmit = {
          async (values, { setSubmitting, setErrors }) => {

            setSubmitting(true);

            console.log(`Values: ${JSON.stringify(values)}`);

            let data;
            let headers;
            const userId = session.userId;
            const username = values.username;
            const name = values.name;

            if (avatarFile === null) {
              data = {
                username: username,
                name: name,
                msg: 'onlyJSON'
              }

              headers = {
                'Content-Type': 'application/json',
                'csrf-token' : session.csrfToken
              }
            }
            else {
              data = new FormData();
              data.append("avatar", avatarFile, filename);
              data.append('username', username);
              data.append('name', name);
              data.append('bucket', 'inmapy-avatars');
              data.append('fileToDelete', fileToDelete);

              headers = {
                'Accept': 'application/json',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                'csrf-token' : session.csrfToken
              }
            }

            try {
              await this.props.updateUser(data, headers, userId);
              setSubmitting(false);
              history.push(`/${username}`);
            }
            catch (error) {

              console.log(error);

              if (error) {
                console.log(error);
                const errStatus = error.data.status || error.status;
                console.log(`Error => ${ errStatus } `);

                switch (errStatus) {
                  case(419):
                    setErrors({ username: errMessages.username_unique });
                    break;
                  case(403):
                    setErrors({ errorMsg: errMessages.error_csrf });
                    break;
                  case(422):
                    setErrors({ errorMsg: errMessages.error_validation });
                    break;
                  default:
                    setErrors({errorMsg: errMessages.error_ops});
                }
              }
              else {
                setErrors({errorMsg: errMessages.error_network});
              }
              setSubmitting(false);
            }
          }
        }
      >

        {({ errors, touched, isSubmitting }) => (

          <Switch>
            <Route exact path={`/${session.username}/edit-profile`} render={
              () => <EditProfileForm
                      avatar = { avatar }
                      errors = { errors }
                      touched = { touched }
                      isSubmitting = { isSubmitting }
                      onFileUpload = { this.onFileUpload }
                      onCancel = { this.onCancel }
                    />
              }
            />
            <Route path={`/${session.username}/edit-profile/image-editor`} render={
              () => <ImageEditor
                      fileToCrop = { fileToCrop }
                      shape = 'round'
                      getCroppedImage = { this.getCroppedImage }
                      history = { history }/>
            } />
          </Switch>
        )}

      </Formik>
    );
  }
}

EditProfile.propTypes = {
  session: PropTypes.object,
  updateUser: PropTypes.func
};

function mapStateToProps(state) {
  return {
    session: state.session,
    error: state.session.error
  }
}

const mapDispatchToProps = {
  updateUser: sessionActions.updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
