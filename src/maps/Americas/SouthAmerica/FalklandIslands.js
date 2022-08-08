import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FalklandIslands = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== FalklandIslands ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "FK-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  }, [countrySubdivisions]);


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 622">
        <g id="FalklandIslands">

          <path id="FK-00" adm0-a3="FLK" admin="Falkland Islands" iso-a2="FK" name="Falkland Islands" sov-a3="GB1" d="M521.653363,499.511866L537.769859,445.055731L563.114467,438.797576L590.958657,447.853524L619.166159,433.915579L581.120183,358.645110L600.346625,353.922835L742.750184,398.116405L747.240714,361.242801L745.642144,347.596602L733.609268,319.292838L837.036774,284.341590L872.263453,264.441743L892.114791,236.997686L935.857491,226.433457L985.195187,209.963516L987.287861,198.146637L999.001023,174.906769L976.809959,159.786083L948.805912,149.539952L962.204838,125.884672L994.030922,118.316669L960.097632,63.643583L944.024733,54.513664L875.591386,64.202681L859.881799,70.120688L850.929804,89.423613L854.824503,112.619045L865.273341,134.156422L867.235223,147.341639L856.205087,145.470909L796.040709,114.066661L785.562807,101.881672L782.496458,73.383268L797.915396,67.604174L815.979242,70.726559L824.320873,49.112042L810.297051,25.844470L786.362092,18.171608L729.438453,27.891021L683.995455,0.000000L663.969728,1.022042L673.139709,41.896442L610.650138,105.615810L609.807255,152.674101L619.950911,181.651269L621.694806,198.568558L611.013449,207.524586L585.828699,211.558348L561.501364,223.476394L547.521139,244.231278L469.525435,314.060695L479.683623,335.893227L446.200839,387.473333L446.331631,415.156231L481.006077,464.695361L521.653363,499.511866Z M256.595855,91.522787L209.205508,61.686850L188.293301,40.174361L172.598246,41.849898L187.537613,75.247818L186.200627,92.129253L191.243390,102.768472L218.288295,131.258615L251.712949,148.230292L268.817652,176.218035L258.165360,184.462094L202.724032,204.194951L184.616589,203.819813L168.412898,211.652166L192.943687,232.724423L228.809795,222.443864L244.068876,214.373045L259.487814,213.528598L270.910326,221.786825L270.808599,240.144472L255.869232,254.240155L242.237786,272.672326L207.926652,290.790611L165.869717,326.695417L114.846256,324.243327L55.641021,377.828141L100.052213,421.644364L137.502359,441.357511L190.473169,444.439317L197.710334,432.588625L207.258159,427.708031L227.429211,424.675985L236.584660,417.855437L255.985492,385.770928L268.468873,343.537457L284.120331,341.744124L302.416696,347.124570L344.836942,342.404808L365.182384,335.374272L426.640150,257.342435L468.813344,196.365284L486.368554,170.317957L509.344371,154.077597L522.612505,136.587139L533.991420,114.953957L551.924474,99.454825L559.626677,75.107971L543.917089,54.141096L524.051219,42.873900L500.988207,66.998390L492.544849,59.916624L427.701020,80.702543L404.754268,83.920072L388.928421,63.550401L366.461240,56.283452L339.198348,66.998390L299.655529,100.621544L256.595855,91.522787Z M38.579915,246.768303L28.785038,260.351129L0.998977,272.625285L9.703920,289.896107L34.641618,322.310144L59.768239,324.149021L69.112610,300.349990L81.072823,250.856356L59.855434,253.394156L38.579915,246.768303Z M806.431417,355.433851L799.964473,350.853909L789.094194,349.815294L775.898722,363.840803L784.400210,384.494212L808.247974,398.021777L806.431417,355.433851Z M308.534861,60.009790L319.027296,34.590169L321.003710,18.078620L290.776197,1.672458L259.836593,5.064224L259.676736,44.409993L267.727718,60.056373L308.534861,60.009790Z M436.231573,462.369931L436.725676,437.328121L415.232170,418.565810L403.301022,415.061528L405.495423,425.718203L405.815137,449.276269L411.889705,467.495702L417.208585,471.720632L436.231573,462.369931Z " />
        </g>
      </svg>

    </div>
  );
});

FalklandIslands.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default FalklandIslands;