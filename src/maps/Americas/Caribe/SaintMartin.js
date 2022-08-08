import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const CostaRica = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== CostaRica ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        let code;
        if (countrySubdivision === "MF") code = "MF-00";
        else if (countrySubdivision === "SX") code = "SX-00";
        else code = "00-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        if (code !== "00-00") {
          const divPath = document.getElementById(code);
          divPath.classList.add("fill");
        }

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 797">
        <g id="CostaRica">

          <path className="not-visited" iso-a2="MF" admin="Saint Martin" id="MF-00"  name="St. Martin" sov-a3="FR1" d="M292.936021,463.309632L447.898150,491.161318L949.203027,685.023057L999.372037,627.550205L996.684832,396.728440L946.523698,166.809735L948.613748,0.000000L847.694311,1.884966L695.718008,40.840440L558.073458,93.617037L497.760662,138.538342L463.125591,263.870342L372.954979,334.541162L243.372042,366.577390L24.215640,370.346306L0.627963,400.183204L22.424175,443.524057L92.291471,483.723023L120.357823,477.756064L232.026070,438.185040L292.936021,425.936632L292.936021,463.309632Z " />
          <path className="not-visited" iso-a2="SX" admin="Sint Maarten" id="SX-00"  name="Sint Maarten" sov-a3="NL1" d="M949.203027,685.023057L447.898150,491.161318L292.936021,463.309632L292.936021,483.723023L205.751190,545.275382L255.016591,610.593205L361.609007,665.231658L853.367297,795.224660L949.203027,685.023057Z " />

       </g>
      </svg>

    </div>
  );
});

CostaRica.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default CostaRica;
