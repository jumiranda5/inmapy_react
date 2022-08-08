import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Liechtenstein = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Liechtenstein ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "LI-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");


      }
    }
  }, [countrySubdivisions]);


  return (
    <div className="map_container map_container_liechtenstein">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 2213">
        <g id="Liechtenstein">

          <path className="not-visited" id="LI-00" admin="Liechtenstein" iso-a2="LI" sov-a3="LIE" d="M606.012673,2211.731448L753.026764,2164.833574L950.276828,1914.012290L999.774035,1641.099440L927.375134,1373.211460L757.459349,1135.343068L544.695237,1009.307811L543.956471,918.023137L614.877842,759.869733L622.265487,684.853478L560.948051,538.869050L492.981741,447.235479L461.214871,354.770922L509.234555,208.156007L388.815977,96.332826L323.804714,0.000000L205.602439,200.810645L82.228800,555.725820L65.237221,909.871999L119.905778,1083.737241L197.476028,1235.281854L257.315935,1403.616554L261.009754,1627.803061L193.043437,1767.806158L83.706331,1880.651359L0.225965,1993.202616L8.352373,2091.090234L169.402985,2138.807629L606.012673,2211.731448Z " />

       </g>
      </svg>

    </div>
  );
});

Liechtenstein.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Liechtenstein;
