import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import WorldMap from './WorldMap';
import SouthAmericaMap from './SouthAmericaMap';
import NorthAmericaMap from './NorthAmericaMap';
import AsiaMap from './AsiaMap';
import AfricaMap from './AfricaMap'
import OceaniaMap from './OceaniaMap';
import EuropeMap from './EuropeMap';

/*

  => Verificar quantas regioẽs
    - Se tiver mais de 1 => mapa do mundo
    - Caribe e America do Norte => Separar no componente da América do Norte
    - Europa => Gran Bretanha - mapa separado

*/

const Map = React.memo(({cityList}) => {

  const [regionsCount, setRegionsCount] = useState(0);
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    console.log("Rendering map...");

    if (cityList) {

      const regionList = [];
      const countryList = [];

      for (let i = 0; i < cityList.length; i++) {

        const region = cityList[i].region;
        const country = cityList[i].countryCode;

        console.log(`Region: ${region}`);

        if(!regionList.includes(region)) regionList.push(region);
        if(!countryList.includes(country)) countryList.push(country);

      }

      setRegionsCount(regionList.length);
      setCountries(countryList);

      console.log(`Region List : ${regionList}`);

      if (regionList.length === 1) setRegion(regionList[0]);

    }

  }, [ cityList ]);

  if (regionsCount > 1) return <><WorldMap countryList={ countries }/></>;
  else {
    console.log(`Map region: ${region}`);
    switch (region) {
      case("South America"): return <><SouthAmericaMap cityList={ cityList }/></>;
      case("North America"): return <><NorthAmericaMap cityList={ cityList }/></>;
      case("Europe"): return <><EuropeMap cityList={ cityList }/></>;
      case("Africa"): return <><AfricaMap countryList={ countries }/></>;
      case("Oceania"): return <><OceaniaMap cityList={ cityList }/></>;
      case("Asia"): return <><AsiaMap countryList={ countries }/></>;
      default: return <><WorldMap countryList={ countries }/></>;
    }
  }
});

Map.propTypes = {
  cityList: PropTypes.array.isRequired
};

export default Map;
