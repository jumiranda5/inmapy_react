import React from 'react';
import PropTypes from 'prop-types';
import icLandscape from '../../assets/landscape-24px.svg';
import icAddPhoto from '../../assets/ic_add_photo.svg'
import Avatar from '../Avatar/Avatar';

const FileInput = props => {

  const { type, file, label, onFileUpload, alt, index } = props;

  if (type === "Avatar") {
    return (
      <>
        <label htmlFor="edit_avatar" className="edit_avatar_label">
          <Avatar avatar={ file } avatarStyle="edit_avatar" alt={ alt }/>
          <p>{ label }</p>
        </label>

        <input
          id="edit_avatar"
          name="edit_avatar"
          type="file"
          accept="image/jpeg, image/png"
          onChange={ onFileUpload } />
      </>
    );
  }
  else if (type === "Cover") {

    let imgSrc;
    file === "" ? imgSrc = icLandscape : imgSrc = file;

    let imgStyle;
    file === "" ? imgStyle = "add_cover_img" : imgStyle = "add_cover_img_chosen";

    return (
      <>
        <label htmlFor="add_cover" className="add_cover_label">

          <div className="add_cover_image_container flex-center-row">
            <img src={ imgSrc } className={ imgStyle } alt={ alt }/>
          </div>

          <p>{ label }</p>

        </label>

        <input
          id="add_cover"
          name="add_cover"
          type="file"
          accept="image/jpeg, image/png"
          onChange={ onFileUpload } />
      </>
    );

  }
  else if(type === "Album") {
    return (
      <>
        <label htmlFor={index}>
          <img src={ icAddPhoto } className="add_album_img" alt=''/>
          <div className="visually-hidden"> <p>{ label }</p> </div>
        </label>

        <input
          id={index}
          className="add_album_input"
          type="file"
          accept="image/jpeg, image/png"
          onChange={ onFileUpload }
          multiple={true}/>
      </>
    );
  }

};

FileInput.propTypes = {
  file: PropTypes.any,
  type: PropTypes.string.isRequired,
  alt: PropTypes.object,
  label: PropTypes.object.isRequired,
  onFileUpload: PropTypes.func.isRequired
};

export default FileInput;
