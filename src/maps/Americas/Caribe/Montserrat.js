import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Montserrat = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Montserrat ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "MS-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1678">
        <g id="Montserrat">
          <path className="not-visited" id="MS-00" admin="Montserrat" iso-a2="MS" sov-a3="GB1" d="M313.916602,0.000000L126.017756,501.114392L52.441625,833.167615L0.297993,1068.464663L126.017756,1521.482386L694.706775,1676.889806L806.810680,1654.147934L896.675340,1602.030273L960.669878,1527.168212L999.702007,1430.980991L992.440212,1368.433370L962.031461,1285.507682L921.183889,1204.948342L885.328798,1152.820143L874.436105,1104.481993L919.822307,958.513366L923.453204,874.150502L823.603574,687.403297L670.652098,493.055737L567.171570,289.209478L618.911834,72.068857L526.777859,76.810146L454.159943,56.896654L313.916602,0.000000Z " />
        </g>
      </svg>

    </div>
  );
});

Montserrat.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Montserrat;
