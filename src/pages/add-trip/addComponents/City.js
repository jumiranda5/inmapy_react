import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as Msg } from "react-intl";
import { messages } from '../../../utils/i18n';
import { nav_locale } from '../../../utils/nav_location';
import {services} from '@tomtom-international/web-sdk-services';
import SearchBox from '@tomtom-international/web-sdk-plugin-searchbox';
import { getRegion } from '../../../maps/_utils/regionsUtils';
import NextPrev from '../../../components/Buttons/NextPrev';
import Icon from '../../../components/Icon/Icon';
import IconBtn from '../../../components/Buttons/IconBtn';
import { icLocation, icClose } from '../../../assets/icons';

class City extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityList: this.props.cityList,
      lastItem: null,
      cityToRemove: null,
      cityIdList: []
    };
  }

  componentDidMount() {

    const navLocale = navigator.language;
    console.log(navLocale);
    let placeholder;
    let noResults;

    const locale = nav_locale();
    locale === "pt" ?
    placeholder = messages.pt.placeholder_add_city:
    placeholder = messages.en.placeholder_add_city;
    locale === "pt" ?
    noResults = messages.pt.no_results :
    noResults = messages.en.no_results;

    // Options for the fuzzySearch service
    const searchOptions = {
      key: process.env.REACT_APP_TOMTOM_KEY,
      language: navLocale,
      limit: 5,
      idxSet: "Geo"
    };

    // Options for the autocomplete service
    const autocompleteOptions = {
      key: process.env.REACT_APP_TOMTOM_KEY,
      language: navLocale
    };

    const searchBoxOptions = {
      idleTimePress: 200,
      minNumberOfCharacters: 2,
      searchOptions: searchOptions,
      autocompleteOptions: autocompleteOptions,
      noResultsMessage: noResults,
      placeholder: placeholder,
      disablePOIs: true
    };

    const ttSearchBox = new SearchBox(services, searchBoxOptions);
    const searchBoxHTML = ttSearchBox.getSearchBoxHTML();

    document.getElementById("searchbox").appendChild(searchBoxHTML);

    ttSearchBox.on('tomtom.searchbox.resultsfound', this.handleResultsFound);
    ttSearchBox.on('tomtom.searchbox.resultselected', this.handleResultSelection);

  }

  /* ----------------------------------
            TOMTOM SEARCHBOX
  ------------------------------------- */

  handleResultsFound = (event) => {
    if (event.data.results
      && event.data.results.fuzzySearch) {

      const results = event.data.results.fuzzySearch.results;
      return results;

    }
  }

  handleResultSelection = (event) => {
    if (this.isFuzzySearchResult(event)) {
      const result = event.data.result;
      const city = this.cityObject(result);

      const idList = this.state.cityIdList;
      this.setState({cityIdList: [...idList, result.id]});

      console.log('===================');
      console.log(city);
      console.log('===================');
      console.log(event.data);

      console.log(`id List: ${this.state.cityIdList}`);

      if (!idList.includes(result.id)) {

        this.setState({ cityList: [...this.state.cityList, city] });

        this.props.updateCityList(this.state.cityList);

        this.animateLastItem();

      }
    }
  }

  isFuzzySearchResult = (event) => {
    return !('matches' in event.data.result);
  }

  cityObject(result) {

    const region = getRegion(result.address.countryCode);
    const latitude = result.position.lat;
    const longitude = result.position.lng;
    const countryCode = result.address.countryCode;
    const country = result.address.country;
    const city = result.address.municipality
              || result.address.countrySubdivision
              || result.address.countrySecondarySubdivision
              || result.address.country
              || '';
    const countrySubdivision = result.address.countrySubdivision
                            || result.address.countrySecondarySubdivision
                            || result.address.municipality
                            || result.address.country
                            || '';
    const countrySubdivisionName = result.address.countrySubdivisionName || '';
    const countrySecondarySubdivision = result.address.countrySecondarySubdivision || '';

    return {
      key: `${latitude}${longitude}`,
      cityId: result.id,
      countryCode: countryCode,
      country: country,
      city: city,
      state: countrySubdivision,
      stateName: countrySubdivisionName,
      secSubdivision: countrySecondarySubdivision,
      region: region,
      location: { type: "Point", coordinates: [ longitude, latitude ] },
    }
  }

  removeCity = (e) => {

    const target = e.target.id;

    console.log(`Remove : ${target}`);

    //Animate removed item:
    this.setState({ cityToRemove: target }, () => {
      console.log(`City to remove: ${this.state.cityToRemove}`);
      setTimeout(() => {
        this.setState({
          cityList: this.state.cityList.filter(
            (city) => {
              return city.cityId !== target
            }
          ),
          cityIdList: this.state.cityIdList.filter(
            (cityId) => {
              return cityId !== target
            }
          ),
          cityToRemove: null
        }, () => {
          this.props.updateCityList(this.state.cityList);
        });
        console.log(this.state.cityIdList);
      }, 600);
    });
  }

  /* -----------------------------------------
                Item Animation
  -------------------------------------------- */

  animateLastItem = () => {
    const { cityList }  = this.state;
    if (cityList.length > 0) {
      const last = cityList.length - 1;
      const lastId = cityList[last].id;
      this.setState({lastItem: lastId});
    }
  }

  /* -----------------------------------------
                  Next Button
  -------------------------------------------- */

  btnNextFunc = () => {
    this.props.history.push('/add/album');
  }

  /* -----------------------------------------
                    Render
  -------------------------------------------- */

  render() {

    const { cityList, lastItem, cityToRemove } = this.state;

    const addAnimation = 'animate_last_city';
    const removeAnimation = 'animate_remove_city'

    return (
      <fieldset>

        <div id="searchbox"></div>

        {
          cityList.length === 0 ?
          <div className="cities_empty flex-center-row">
            No city added.
          </div>
          :
          <ul className = 'cities_ul'>

            { cityList.map((city) =>

              <li key = { city.cityId } className = {
                `city_li flex-center-row ${lastItem === city.cityId ? addAnimation : null} ${ cityToRemove === city.cityId ? removeAnimation: null}`
                }>

                <div className="flex-center-row city_li_div">
                  <div className="city_li_icon_container flex-center-row">
                    <Icon
                      path={ icLocation }
                      icStyle="ic_location"/>
                  </div>

                  <div className="city_p_container">
                    <p className="ellipsize city_p">{city.city}</p>
                    <p className="ellipsize state_p">
                      {`${city.state} - ${city.country}`}
                    </p>
                  </div>
                </div>

                <IconBtn
                  id={ city.cityId }
                  ariaLabel={<Msg id="aria_remove_city"/>}
                  btnFunction={ this.removeCity }
                  btnStyle="close_btn"
                  icon={ icClose }
                  icStyle="ic_btn_remove"
                />

              </li>
            )}

          </ul>
        }

        <NextPrev
          isDisabled = { cityList.length === 0 ? true : false }
          btnNextFunc = { this.btnNextFunc }
          history = { this.props.history }/>

      </fieldset>
    );
  }
}

City.propTypes = {
  history: PropTypes.any.isRequired,
  cityList: PropTypes.array.isRequired,
  updateCityList: PropTypes.func.isRequired
};

export default City;
