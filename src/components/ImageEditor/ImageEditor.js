import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cropper from 'react-easy-crop';
import IconBtn from '../Buttons/IconBtn';
import { icClose, icDone } from '../../assets/icons';
import { FormattedMessage as Msg } from "react-intl";
import cropImage from './helpers/cropImage';
import { resizeImg } from './helpers/resizeImg';

class _ImageEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 1,
      croppedAreaPixels: null
    };
  }

  /* ----------------------------------
            Cropper functions
  ------------------------------------- */

  onCropChange = crop => {
    this.setState({ crop });
  }

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    this.setState({ croppedAreaPixels })
  }

  onZoomChange = zoom => {
    this.setState({ zoom })
  }

    /* -----------------------------------------
             Crop / Resize / Convert
  -------------------------------------------- */

  cropAndResizeImage = async () => {

    this.setState({ isLoading: true });

    const { fileToCrop, getCroppedImage } = this.props;
    const { croppedAreaPixels } = this.state;

    const croppedImage = await cropImage(fileToCrop, croppedAreaPixels);
    const cover = await resizeImg(croppedImage, 450);

    this.setState({
      isLoading: false,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 1,
      croppedAreaPixels: null,
    });

    getCroppedImage(cover);

    this.props.history.goBack();
  }

  /* ----------------------------------
            Close image editor
  ------------------------------------- */

  closeImageEditor = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {

    const { fileToCrop, shape } = this.props;
    const { crop, zoom, aspect, isLoading } = this.state;

    return (
      <div className="flex-center-column image-editor-container">

      <div className= "image-editor clearfix">

        <IconBtn
          btnFunction={ this.closeImageEditor }
          type='text_left'
          text={<Msg id="button_close"/>}
          ariaLabel = ''
          btnStyle = 'close_btn'
          icStyle = 'ic_btn_close'
          icon = { icClose } />

        <div className='cropper-container'>
          <Cropper
            ref={ cropper => { this.cropper = cropper; } }
            image={ fileToCrop }
            crop={ crop }
            zoom={ zoom }
            aspect={ aspect }
            cropShape={ shape }
            onCropChange={ this.onCropChange }
            onCropComplete={ this.onCropComplete }
            onZoomChange={ this.onZoomChange }
            showGrid={ false }
          />

        </div>

        <IconBtn
          btnFunction={ this.cropAndResizeImage }
          type='text_right'
          text={<Msg id="button_crop"/>}
          ariaLabel = ''
          btnStyle = 'next_btn'
          icStyle = 'ic_btn_next'
          icon = { icDone }
          isSubmitting = { isLoading }/>

      </div>
    </div>
    );
  }
}

_ImageEditor.propTypes = {
  fileToCrop: PropTypes.any.isRequired,
  getCroppedImage: PropTypes.func.isRequired,
  shape: PropTypes.string.isRequired
};

export default _ImageEditor;
