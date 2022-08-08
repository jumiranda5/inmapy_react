import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Europe from './Europe/Europe';
import Belarus from './Europe/EasternEurope/Belarus'; //BY
import Bulgaria from './Europe/EasternEurope/Bulgaria'; //BG
import Czechia from './Europe/EasternEurope/Czechia'; //CZ
import Hungary from './Europe/EasternEurope/Hungary'; //HU
import Moldova from './Europe/EasternEurope/Moldova'; //MD
import Poland from './Europe/EasternEurope/Poland'; //PL
import Romania from './Europe/EasternEurope/Romania'; //RO
import Slovakia from './Europe/EasternEurope/Slovakia'; //SK
import Ukraine from './Europe/EasternEurope/Ukraine'; //UA
import Denmark from './Europe/NorthernEurope/Denmark'; //DK
import Estonia from './Europe/NorthernEurope/Estonia'; //EE
import FaroeIslands from './Europe/NorthernEurope/FaroeIslands'; //FO
import Finland from './Europe/NorthernEurope/Finland'; //FI
import GB from './Europe/NorthernEurope/GB'; //GB
import Iceland from './Europe/NorthernEurope/Iceland'; //IS
import Ireland from './Europe/NorthernEurope/Ireland'; //IE
import Latvia from './Europe/NorthernEurope/Latvia'; //LV
import Lithuania from './Europe/NorthernEurope/Lithuania'; //LT
import Norway from './Europe/NorthernEurope/Norway'; //NO
import Sweden from './Europe/NorthernEurope/Sweden'; //SE
import Albania from './Europe/SouthernEurope/Albania'; //AL
import Andorra from './Europe/SouthernEurope/Andorra'; //AD
import BosniaAndHerz from './Europe/SouthernEurope/BosniaAndHerz'; //BA
import Croatia from './Europe/SouthernEurope/Croatia'; //HR
import Greece from './Europe/SouthernEurope/Greece'; //GR
import Italy from './Europe/SouthernEurope/Italy'; //IT
import Kosovo from './Europe/SouthernEurope/Kosovo'; //XK
import Macedonia from './Europe/SouthernEurope/Macedonia'; //MK
import Malta from './Europe/SouthernEurope/Malta'; //MT
import Montenegro from './Europe/SouthernEurope/Montenegro'; //ME
import Portugal from './Europe/SouthernEurope/Portugal'; //PT
import Serbia from './Europe/SouthernEurope/Serbia'; //RS
import Slovenia from './Europe/SouthernEurope/Slovenia'; //ES
import Spain from './Europe/SouthernEurope/Spain'; //SI
import Austria from './Europe/WesternEurope/Austria'; //AT
import Belgium from './Europe/WesternEurope/Belgium'; //BE
import France from './Europe/WesternEurope/France'; //FR
import Germany from './Europe/WesternEurope/Germany'; //DE
import Liechenstein from './Europe/WesternEurope/Liechenstein'; //LI
import Luxembourg from './Europe/WesternEurope/Luxembourg'; //LU
import Monaco from './Europe/WesternEurope/Monaco'; //MC
import Netherlands from './Europe/WesternEurope/Netherlands'; //NL
import Switzerland from './Europe/WesternEurope/Switzerland'; //CH
import England from './Europe/NorthernEurope/England'; // ENG

