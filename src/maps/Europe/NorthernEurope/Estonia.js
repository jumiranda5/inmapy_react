import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Estonia = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Estonia ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "EE-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  }, [countrySubdivisions]);


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 652">
        <g id="Estonia">

          <path className="not-visited" id="EE-00" admin="Estonia" iso-a2="EE" sov-a3="EST" d="M607.678083,0.000000L606.130757,13.134943L611.424916,25.887090L609.442803,31.569352L596.309708,28.097226L591.552637,20.163821L582.639523,13.033773L577.473242,2.684011L574.250711,18.571361L576.629246,31.077012L582.307040,43.113757L563.854210,44.652047L561.744219,48.610213L529.020176,46.026230L521.385845,40.919410L515.477870,44.059454L516.820592,52.075527L484.250003,49.467197L467.638620,31.190631L462.792034,34.459805L464.505603,46.896032L468.162921,51.584152L462.792034,68.479213L458.354659,69.372305L447.446645,54.267532L443.226663,62.565272L439.096196,62.137325L445.170413,71.409778L442.357091,72.705002L427.523215,64.503400L419.684279,70.416245L404.185436,59.594456L393.840086,62.137325L389.492226,78.060245L367.011231,83.249448L376.256828,97.785608L371.845028,100.080926L354.044377,85.359574L344.427933,94.059347L355.847460,110.911046L354.044377,123.607122L347.445860,116.847814L303.174412,119.814937L299.031157,136.175344L285.105216,127.885762L277.394158,134.562953L266.844203,136.175344L258.237997,141.785532L265.859541,168.508250L265.680511,184.320161L263.007856,180.612103L252.803172,198.903258L248.416948,198.903258L256.729034,209.036090L266.844203,211.604997L276.089800,220.870181L267.828866,219.915513L264.401729,224.514480L253.966864,223.770848L250.565303,228.442463L257.099881,248.072756L266.920930,261.555080L257.560243,267.333224L251.728995,278.214191L263.583308,273.885358L268.570559,275.291499L279.056575,269.122818L303.302290,271.997873L307.471121,267.259166L307.343243,280.938840L310.348381,288.554255L293.775361,282.356365L276.089800,286.361382L270.066735,283.391654L262.457979,298.871872L261.741861,305.884053L265.680511,326.917199L262.509131,336.424854L265.386391,341.720888L270.066735,334.107003L279.031000,347.345013L290.936464,350.896838L291.627007,381.539841L297.215286,388.326497L301.870054,406.455765L309.427658,403.531825L338.276989,412.629930L358.929326,435.760132L368.750375,425.076905L374.504896,426.694058L381.589350,421.270147L386.461511,412.593408L389.236469,397.766861L398.239097,389.009804L411.180376,392.352490L429.441389,414.455916L427.574366,421.343133L415.387570,432.807827L412.893944,452.401566L415.694478,461.494145L414.313393,486.053585L403.968043,500.576068L401.269812,512.269010L393.840086,530.777613L396.326488,549.310760L400.808876,549.074176L425.267124,523.752059L448.994549,523.009977L456.643842,509.789169L469.733714,514.391908L478.487363,507.345307L494.565495,502.777837L509.620472,488.595430L524.756653,490.045989L530.278435,509.858110L532.584592,511.811250L543.205903,505.061817L537.732842,492.286674L542.783649,485.686039L560.843126,500.600700L570.360080,512.201835L583.636719,518.495165L586.251445,526.956953L613.275699,530.244979L623.068743,550.096796L656.085754,553.049630L659.544988,574.176240L682.135575,594.873449L697.011907,619.322025L708.867499,630.370371L723.370298,636.654788L734.154014,650.089502L740.861356,646.475291L748.380725,648.758889L755.331674,638.789132L783.931260,630.945966L792.782352,617.456771L809.818675,622.793863L826.205377,640.249626L838.824274,641.051677L863.071396,649.998784L868.252127,646.641662L864.338158,630.370371L873.270453,623.385025L876.859611,599.302793L889.852041,594.706268L892.759097,587.986453L891.021360,579.679646L895.471267,570.368624L932.759539,555.208420L937.063281,542.745482L917.282308,531.643993L917.931929,509.858110L912.036614,506.241937L911.857968,481.262851L903.883865,470.089158L890.631587,441.602180L888.666482,427.515187L890.436700,412.296230L899.986136,389.620352L877.314346,281.236045L887.870695,244.649378L907.911518,226.615082L924.882879,209.180314L926.620616,202.305554L963.600319,112.791764L981.968366,113.157646L970.031571,104.388872L987.774358,100.790117L994.684706,95.055030L986.402032,71.843635L972.923920,58.687937L967.284490,69.447774L950.020927,81.603757L925.468304,75.571530L901.286529,74.050356L877.066389,67.925710L831.055798,70.969617L802.999311,68.479213L785.595082,60.173580L766.016924,40.213085L760.160100,36.945712L745.275073,35.444143L739.955338,39.822063L727.576724,38.825523L718.778701,33.500617L699.660903,25.975505L667.358859,20.694587L661.374157,14.816742L652.026258,12.325559L646.936704,23.689120L637.281897,12.300265L633.867547,26.341785L628.343207,29.713487L621.169238,10.946934L607.678083,0.000000Z M332.484105,473.859653L344.862719,468.895805L343.481634,461.857686L331.640109,466.691596L332.484105,473.859653Z M241.447584,197.872042L227.930854,196.828299L210.986987,192.702012L202.930657,196.480361L211.613590,216.368843L243.058850,214.173276L241.447584,197.872042Z M422.446449,22.627865L418.239255,34.560767L426.679219,38.232599L422.446449,22.627865Z M220.488340,356.711902L207.547062,351.680528L189.976591,332.819088L182.636380,327.518582L168.480259,321.932992L151.357362,323.578286L146.216657,330.181437L134.298405,327.948120L128.953094,332.046263L120.461979,319.255771L113.582129,319.120663L99.873582,330.181437L77.699494,332.635087L72.418123,337.295449L70.039588,357.556350L65.346456,356.711902L60.563810,344.208616L44.962664,358.767832L39.336022,381.063635L37.200455,371.180568L30.371757,358.388494L15.870364,352.635572L9.041666,358.706650L0.767944,354.863671L18.619746,378.511293L28.875581,401.996434L25.614686,400.826462L18.402353,412.532536L10.537841,404.226334L7.200219,405.688309L12.686196,418.520646L6.343435,428.724269L10.844749,432.868582L26.138987,434.666782L29.757941,437.897914L38.466449,455.202912L59.003695,463.529814L53.044569,472.758122L36.369246,491.951965L25.499596,512.594635L21.356341,512.208708L25.550747,526.550950L34.706829,532.619479L58.287577,502.628393L67.469235,479.789010L69.809407,455.675793L89.720049,439.731690L93.364579,441.553007L130.027271,434.666782L132.265140,441.589430L140.743468,440.423827L146.012052,435.395695L138.697416,430.766245L156.728248,424.359441L168.953408,414.601982L179.452212,400.131730L180.718207,393.694146L187.700359,399.217539L197.879467,389.705267L197.483044,379.305149L201.319392,379.488339L208.838632,364.920992L221.588093,371.278345L225.322138,368.418010L235.309428,375.506311L234.273615,366.437324L220.488340,356.711902Z M244.209754,334.107003L229.554908,307.974502L215.322059,303.707085L193.569970,327.003113L205.398707,334.107003L219.414163,347.492009L228.020369,344.208616L241.153464,348.398438L244.209754,334.107003Z M225.181472,562.622185L219.490890,559.620918L218.467864,566.342580L226.703223,570.853314L225.181472,562.622185Z M72.955212,238.633500L87.149696,242.568584L94.668937,251.633472L103.070538,283.256086L99.873582,292.864751L105.947798,299.425635L114.426126,301.775726L134.119375,290.561934L142.866247,265.592707L153.173233,258.331274L157.047944,261.740326L149.413613,269.924951L151.255059,273.317914L166.446995,270.443220L165.321666,257.627093L177.457311,253.166187L187.239997,258.726583L186.626182,239.673100L177.725856,229.049496L173.889508,211.580179L158.659210,204.082654L142.866247,205.162926L135.781792,194.143911L139.324019,185.464665L131.868718,180.773891L121.024643,179.367495L114.988790,194.989070L103.722717,201.698214L99.873582,215.587423L53.543294,221.837159L41.919162,220.113893L36.931911,229.309643L57.750488,240.823965L72.955212,238.633500Z " />

       </g>
      </svg>

    </div>
  );
});

Estonia.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Estonia;