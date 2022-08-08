import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const CaribbeanNetherlands = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== CaribbeanNetherlands ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        switch(countrySubdivision) {
            case("Bonaire"): code="BQ-01"; break;
            case("Santo Eustáquio"):
            case("Saint Eustatius"): code="BQ-02"; break;
            case("Saba"): code="BQ-03"; break;
            default: code="BQ-00";
        }


        console.log(`state: ${countrySubdivision} / ${code}`);

        if (code !== "BQ-00") {
          const divPath = document.getElementById(code);
          divPath.classList.add("fill");
        }

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 1000 1144">
        <g id="CaribbeanNetherlands">

          <path className="not-visited" id="SX-00" admin="Sint Maarten"  iso-a2="SX" name="Sint Maarten"  d="M969.996112,0.000000L967.826811,2.039442L969.052615,3.664656L971.704809,5.024151L983.940560,8.258589L986.325110,5.516593L973.851824,0.692996L969.996112,0.000000Z " />
          <path className="not-visited" id="BQ-01" admin="Caribbean Netherlands" iso-a2="BQ" name="Bonaire" d="M32.360152,1142.517912L33.318508,1141.629206L35.413518,1135.385036L33.125351,1128.752601L33.036201,1127.111450L34.254576,1125.956534L37.582819,1125.758980L39.157792,1124.558442L39.469814,1120.911060L38.147432,1111.137796L39.841270,1109.131227L41.951139,1108.386344L41.185940,1106.683711L36.379303,1103.468311L30.540019,1102.647324L19.158616,1097.173730L16.045817,1096.390652L14.485703,1095.280637L10.644850,1090.194015L7.881220,1088.726476L5.355321,1088.696060L1.648193,1093.836059L3.007721,1094.991725L0.437247,1098.633414L1.655622,1101.757906L5.102731,1104.099245L9.129311,1105.315481L17.984815,1106.698913L21.402208,1108.735984L24.195555,1112.961880L25.116765,1116.777037L25.005329,1120.569104L24.195555,1126.412425L25.406501,1133.151531L29.232495,1141.393735L32.360152,1142.517912Z " />
          <path className="not-visited" id="BQ-02" admin="Netherlands" iso-a2="BQ" name="St. Eustatius" sov-a3="NL1" type-en="Special Municipality" d="M990.054721,102.874612L990.500468,109.285801L992.986111,113.958130L997.068989,114.561538L998.861825,113.067922L999.562753,110.577632L993.685689,106.987808L992.491059,104.394409L990.054721,102.874612Z " />
          <path className="not-visited" id="BQ-03" admin="Netherlands"  iso-a2="BQ" name="Saba" sov-a3="NL1" d="M946.000073,79.642625L944.083361,80.897754L943.645043,84.078248L946.007502,85.816483L947.634478,85.138348L948.689412,83.033706L947.485896,80.523559L946.000073,79.642625Z " />

       </g>
      </svg>

    </div>
  );
});

CaribbeanNetherlands.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default CaribbeanNetherlands;
