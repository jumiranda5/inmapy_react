import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NorthAmerica from './Americas/NorthAmerica';
import Caribbean from './Americas/Caribbean';
import USA from './Americas/NorthAmerica/USA';
import Bermuda from './Americas/NorthAmerica/Bermuda';
import Canada from './Americas/NorthAmerica/Canada';
import Greenland from './Americas/NorthAmerica/Greenland';
import Mexico from './Americas/NorthAmerica/Mexico'
import SaintPierreAndMiquelon from './Americas/NorthAmerica/SaintPierreAndMiquelon'
import Belize from './Americas/CentralAmerica/Belize';
import CostaRica from './Americas/CentralAmerica/CostaRica';
import ElSalvador from './Americas/CentralAmerica/ElSalvador';
import Guatemala from './Americas/CentralAmerica/Guatemala';
import Honduras from './Americas/CentralAmerica/Honduras';
import Nicaragua from './Americas/CentralAmerica/Nicaragua';
import Panama from './Americas/CentralAmerica/Panama';
import Cuba from './Americas/Caribe/Cuba';

const NorthAmericaMap = React.memo(({cityList}) => {

  const [countryCount, setCountryCount] = useState(0);
  const [countryCode, setCountryCode] = useState("");
  const [countries, setCountries] = useState([]);
  const [countrySubdivisions, setCountrySubdivisions]= useState([]);
  const [subRegions, setSubregions] = useState([]);

  useEffect(() => {

    console.log("Rendering North America map...");

    if (cityList) {

      const countryList = [];
      const countrySubdivisionList = [];
      const subs = [];

      for (let i = 0; i < cityList.length; i++) {

        const country = cityList[i].countryCode;
        const countrySubdivision = cityList[i].state;
        const subregion = getSubregion(country);

        if(!countryList.includes(country)) countryList.push(country);
        if(!countrySubdivisionList.includes(countrySubdivision)) countrySubdivisionList.push(countrySubdivision);
        if(!subs.includes(subregion)) subs.push(subregion);

      }

      setCountryCount(countryList.length);
      setCountries(countryList);
      setSubregions(subs);

      if (countryList.length === 1) {
        setCountryCode(countryList[0]);
        setCountrySubdivisions(countrySubdivisionList);
      }

    }

  }, [ cityList ]);

  const getSubregion = (countryCode) => {
    switch(countryCode) {
      case("VI") :
      case("PR") :
      case("AI") :
      case("KY") :
      case("VG") :
      case("TC") :
      case("MS") :
      case("TT") :
      case("VC") :
      case("LC") :
      case("KN") :
      case("BQ") :
      case("JM") :
      case("HT") :
      case("GD") :
      case("MQ") :
      case("GP") :
      case("MF") :
      case("BL") :
      case("DO") :
      case("DM") :
      case("BB") :
      case("BS") :
      case("SX") :
      case("AG") :
      case("AW") : return "Caribbean";
      default : return "North America";
    }
  }

  if (subRegions.length > 1) return <><NorthAmerica countries={ countries }/></>
  else {
    if (subRegions[0] === "Caribbean") return <><Caribbean countries={ countries }/></>
    else {
      if (countryCount === 1) {
        switch (countryCode) {
          case("CA") : return <><Canada countrySubdivisions={countrySubdivisions}/></>
          case("BM") : return <><Bermuda countrySubdivisions={countrySubdivisions}/></>
          case("US") : return <><USA countrySubdivisions={countrySubdivisions}/></>
          case("GL") : return <><Greenland countrySubdivisions={countrySubdivisions}/></>
          case("MX") : return <><Mexico countrySubdivisions={countrySubdivisions}/></>
          case("PM") : return <><SaintPierreAndMiquelon countrySubdivisions={countrySubdivisions}/></>
          case("PA") : return <><Panama countrySubdivisions={countrySubdivisions}/></>
          case("NI") : return <><Nicaragua countrySubdivisions={countrySubdivisions}/></>
          case("HN") : return <><Honduras countrySubdivisions={countrySubdivisions}/></>
          case("GT") : return <><Guatemala countrySubdivisions={countrySubdivisions}/></>
          case("SV") : return <><ElSalvador countrySubdivisions={countrySubdivisions}/></>
          case("CR") : return <><CostaRica countrySubdivisions={countrySubdivisions}/></>
          case("BZ") : return <><Belize countrySubdivisions={countrySubdivisions}/></>
          case("CU") : return <><Cuba countrySubdivisions={countrySubdivisions}/></>
          default : return <><NorthAmerica countries={ countries }/></>
        }
      }
      else return <><NorthAmerica countries={ countries }/></>
    }
  }

});

NorthAmericaMap.propTypes = {
  cityList: PropTypes.array.isRequired
};

export default NorthAmericaMap;
