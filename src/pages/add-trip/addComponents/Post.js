import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dataURLtoFile } from '../../../components/ImageEditor/helpers/convertToFile';
import { resizeImg } from '../../../components/ImageEditor/helpers/resizeImg';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { icLocation } from '../../../assets/icons';
import ArrowCompass from '../../../assets/compass-arrow-light.svg';
import Icon from '../../../components/Icon/Icon';
import { FormattedMessage as Msg } from "react-intl";
import Map from '../../../maps/Map';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingTrip: true,
      trip: {
        title: "",
        about: "",
        cityList: [],
        albumList: [],
        files: []
      },
      albumListPost: []
    };
  }

  componentDidMount = () => {

    const { title, cityList, history } = this.props;

    if (title === "" || title === null) history.push('/add');
    else if( cityList.length === 0) history.push('/add/city');

    this.prepareTrip();

  }

  prepareTrip = async () => {
    const {
      title,
      about,
      coverFile,
      cityList,
      albumList,
      getTripToSubmit
    } = this.props;

    // Get Albums (not empty)
    const albumListPost = [];

    // Build files array (Start with the cover file);
    // Build cover aws url

    const files = [];
    let cover = "";

    if (coverFile) {
      files.push(coverFile);
      cover = `https://inmapy-albums.s3.amazonaws.com/${coverFile.name}`;
    }

    // Loop through albumList to get img files

    const albums = [];

    if (albumList.length > 0) {

      for (let i = 0; i < albumList.length; i++) {

        console.log('looping...');

        const album = albumList[i];

        console.log(` == Prepare album ${album.title} ==`);

        const imgs = album.imgs;

        if (imgs.length > 0) {
          albumListPost.push(album);
          this.setState({albumListPost: albumListPost});
        }

        const albumAwsUrls = [];

        for (let i2 = 0; i2 < imgs.length; i2++) {

          const blob = imgs[i2][0];
          const file = imgs[i2][1];
          const filename = `${Date.now()}-${file.name}`;

          console.log(`Image blob: ${blob}`);
          console.log(`Image file: ${file}`);
          console.log(`Image name: ${filename}`);

          const awsUrl = `https://inmapy-albums.s3.amazonaws.com/${filename}`;
          albumAwsUrls.push(awsUrl);

          const newFile = await resizeImg(blob, 450);
          const imgFile = await this.convertResultToFile(newFile, filename);

          files.push(imgFile);

          if (i2 === imgs.length - 1) {

            /**
             * album obj => !!!
              "mediaUrlList": [ "photo 1", "photo 2", "photo 3"],
              "albumTitle": "Test album 1",
              "albumSubtitle": "Testing - Album",
              "iconId": 0
             */

            const albumObj = {
              albumTitle: album.title,
              albumSubtitle: album.subtitle,
              mediaUrlList: albumAwsUrls,
              iconId: 0
            }

            albums.push(albumObj);

          }

          if (i === albums.length - 1) {

            const trip = {
              title: title,
              about: about,
              cover: cover,
              cityList: cityList,
              albumList: albums,
              files: files
            }

            this.setState({trip: trip});

            console.log(trip);

            getTripToSubmit(trip);

            console.log(albumList);
            console.log(albums);

          }

        }

      }

    }

    else {

      const trip = {
        title: title,
        about: about,
        cover: cover,
        cityList: cityList,
        albumList: albums,
        files: files
      }

      this.setState({trip: trip});

      console.log(trip);

      getTripToSubmit(trip);

      console.log(albumList);
      console.log(albums);

    }
  }

  convertResultToFile = (img, filename) => {
    return new Promise((resolve, reject) => {
      try {
        const newImgFile = dataURLtoFile(img, filename);
        resolve(newImgFile);
      }
      catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  render() {

    const cover = this.props.cover;
    const trip = this.state.trip;
    const albums = this.state.albumListPost;
    const cityList = this.state.trip.cityList;

    let coverSrc;
    cover === "" || cover === null ? coverSrc = ArrowCompass : coverSrc = cover;

    let description;
    trip.about ? description = trip.about : description = <Msg id="post_no_description"/>;

    return (
      <div className="add_post_container">

        { cityList.length > 0 ? <Map cityList = {cityList}/> : null }

        <ul className="add_post_cities_ul">

          { trip.cityList.map((city, index) =>

            <li key = { index }>
              <div className="flex-center-row city_li_div">

                <Icon
                  path={ icLocation }
                  icStyle="ic_location"/>


                <div className="city_p_container">
                  <p className="ellipsize city_p">{city.city}</p>
                  <p className="ellipsize state_p">
                    {`${city.state} - ${city.country}`}
                  </p>
                </div>
              </div>
            </li>

          )}

        </ul>

        <div className="add_post_title_container flex-center-row-vertical">
          <img className={cover === "" || cover === null? "add_post_cover_empty post_cover_img": "post_cover_img"} src={coverSrc} alt=""/>
          <div className="add_post_p_container">
            <p className="ellipsize title_p ">{trip.title}</p>
            <p className="ellipsize subtitle_p">{description}</p>
          </div>
        </div>

        <ul className="add_albums_ul post_albums_ul">

          { albums.map((album, index) =>

            <li key = { index } className = 'add_album_li'>
              <div className="album_li_div flex-center-row-vertical">

                <div className="album_icon_container flex-center-row">
                  <Icon
                    path={ icLocation }
                    icStyle="ic_location"
                  />
                </div>

                <div className="album_p_container">
                  <p className="ellipsize title_p">{ album.title }</p>
                  <p className="ellipsize subtitle_p">
                    { album.subtitle }
                  </p>
                </div>

              </div>

              <ul className="add_album_images_ul flex-row">

                { album.imgs.map((img, imgIndex) =>

                  <li key = { imgIndex }>
                    <img
                      id = { index.toString() }
                      src = { img[0] }
                      className="album_img"
                      alt = ""
                      onClick = { this.onImageClick }/>
                  </li>
                )}

              </ul>
            </li>

          )}

        </ul>

        <SubmitButton
          btnText={<Msg id="button_post"/>}
          isSubmitting={this.props.isSubmitting}/>

      </div>
    );
  }
}

Post.propTypes = {
  albumList: PropTypes.array,
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  coverFile: PropTypes.any,
  cityList: PropTypes.array.isRequired,
  getTripToSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
};

export default Post;
