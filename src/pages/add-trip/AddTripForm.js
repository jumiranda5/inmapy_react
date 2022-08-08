import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { FormattedMessage as Msg } from "react-intl";
import { Route, Switch } from 'react-router-dom';
import { addTripSchema } from '../../utils/yup_validation';
import Title from './addComponents/Title';
import Cover from './addComponents/Cover';
import City from './addComponents/City';
import Album from './addComponents/Album';
import Post from './addComponents/Post';
import ImageEditor from '../../components/ImageEditor/ImageEditor';
import axios from 'axios';
import { postWithHeaders } from '../../configAxios';

const AddTripForm = props => {

  console.log('Render AddTripForm Component');

  const {
    history,
    session,
    onFileUpload,
    getCroppedImage,
    fileToCrop,
    cover,
    coverFile,
    cityList,
    updateCityList,
    updateAlbumList,
    albumList,
    getTripToSubmit,
    trip
  } = props;

  console.log(albumList);

  return (
    <div className="page-body">

      <Formik

        initialValues = {{
          title: "",
          about: ""
        }}

        validationSchema = { addTripSchema }

        onSubmit = {
          async (values, { setSubmitting }) => {

            setSubmitting(true);

            console.log(JSON.stringify(trip));

            let data;
            let headers;

            const files = trip.files;
            const cities = trip.cityList;
            const albums = trip.albumList;

            console.log(cities);

            data = new FormData();
            data.append('userId', session.userId);
            data.append('title', trip.title);
            data.append('about', trip.about);
            data.append('cities', JSON.stringify(cities));
            data.append('albums', JSON.stringify(albums));
            data.append('bucket', 'inmapy-albums');

            for (let i = 0; i < files.length; i++) {
              data.append("file", files[i], files[i].name);
            }

            headers = {
              'Accept': 'application/json',
              'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
              'csrf-token' : session.csrfToken
            }

            try {
              const res = await axios(postWithHeaders('/api/trip/add', data, headers));
              console.log(res);
              setSubmitting(false);
              history.push('/');
            }
            catch (error) {
              console.log(error);
              setSubmitting(false);
              history.push('/network-error');
            }

          }
        }>

        {({values, errors, touched, isSubmitting }) => (

          <Form className="add_form">

            <h1 className="headline"><Msg id="h_add_trip"/></h1>

            <Switch>
              <Route exact path={`/add`} render={
                () => <Title
                        values={ values }
                        error={ errors.title }
                        touched={ touched }
                        history={ history }/>
                }
              />
              <Route path={`/add/cover`} render={
                () => <Cover
                        cover={ cover }
                        onFileUpload={ onFileUpload }
                        history={ history }/>
                }/>
              <Route path="/add/image-editor" render={
                () => <ImageEditor
                        fileToCrop = { fileToCrop }
                        shape = 'square'
                        filePrefix = 'cover'
                        getCroppedImage = { getCroppedImage }
                        history = { history }/>
              } />
              <Route path={`/add/city`} render={
                () => <City
                        history = { history }
                        cityList = { cityList }
                        updateCityList = { updateCityList }/>
              }/>
              <Route path={`/add/album`} render={
                () => <Album
                        history = { history }
                        cityList = { cityList }
                        albumList = { albumList }
                        updateAlbumList = { updateAlbumList }/>
              }/>
              <Route path={`/add/post`} render={
                () => <Post
                        history = { history }
                        cityList = { cityList }
                        albumList = { albumList }
                        title = { values.title }
                        about = { values.about }
                        cover = { cover }
                        coverFile = { coverFile }
                        getTripToSubmit = { getTripToSubmit }
                        isSubmitting = { isSubmitting }/>
              }/>
            </Switch>

          </Form>
        )}

      </Formik>

    </div>
  );
};

AddTripForm.propTypes = {
  history: PropTypes.any.isRequired,
  onFileUpload: PropTypes.func.isRequired,
  getCroppedImage: PropTypes.func.isRequired,
  fileToCrop: PropTypes.any,
  cover: PropTypes.string,
  coverFile: PropTypes.any,
  cityList: PropTypes.array.isRequired,
  updateCityList: PropTypes.func.isRequired,
  albumList: PropTypes.array.isRequired,
  updateAlbumList: PropTypes.func.isRequired,
  getTripToSubmit: PropTypes.func.isRequired,
  trip: PropTypes.object.isRequired
};

export default AddTripForm;
