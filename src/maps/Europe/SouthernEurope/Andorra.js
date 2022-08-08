import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Andorra = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Andorra ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "AD-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");


      }
    }
  }, [countrySubdivisions]);


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 836">
        <g id="Andorra">

          <path className="not-visited" id="AD-00" admin="Andorra" iso-a2="AD" sov-a3="AND" d="M381.122344,0.000000L338.522115,3.130733L256.775737,34.533636L168.696890,29.935965L125.808826,179.069953L64.211200,204.291164L51.834111,227.066140L36.290784,265.280143L32.836710,300.947476L56.151698,316.776181L55.863861,331.333742L9.809561,411.433120L0.598701,454.402063L63.347684,446.004204L112.280376,489.747923L121.779073,549.491883L66.801755,589.215196L50.970589,593.314027L3.764935,614.880519L84.072117,740.532046L84.072117,787.829175L116.022287,811.620443L284.696156,834.141938L307.435465,831.022205L339.673474,813.180445L357.231676,791.729548L369.320928,770.081672L384.864255,752.332833L560.446266,729.413412L649.676470,691.664663L679.899603,589.800746L689.973980,577.991839L698.321322,573.795144L706.092984,576.918274L713.288969,588.629643L746.390495,600.730782L780.067700,600.340428L811.154353,585.799446L837.635576,554.372254L847.709953,460.065569L878.508766,381.545558L929.456331,331.919937L999.401299,325.374044L964.860572,275.052553L900.096716,254.920947L855.193778,226.381944L879.372283,149.544030L562.748982,118.254243L532.238011,103.879104L381.122344,0.000000Z " />

       </g>
      </svg>

    </div>
  );
});

Andorra.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Andorra;
