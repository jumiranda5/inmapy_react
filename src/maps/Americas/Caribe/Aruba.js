import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Aruba = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Aruba ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "AW-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1184">
        <g id="Aruba">
          <path className="not-visited" id="AW-00" admin="Aruba" iso-a2="AW" name="Aruba" sov-a3="NL1" d="M938.896651,1182.841635L999.577646,1129.229938L981.395258,984.984327L789.932481,745.365364L741.957253,622.847981L678.866544,553.955370L352.897880,301.021272L297.912575,257.252581L74.028181,0.000000L7.432431,37.266364L15.318771,98.776166L52.997945,177.343180L74.028181,267.128713L61.322414,320.548403L11.375601,414.813527L0.422354,470.696324L23.643240,523.883933L77.533222,557.097123L187.503832,602.427389L559.476138,931.813924L741.957253,1019.981486L741.957253,1057.669781L631.767574,1057.669781L710.411899,1137.081150L827.392585,1182.168699L938.896651,1182.841635Z " />
        </g>
      </svg>

    </div>
  );
});

Aruba.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Aruba;
