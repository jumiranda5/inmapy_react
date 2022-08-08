import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Grenada = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Grenada ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "GD-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");


      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1462">
        <g id="Grenada">

          <path className="not-visited" id="GD-00" admin="Grenada" iso-a2="GD" sov-a3="GRD" d="M259.264745,1460.678043L263.343136,1434.533394L274.365811,1413.797330L291.671412,1398.244902L314.819033,1386.862125L314.819033,1407.486240L430.887818,1346.401135L445.878657,1321.605013L446.760472,1298.949651L450.067275,1277.308063L458.003603,1260.963737L472.112628,1254.425906L478.946686,1245.859005L463.735394,1200.542967L462.853579,1178.898506L480.930768,1136.509601L492.835261,1117.343610L499.338640,1097.951629L508.928368,961.742416L504.078389,921.483711L481.371677,874.456039L498.346599,858.215569L500.110225,849.644064L441.469587,812.650105L379.632373,804.303647L322.865588,814.454732L165.241314,1006.847594L163.477685,1054.881569L107.262035,1163.566628L92.712101,1225.230405L99.876841,1263.105428L113.214281,1295.004618L121.040380,1327.465991L111.450652,1367.928007L94.255277,1384.720791L0.342073,1445.351980L40.905521,1456.508483L91.279154,1459.100373L137.243717,1449.408911L165.241314,1424.728914L186.625306,1437.914218L209.662700,1448.394680L234.022815,1455.945029L259.264745,1460.678043Z M982.242097,0.000000L940.466154,36.583857L911.035608,102.407511L875.983497,150.275465L817.453082,132.438250L801.470202,159.306796L797.502037,170.370022L825.940543,169.015351L834.317778,170.370022L825.058731,187.303204L806.871313,230.988969L797.502037,247.920725L843.576827,230.311692L888.769801,206.945194L934.513908,194.076364L982.242097,208.299794L984.005726,150.727033L995.028402,95.859288L999.657927,45.390802L982.242097,0.000000Z " />

        </g>
      </svg>

    </div>
  );
});

Grenada.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Grenada;