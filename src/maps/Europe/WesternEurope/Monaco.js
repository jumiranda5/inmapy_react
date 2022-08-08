import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Monaco = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Monaco ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "MC-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");


      }
    }
  }, [countrySubdivisions]);


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 880">
        <g id="Monaco">

          <path className="not-visited" id="MC-00" admin="Monaco" iso-a2="MC" sov-a3="MCO" d="M574.757564,0.000000L304.085334,108.145166L96.761936,340.847211L21.637034,566.585623L0.568822,786.238311L209.138934,852.875115L537.848058,878.010097L727.828216,628.677067L935.226768,456.148011L999.431178,388.507784L843.300449,155.097109L574.757564,0.000000Z " />

       </g>
      </svg>

    </div>
  );
});

Monaco.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Monaco;
