import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Curacao = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Curacao ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "CW-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");


      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 830">
        <g id="Curacao">
          <path className="not-visited" id="CW-00" admin="Curaçao" iso-a2="CW" name="Curaçao" sov-a3="NL1" d="M904.569533,694.841172L850.758635,649.427599L832.696235,620.272671L825.828759,572.351742L811.999735,542.230899L778.509036,521.636262L487.158763,449.934720L388.380015,401.904535L303.430291,320.562446L282.169340,273.099974L257.992065,163.142581L232.309591,118.653412L190.540292,81.961891L148.488767,56.055018L49.427792,13.677123L36.445443,2.119010L24.968293,0.000000L13.585219,8.668633L0.602868,29.858116L18.947494,70.116132L23.180868,115.186591L17.818593,200.118165L28.825367,232.277432L55.260443,253.459274L86.963718,270.211674L114.057318,289.851846L185.178017,406.139809L215.940542,443.100989L252.253491,456.864621L296.845040,461.003278L334.757264,476.595177L350.844090,524.715878L380.477715,575.719798L449.058389,631.530673L525.447287,676.368248L644.075862,712.062837L764.868159,794.893471L825.828759,824.040353L872.207733,828.368982L929.781633,824.617504L978.794707,814.902036L999.397132,800.665236L986.697007,778.924645L904.569533,694.841172Z " />
        </g>
      </svg>

    </div>
  );
});

Curacao.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Curacao;
