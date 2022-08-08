import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Australia from './Oceania/Australia';
import NewZealand from './Oceania/NewZealand';
//import Fiji from './Oceania/Fiji';
import Oceania from './Oceania/Oceania';

const OceaniaMap = React.memo(({cityList}) => {

  const [countryCount, setCountryCount] = useState(0);
  const [countryCode, setCountryCode] = useState("");
  const [countries, setCountries] = useState([]);
  const [countrySubdivisions, setCountrySubdivisions]= useState([]);
  const [secDivs, setSecDivs] = useState([]);

  useEffect(() => {

    console.log("Rendering Oceania map...");

    const countryList = [];
    const countrySubdivisionList = [];
    const countrySecDivList = [];

    for (let i = 0; i < cityList.length; i++) {

      const country = cityList[i].countryCode;
      const countrySubdivision = cityList[i].state;
      const countrySecDiv = cityList[i].secSubdivision;

      if(!countryList.includes(country)) countryList.push(country);
      if(!countrySubdivisionList.includes(countrySubdivision)) countrySubdivisionList.push(countrySubdivision);
      if(!countrySecDivList.includes(countrySecDiv)) {
        countrySecDivList.push(countrySecDiv);
      }
    }

    setCountryCount(countryList.length);
    setCountries(countryList);

    console.log(countryList);

    if (countryList.length === 1) {
      setCountryCode(countryList[0]);
      setCountrySubdivisions(countrySubdivisionList);
      setSecDivs(countrySecDivList);
    }

  }, [cityList]);

  console.log(countries);

  if (countryCount > 1) return <><Oceania countryList={ countries }/></>
  else {
    switch (countryCode) {
      case("NZ") : return <><NewZealand countrySubdivisions={secDivs}/></>
      case("AU") : return <><Australia countrySubdivisions={countrySubdivisions}/> </>
      default : return <><Oceania countryList={ countries }/></>
    }
  }
});

OceaniaMap.propTypes = {
  cityList: PropTypes.array.isRequired
};

export default OceaniaMap;
