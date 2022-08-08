import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Anguilla = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Anguilla ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "AI-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 906">
        <g id="Anguilla">
          <path className="not-visited" id="AI-00" adm0-a3="AIA" admin="Anguilla" iso-a2="AI" sov-a3="GB1" d="M553.108074,904.148543L580.251160,895.136083L625.893550,860.784661L635.264379,870.818331L648.674355,880.511615L654.329164,889.354387L777.119314,812.483124L828.981996,796.834774L850.793404,782.376459L865.980608,762.474076L905.725841,694.763785L906.210539,680.982003L883.672084,679.790961L837.221862,686.937158L776.069136,697.996473L742.544194,725.983540L717.339899,763.324627L681.472250,802.532892L658.853012,813.503645L608.121293,822.688209L585.178922,831.022148L569.830153,843.437664L518.694517,903.638411L553.108074,904.148543Z M934.880689,652.636826L939.065582,667.118476L931.293638,677.192326L937.869898,684.117936L956.402994,671.525820L961.185729,664.599970L986.892927,657.044346L999.447604,652.007176L983.305876,641.932625L955.805152,636.265568L949.826734,646.969936L934.880689,652.636826Z M0.552396,0.000000L2.248838,17.643330L10.973403,2.557058L0.552396,0.000000Z M351.540617,687.034793L383.297973,666.081438L364.296204,665.624564L348.479667,658.022133L330.496585,668.096236L332.792298,680.184791L351.540617,687.034793Z M485.602570,697.326596L474.506626,694.909032L470.297820,695.714888L475.271864,698.535372L480.628526,702.967517L487.515664,703.370437L495.550658,700.549990L485.602570,697.326596Z M505.881364,704.579193L506.263983,709.817089L511.620646,711.025823L517.742546,710.220001L516.212071,702.967517L512.003264,702.564597L509.707552,704.579193L505.881364,704.579193Z "/>
       </g>
      </svg>

    </div>
  );
});

Anguilla.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Anguilla;