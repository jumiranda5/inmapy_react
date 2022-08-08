import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SaintLucia = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== SaintLucia ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "LC-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 2093">
        <g id="SaintLucia">
          <path className="not-visited" id="LC-00" admin="Saint Lucia" iso-a2="LC" sov-a3="LCA" d="M741.665567,0.000000L669.290682,50.608059L544.298421,230.721176L523.916988,267.169362L503.951501,360.214438L491.889022,392.799958L466.516215,418.096003L416.602501,446.392649L389.981855,467.614696L265.613517,656.024436L219.859279,774.328198L97.570680,951.762225L69.702190,1025.042639L59.719446,1068.751660L13.549261,1166.876993L0.238936,1222.577816L2.318674,1276.133904L15.213048,1309.551711L29.771218,1336.113934L37.882196,1369.958512L43.497490,1473.628474L37.882196,1526.959396L2.318674,1609.414287L22.284160,1649.247650L53.480233,1683.726024L69.702190,1711.350860L155.387400,1814.563729L537.643260,1963.586127L631.231476,2091.611108L656.604282,2091.611108L672.410292,2083.047974L704.230280,2052.434306L750.400470,1851.392782L774.109480,1800.859612L795.946731,1786.298824L860.002664,1768.311727L875.392727,1761.887701L889.118999,1725.484255L952.551012,1467.845462L937.784869,1235.431490L999.345118,829.618393L999.761064,691.602505L980.211530,536.423016L962.741729,314.335962L948.599510,248.731006L907.420692,202.848286L851.683712,170.686467L817.576008,123.514237L840.453130,32.595269L741.665567,0.000000Z " />
        </g>
      </svg>

    </div>
  );
});

SaintLucia.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default SaintLucia;
