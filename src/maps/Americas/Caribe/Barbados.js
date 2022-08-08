import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Barbados = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Barbados ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "BB-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1326">
        <g id="Barbados">
          <path className="not-visited" id="BB-00" adm0-a3="BRB" admin="Barbados" iso-a2="BB" sov-a3="BRB" d="M519.498348,1324.744716L549.550853,1305.647316L576.741213,1300.872918L604.825991,1301.240180L639.350591,1297.016653L733.085779,1201.156717L784.783238,1165.344854L872.973021,1104.186542L985.848790,987.370323L999.622853,831.779928L948.104278,766.377673L866.890969,728.898228L780.847793,700.787812L714.302965,662.203722L598.922822,573.822699L517.351742,511.161589L459.393343,430.854592L375.112145,247.924241L344.541336,181.424327L323.441547,135.671316L262.978775,44.122602L182.123233,0.000000L102.698764,29.782952L40.268265,94.126061L9.142459,153.318380L0.377147,223.352359L36.153936,831.779928L93.039029,1032.555410L143.842071,1131.552090L202.873771,1173.609230L296.251187,1180.220689L394.995126,1203.544132L476.208435,1250.189556L519.498348,1324.744716Z " />
       </g>
      </svg>

    </div>
  );
});

Barbados.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Barbados;