const EuropeMap = React.memo(({cityList}) => {

  const [countryCount, setCountryCount] = useState(0);
  const [countryCode, setCountryCode] = useState("");
  const [countries, setCountries] = useState([]);
  const [countrySubdivisions, setCountrySubdivisions]= useState([]);

  useEffect(() => {

    console.log("Rendering Europe map...");

    const countryList = [];
    const countrySubdivisionList = [];
    const countrySubdivisionList2 = [];
    const GBcountries = [];

    for (let i = 0; i < cityList.length; i++) {

      const country = cityList[i].countryCode;
      const countrySubdivision = cityList[i].state;
      const countrySecDiv = cityList[i].secSubdivision;

      if (country === "GG" || country === "JE" || country === "IM" || country === "GB") {

        let gbDiv;
        if (country === "GB") gbDiv = countrySubdivision;
        else gbDiv = country;

        if (!GBcountries.includes(gbDiv)) GBcountries.push(gbDiv);

        if (!countryList.includes("GB")) countryList.push("GB");

        if(!countrySubdivisionList.includes(countrySubdivision)) countrySubdivisionList.push(countrySubdivision);

        if(countrySubdivision === "ENG" && !countrySubdivisionList2.includes(countrySecDiv)) {
          countrySubdivisionList2.push(countrySecDiv);
        }

      }
      else if (country === "ES" || country === "BE") {
        if(!countryList.includes(country)) countryList.push(country);
        if(!countrySubdivisionList.includes(countrySecDiv)) countrySubdivisionList.push(countrySecDiv);
      }
      else {
        if(!countryList.includes(country)) countryList.push(country);
        if(!countrySubdivisionList.includes(countrySubdivision)) countrySubdivisionList.push(countrySubdivision);
      }
    }

    setCountryCount(countryList.length);
    setCountries(countryList);

    if (countryList.length === 1 &&
        countryList[0] === "GB" &&
        GBcountries.length === 1 &&
        GBcountries[0] === "ENG") {

      setCountryCode("ENG");
      setCountrySubdivisions(countrySubdivisionList2);

    }

    else if (countryList.length === 1) {
      setCountryCode(countryList[0]);
      setCountrySubdivisions(countrySubdivisionList);
    }

  }, [cityList]);

  if (countryCount > 1) return (<><Europe countries={ countries }/></>);
  else {
    switch(countryCode) {
      case "BY" : return (<><Belarus countrySubdivisions={countrySubdivisions}/></>);
      case "BG" : return (<><Bulgaria countrySubdivisions={countrySubdivisions}/></>);
      case "CZ" : return (<><Czechia countrySubdivisions={countrySubdivisions}/></>);
      case "HU" : return (<><Hungary countrySubdivisions={countrySubdivisions}/></>);
      case "MD" : return (<><Moldova countrySubdivisions={countrySubdivisions}/></>);
      case "PL" : return (<><Poland countrySubdivisions={countrySubdivisions}/></>);
      case "RO" : return (<><Romania countrySubdivisions={countrySubdivisions}/></>);
      case "SK" : return (<><Slovakia countrySubdivisions={countrySubdivisions}/></>);
      case "UA" : return (<><Ukraine countrySubdivisions={countrySubdivisions}/></>);
      case "DK" : return (<><Denmark countrySubdivisions={countrySubdivisions}/></>);
      case "EE" : return (<><Estonia countrySubdivisions={countrySubdivisions}/></>);
      case "FO" : return (<><FaroeIslands countrySubdivisions={countrySubdivisions}/></>);
      case "FI" : return (<><Finland countrySubdivisions={countrySubdivisions}/></>);
      case "GB" : return (<><GB countrySubdivisions={countrySubdivisions}/></>);
      case "IS" : return (<><Iceland countrySubdivisions={countrySubdivisions}/></>);
      case "IE" : return (<><Ireland countrySubdivisions={countrySubdivisions}/></>);
      case "LV" : return (<><Latvia countrySubdivisions={countrySubdivisions}/></>);
      case "LT" : return (<><Lithuania countrySubdivisions={countrySubdivisions}/></>);
      case "NO" : return (<><Norway countrySubdivisions={countrySubdivisions}/></>);
      case "SE" : return (<><Sweden countrySubdivisions={countrySubdivisions}/></>);
      case "AL" : return (<><Albania countrySubdivisions={countrySubdivisions}/></>);
      case "AD" : return (<><Andorra countrySubdivisions={countrySubdivisions}/></>);
      case "BA" : return (<><BosniaAndHerz countrySubdivisions={countrySubdivisions}/></>);
      case "HR" : return (<><Croatia countrySubdivisions={countrySubdivisions}/></>);
      case "GR" : return (<><Greece countrySubdivisions={countrySubdivisions}/></>);
      case "IT" : return (<><Italy countrySubdivisions={countrySubdivisions}/></>);
      case "XK" : return (<><Kosovo countrySubdivisions={countrySubdivisions}/></>);
      case "MK" : return (<><Macedonia countrySubdivisions={countrySubdivisions}/></>);
      case "MT" : return (<><Malta countrySubdivisions={countrySubdivisions}/></>);
      case "ME" : return (<><Montenegro countrySubdivisions={countrySubdivisions}/></>);
      case "PT" : return (<><Portugal cityList={cityList}/></>);
      case "RS" : return (<><Serbia countrySubdivisions={countrySubdivisions}/></>);
      case "ES" : return (<><Spain countrySubdivisions={countrySubdivisions}/></>);
      case "SI" : return (<><Slovenia countrySubdivisions={countrySubdivisions}/></>);
      case "AT" : return (<><Austria countrySubdivisions={countrySubdivisions}/></>);
      case "BE" : return (<><Belgium countrySubdivisions={countrySubdivisions}/></>);
      case "FR" : return (<><France countrySubdivisions={countrySubdivisions}/></>);
      case "DE" : return (<><Germany countrySubdivisions={countrySubdivisions}/></>);
      case "LI" : return (<><Liechenstein countrySubdivisions={countrySubdivisions}/></>);
      case "LU" : return (<><Luxembourg countrySubdivisions={countrySubdivisions}/></>);
      case "MC" : return (<><Monaco countrySubdivisions={countrySubdivisions}/></>);
      case "NL" : return (<><Netherlands countrySubdivisions={countrySubdivisions}/></>);
      case "CH" : return (<><Switzerland countrySubdivisions={countrySubdivisions}/></>);
      case "ENG" : return (<><England countrySubdivisions={countrySubdivisions}/></>);
      default : return (<><Europe countries={ countries }/></>);
    }
  }
});

EuropeMap.propTypes = {
  cityList: PropTypes.array.isRequired
};

export default EuropeMap;
