import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SaintBarthelemy = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== SaintBarthelemy ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "BL-00"

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 655">
        <g id="SaintBarthelemy">

          <path className="not-visited" id="BL-00" admin="Saint Barthelemy" iso-a2="BL" name="Saint Barthélemy" sov-a3="FR1" d="M16.867964,0.000000L0.763550,121.302733L80.211939,328.913983L217.099345,536.507718L376.532921,653.835545L574.617067,636.349542L755.523177,511.123551L903.146862,341.889113L999.236450,189.568157L131.746024,56.984816L16.867964,0.000000Z " />

        </g>
      </svg>

    </div>
  );
});

SaintBarthelemy.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default SaintBarthelemy;
