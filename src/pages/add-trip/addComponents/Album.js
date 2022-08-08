import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../../../components/Inputs/SelectInput';
import { FormattedMessage as Msg } from "react-intl";
import { messages } from '../../../utils/i18n';
import { nav_locale } from '../../../utils/nav_location';
import NextPrev from '../../../components/Buttons/NextPrev';
import Icon from '../../../components/Icon/Icon';
import FileInput from '../../../components/Inputs/FileInput';
import IconBtn from '../../../components/Buttons/IconBtn'
import { icLocation, icRemove } from '../../../assets/icons';
import { getOrientation } from '../../../components/ImageEditor/helpers/getOrientation';
import { removeExif } from '../../../components/ImageEditor/helpers/removeExif';
import { resetOrientation } from '../../../components/ImageEditor/helpers/resetOrientation';

class Album extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityList: this.props.cityList,
      albums: this.props.albumList,
      cities: [],
      states: [],
      countries: [],
      days: [],
      listType: 'city',
      isAlertOpen: false,
      imgToDelete: {
        img: null,
        from: null
      }
    };
  }

  componentDidMount() {

    const { cityList } = this.state;
    const { history, albumList } = this.props;

    console.log("=======================================");
    console.log("=== Albums: " + JSON.stringify(albumList));
    console.log("=======================================");

    if( cityList.length === 0) {
      history.push('/add/city');
    }

    const cities = [];
    const states = [];
    const countries = [];

    for (let i = 0; i < cityList.length; i++) {

      const city = cityList[i].city;
      const state = cityList[i].state;
      const stateName = cityList[i].stateName;
      const country = cityList[i].country;

      console.log("=======================================");
      console.log("=== City: " + city + " ===");
      console.log("=== State: " + state + " ===");
      console.log("=== State name: " + stateName + " ===");
      console.log("=== Country: " + country + " ===");
      console.log("=======================================");

      let state2;
      stateName ? state2 = stateName : state2 = state;

      const cityData = {
        title: city,
        subtitle: `${state2} - ${country}`,
        imgs: []
      }

      const stateData = {
        title: state2,
        subtitle: country,
        imgs: []
      }

      const countryData = {
        title: country,
        subtitle: null,
        imgs: []
      }

      if (cities.filter(e => e.title === city && e.subtitle === `${city}-${state}`).length === 0) {
        cities.push(cityData);
      }

      if (states.filter(e => e.title === state).length === 0) {
        states.push(stateData);
      }

      if (countries.filter(e => e.title === country).length === 0) {
        countries.push(countryData);
      }

      if (i === cityList.length - 1) {

        let initialAlbum;
        if (albumList.length === 0) initialAlbum = cities;
        else initialAlbum = albumList;

        this.setState({
          cities: cities,
          states: states,
          countries: countries,
          albums: initialAlbum
        });
      }
    }

  }

  getSelectedListType = (type) => {

    const { cities, states, countries, days } = this.state;

    switch(type) {
      case 'city':
        this.setState({ albums: cities });
        break;
      case 'state':
        this.setState({ albums: states });
        break;
      case 'country':
        this.setState({ albums: countries });
        break;
      case 'day':
        this.setState({ albums: days });
        break;
      default:
        this.setState({ albums: cities });
    }

    console.log("Select item click");
  }

  /* -----------------------------------------
                File Functions
  -------------------------------------------- */

  onFileUpload = async (e) => {

    console.log('File input clicked...');

    let files;

    e.preventDefault();

    const target = e.target.id;

    const str = target;
    const res = str.split("-");
    console.log(res[1]);

    const albumIndex = res[1];

    console.log(e.target.value);

    files = e.target.files;
    console.log(`files: ${ JSON.stringify(files) }`);

    const { albums } = this.state;

    const photoList = albums[albumIndex].imgs;

    if (files) {

      for (let i = 0; i < files.length; i++) {

        const file = files[i];

        const noExifFile = await removeExif(file);
        console.log(`No exif: ${noExifFile}`);

        let blob;
        if (noExifFile) blob = URL.createObjectURL(noExifFile);
        else blob = URL.createObjectURL(file);

        console.log(`Blob: ${blob}`);

        const orientation = await getOrientation(file);

        const dataUrl = await resetOrientation(blob, orientation);

        photoList.push([dataUrl, file]);

        if (i === files.length - 1) {

          albums[albumIndex].imgs = photoList;

          this.setState({ albums: albums });
        }

      }

    }

    console.log(albums);

    this.props.updateAlbumList(albums);

    //e.target.value = null; /* TODO: Unhandled Rejection (TypeError): Cannot set property 'value' of null */

    //console.log(e.target.value);

  }

  onImageClick = (e) => {

    console.log(e.target.src);
    console.log(e.target.id);

    this.setState({
      isAlertOpen: true,
      imgToDelete: {
        img: e.target.src,
        from: e.target.id
      }
    });

  }

  onRemove = () => {

    const { imgToDelete, albums } = this.state;

    console.log(imgToDelete);

    const d = albums[imgToDelete.from].imgs.filter(
      (img) => {
        console.log(img[0]);
        console.log(imgToDelete.img);
        return img[0] !== imgToDelete.img
      }
    );

    console.log(d);

    albums[imgToDelete.from].imgs = d;

    console.log(`Final: ${JSON.stringify(albums)}`);

    this.setState({
      albums: albums,
      isAlertOpen: false
    });

    this.props.updateAlbumList(albums);

  }

  onCancelRemove = () => {
    this.setState({
      isAlertOpen: false
    });
  }

  /* -----------------------------------------
                 Next Button
  -------------------------------------------- */

  btnNextFunc = () => {
    this.props.history.push('/add/post');
  }

  /* -----------------------------------------
                    Render
  -------------------------------------------- */

  render() {

    const { albums, isAlertOpen, imgToDelete } = this.state;
    const idSelect = "select_album";

    console.log(albums);

    const locale = nav_locale();
    let msg;
    locale === "pt" ?
    msg = messages.pt :
    msg = messages.en;

    const options = [
      {
        value: msg.option_city,
        key: "city"
      },
      {
        value: msg.option_state,
        key: "state"
      },
      {
        value: msg.option_country,
        key: "country"
      }
    ];

    return (

      <>

        {
          isAlertOpen

          ?

          <div className = "alert_remove_img_container flex-center-row">

            <div className="alert_remove_img">

              <h2>Remover foto?</h2>

              <img src={ imgToDelete.img } alt="" className="alert_img"/>

              <div className="next-prev flex-center-row">

                <button
                  className = 'button cancel-btn prev_btn'
                  type = 'button'
                  onClick = { this.onCancelRemove }>

                  <Msg id="button_cancel"/>

                </button>

                <IconBtn
                  isDisabled = { false }
                  btnFunction={ this.onRemove }
                  type='text_right'
                  text={<Msg id="button_remove"/>}
                  btnStyle = 'next_btn'
                  icStyle = 'ic_btn_next'
                  icon = { icRemove }/>

              </div>

            </div>

          </div>

          :

          <fieldset className="add_albums_fieldset">

            <SelectInput
              id = {idSelect}
              options = { options }
              label = {<Msg id="label_select_album"/>}
              handleSelection = { this.getSelectedListType }
            />

            <ul className = 'add_album_ul'>

              { albums.map((album, index) =>

                <li key = { index } className = 'add_album_li'>

                  <div className="album_li_div flex-center-row-vertical">

                    <div className="album_icon_container flex-center-row">
                      <Icon
                        path={ icLocation }
                        icStyle="ic_location ic_location_album"
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

                    <FileInput
                      type = "Album"
                      onFileUpload = { this.onFileUpload }
                      label = {<Msg id="label_add_photo_input"/>}
                      index = { `input-${index}` }
                    />

                  </ul>

                </li>
              )}

            </ul>

            <NextPrev
              btnNextFunc = { this.btnNextFunc }
              history = { this.props.history }/>

          </fieldset>

        }

      </>


    );
  }
}

Album.propTypes = {
  cityList: PropTypes.array.isRequired,
  history: PropTypes.any.isRequired,
  albumList: PropTypes.array.isRequired,
  updateAlbumList: PropTypes.func.isRequired
};

export default Album;
