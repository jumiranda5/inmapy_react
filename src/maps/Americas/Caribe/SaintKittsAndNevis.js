import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SaintKittsAndNevis = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== SaintKittsAndNevis ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "KN-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1019">
        <g id="SaintKittsAndNevis">

          <path className="not-visited" id="KN-00" admin="Saint Kitts and Nevis" iso-a2="KN" sov-a3="KNA" d="M738.297454,927.514907L767.240392,1005.438245L910.261634,1017.110277L966.166518,1003.864468L978.575897,990.224914L994.369654,951.140630L999.508894,923.071822L998.004724,848.302691L994.369654,819.179554L969.550895,748.727183L926.807472,707.002868L871.153283,688.239096L807.100825,686.926922L747.310174,751.876068L723.494191,887.656029L738.297454,927.514907Z M14.159266,114.323061L0.491106,172.857041L91.242532,276.599535L223.358562,358.792714L321.254783,398.703506L360.989870,404.217285L458.008662,398.703506L486.337145,408.943342L526.573622,454.626614L587.617743,492.693326L620.709426,614.227977L659.817774,640.999015L728.508084,614.884142L728.257387,561.469761L691.279943,508.706870L649.288605,484.817655L598.773653,459.352270L564.052457,398.966068L510.654516,266.620034L435.195458,184.939379L128.345327,0.000000L119.821712,18.522816L106.534901,27.981054L68.930716,44.138524L54.390432,47.685223L45.240083,51.231905L36.967162,57.142994L24.933824,68.176866L14.159266,114.323061Z " />

        </g>
      </svg>

    </div>
  );
});

SaintKittsAndNevis.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default SaintKittsAndNevis;
