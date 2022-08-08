import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import WorldMap from './WorldMap';
import CentralAsia from './Asia/CentralAsia';
import EasternAsia from './Asia/EasternAsia';
import WesternAsia from './Asia/WesternAsia';
import SouthernAsia from './Asia/SouthernAsia';
import SouthEasternAsia from './Asia/SouthEasternAsia';

const AsiaMap = React.memo(({countryList}) => {

  const [regionsCount, setRegionsCount] = useState(0);
  const [region, setRegion] = useState("");

  useEffect(() => {

    const regionList = [];

    for (let i = 0; i < countryList.length; i++) {

      const countryCode = countryList[i];
      const reg = getRegion(countryCode);

      if(!regionList.includes(reg)) regionList.push(reg);

    }

    setRegionsCount(regionList.length);

    if (regionList.length === 1) setRegion(regionList[0]);

  }, [countryList]);

  const getRegion = (countryCode) => {

    switch(countryCode) {
      case("UZ") :
      case("TM") :
      case("TJ") :
      case("KG") :
      case("KZ") : return "Central Asia";
      case("TW") :
      case("KR") :
      case("KP") :
      case("MN") :
      case("JP") :
      case("CN") :
      case("MO") :
      case("HK") : return "Eastern Asia";
      case("VN") :
      case("TL") :
      case("TH") :
      case("SG") :
      case("PH") :
      case("MY") :
      case("LA") :
      case("ID") :
      case("KH") :
      case("MM") :
      case("BN") : return "South Eastern Asia";
      case("LK") :
      case("PK") :
      case("NP") :
      case("MV") :
      case("IR") :
      case("BT") :
      case("BD") :
      case("AF") :
      case("IN") : return "Southern Asia";
      case("YE") :
      case("AE") :
      case("TR") :
      case("SY") :
      case("SA") :
      case("QA") :
      case("OM") :
      case("LB") :
      case("KW") :
      case("JO") :
      case("IL") :
      case("PS") :
      case("IQ") :
      case("GE") :
      case("99") :
      case("CY") :
      case("BH") :
      case("AZ") :
      case("AM") : return "Western Asia";
      default : return "none";
    }

  }

  if (regionsCount > 1) return <><WorldMap countryList={ countryList }/></>;
  else {
    switch(region) {
      case "Central Asia" : return (<><CentralAsia countryList={countryList}/></>);
      case "Eastern Asia" : return (<><EasternAsia countryList={countryList}/></>);
      case "South Eastern Asia" : return (<><SouthEasternAsia countryList={countryList}/></>);
      case "Southern Asia" : return (<><SouthernAsia countryList={countryList}/></>);
      case "Western Asia" : return (<><WesternAsia countryList={countryList}/></>);
      default: return (<><WorldMap countryList={ countryList }/></>);
    }
  }

});

AsiaMap.propTypes = {
  countryList: PropTypes.array.isRequired
};

export default AsiaMap;
