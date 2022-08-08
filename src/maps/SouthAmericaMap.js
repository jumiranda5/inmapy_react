import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SouthAmerica from './Americas/SouthAmerica';
import Brasil from './Americas/SouthAmerica/Brasil';
import Argentina from './Americas/SouthAmerica/Argentina';
import Chile from './Americas/SouthAmerica/Chile';
import Bolivia from './Americas/SouthAmerica/Bolivia';
import Peru from './Americas/SouthAmerica/Peru';
import Colombia from './Americas/SouthAmerica/Colombia';
import Ecuador from './Americas/SouthAmerica/Ecuador';
//import FalklandIslands from './Americas/SouthAmerica/FalklandIslands';
//import FrenchGuiana from './Americas/SouthAmerica/FrenchGuiana';
import Guiana from './Americas/SouthAmerica/Guiana';
import Paraguai from './Americas/SouthAmerica/Paraguai';
import Suriname from './Americas/SouthAmerica/Suriname';
import Uruguai from './Americas/SouthAmerica/Uruguai';
import Venezuela from './Americas/SouthAmerica/Venezuela';
//import WorldMap from './WorldMap';

const SouthAmericaMap = React.memo(({cityList}) => {

  const [countryCount, setCountryCount] = useState(0);
  const [countryCode, setCountryCode] = useState("");
  const [countries, setCountries] = useState([]);
  const [countrySubdivisions, setCountrySubdivisions]= useState([]);

  useEffect(() => {

    console.log("Rendering South America map...");

    if (cityList) {

      const countryList = [];
      const countrySubdivisionList = [];

      for (let i = 0; i < cityList.length; i++) {

        const country = cityList[i].countryCode;
        const countrySubdivision = cityList[i].state;

        if(!countryList.includes(country)) countryList.push(country);
        if(!countrySubdivisionList.includes(countrySubdivision)) countrySubdivisionList.push(countrySubdivision);

      }

      setCountryCount(countryList.length);
      setCountries(countryList);

      if (countryList.length === 1) {
        setCountryCode(countryList[0]);
        setCountrySubdivisions(countrySubdivisionList);
      }

    }

  }, [cityList]);

  if (countryCount > 1) return <><SouthAmerica countries={ countries }/></>
  else {
    switch(countryCode) {
      case "VE" : return (<><Venezuela countrySubdivisions={countrySubdivisions}/></>);
      case "UY" : return (<><Uruguai countrySubdivisions={countrySubdivisions}/></>);
      case "FK" : return (<><SouthAmerica countries={countries}/></>);
      case "SR" : return (<><Suriname countrySubdivisions={countrySubdivisions}/></>);
      case "PE" : return (<><Peru countrySubdivisions={countrySubdivisions}/></>);
      case "PY" : return (<><Paraguai countrySubdivisions={countrySubdivisions}/></>);
      case "GF" : return (<><SouthAmerica countries={countries}/></>);
      case "EC" : return (<><Ecuador countrySubdivisions={countrySubdivisions}/></>);
      case "GY" : return (<><Guiana countrySubdivisions={countrySubdivisions}/></>);
      case "CO" : return (<><Colombia countrySubdivisions={countrySubdivisions}/></>);
      case "CL" : return (<><Chile countrySubdivisions={countrySubdivisions}/></>);
      case "BO" : return (<><Bolivia countrySubdivisions={countrySubdivisions}/></>);
      case "BR" : return (<><Brasil countrySubdivisions={countrySubdivisions}/></>);
      case "AR" : return (<><Argentina countrySubdivisions={countrySubdivisions}/></>);
      default: return (<><SouthAmerica countryList={ countries }/></>);
    }
  }

});

SouthAmericaMap.propTypes = {
  cityList: PropTypes.array.isRequired
};

export default SouthAmericaMap;
