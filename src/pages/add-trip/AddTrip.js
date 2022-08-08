import React, { Component } from 'react';
import AddTripForm from './AddTripForm';
import { getOrientation } from '../../components/ImageEditor/helpers/getOrientation';
import { removeExif } from '../../components/ImageEditor/helpers/removeExif';
import { resetOrientation } from '../../components/ImageEditor/helpers/resetOrientation';
import { dataURLtoFile } from '../../components/ImageEditor/helpers/convertToFile';
import { connect } from 'react-redux';

class AddTrip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fileToCrop: null,
      cover: null,
      coverFile: null,
      cityList: [],
      albumList: [],
      trip: {}
    }
  }

  /* ----------------------------------
            Upload cover file
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

      this.props.history.push('/add/image-editor');

    }

    //e.target.value = null;

  }

  /* -----------------------------------------
            Get cover from cropper
  -------------------------------------------- */

  getCroppedImage = async (cover) => {
    const filename = `cover_${Date.now()}.jpg`;
    const coverFile = await this.convertResultToFile(cover, filename);

    this.setState({
      cover: cover,
      coverFile: coverFile
    });
  }

  convertResultToFile = (cover, filename) => {
    return new Promise((resolve, reject) => {
      try {
        const coverFile = dataURLtoFile(cover, filename);
        console.log(`coverFile: ${coverFile}`);
        resolve(coverFile);
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  /* -----------------------------------------
                Get city list
  -------------------------------------------- */

  updateCityList = (cityList) => {
    this.setState({ cityList: cityList});
  }

  /* -----------------------------------------
                  Get Albums
  -------------------------------------------- */

  updateAlbumList = (albumList) => {
    console.log(`updated list => ${JSON.stringify(albumList)}`);
    this.setState({ albumList: albumList });
  }

  /* -----------------------------------------
                   Get Trip
  -------------------------------------------- */

  getTripToSubmit = (trip) => {
    this.setState({trip: trip});
  }

  /* -----------------------------------------
                    Render
  -------------------------------------------- */

  render() {

    console.log('Render AddTrip.');

    const { history, session } = this.props;
    const {
      fileToCrop,
      cover,
      coverFile,
      cityList,
      albumList,
      trip
    } = this.state;

    return (
      <AddTripForm
        history = { history }
        session = { session }
        onFileUpload = { this.onFileUpload }
        fileToCrop = { fileToCrop }
        getCroppedImage = { this.getCroppedImage }
        cover = { cover }
        coverFile = { coverFile }
        cityList = { cityList }
        updateCityList = { this.updateCityList }
        albumList = { albumList }
        updateAlbumList = { this.updateAlbumList }
        getTripToSubmit = { this.getTripToSubmit }
        trip = { trip }
       />
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session,
    error: state.session.error
  }
}

export default connect(mapStateToProps)(AddTrip);
