import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Ukraine = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Ukraine ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "UA-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");


      }
    }
  }, [countrySubdivisions]);

  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 670">
        <g id="Ukraine">

          <path className="not-visited" id="UA-00" admin="Ukraine" iso-a2="UA" sov-a3="UKR" d="M613.567599,0.000000L598.631725,11.055465L576.562812,4.781255L566.876535,4.294254L562.674568,24.084847L560.215788,26.050870L508.764593,24.550816L505.885043,29.326219L489.649651,26.607425L481.411735,40.668065L476.059094,45.283031L468.860220,74.305743L467.013988,101.419484L456.182760,95.357427L454.579830,87.376053L444.744709,79.452508L429.511148,81.697285L415.353840,79.344489L406.949906,88.281993L393.886026,78.700909L387.983808,66.926056L375.188991,72.468988L361.569810,83.490834L359.806586,76.325673L344.223816,75.541287L338.493340,64.596959L329.654326,72.936312L314.626856,70.479382L311.360886,80.610665L307.831577,69.622444L285.711141,64.596959L251.826344,51.161203L238.854059,50.369608L237.537366,46.749901L224.662403,46.203074L202.095436,39.758364L179.056178,40.389607L169.713386,37.850108L139.606923,43.024909L125.815999,44.112396L111.412527,62.931179L103.134538,70.407977L89.005854,65.157449L81.643825,69.431221L86.847623,96.497325L97.232320,110.315491L103.025768,127.811033L112.099497,134.931611L105.304218,136.500193L104.056223,142.578436L108.321162,149.492675L109.454662,161.133251L90.185152,175.709596L72.953654,192.694374L48.394474,221.925665L28.890249,249.810552L33.504398,263.586656L31.746900,281.337429L16.370220,302.141652L1.903776,329.512609L0.747376,344.647760L8.447166,344.759863L13.170085,358.117662L45.417604,377.821535L49.905808,379.553863L55.350046,370.705202L61.595749,371.684295L70.549258,378.820383L79.977922,377.812978L111.435426,385.357389L140.133600,386.954326L153.832928,402.223214L160.525161,401.027702L174.058471,386.676826L213.052609,381.193581L229.093360,372.296917L247.486983,357.597567L252.604910,350.869283L256.746767,354.535883L271.799998,345.290154L281.892733,348.332657L287.291173,343.073701L311.982021,340.709358L321.656849,350.098550L345.858232,362.447887L343.931853,367.762286L354.496880,365.926489L371.570949,373.566863L376.402638,382.165997L389.317675,381.982217L394.123603,397.549887L387.626011,416.746962L391.206843,425.226171L407.757096,432.719462L413.258581,439.075910L411.300717,449.255855L412.067833,464.685454L432.533816,475.704788L433.724564,494.350793L431.079729,498.219825L438.576290,511.235756L417.014018,507.423888L416.132406,511.465980L405.318352,502.575932L398.889458,503.215987L395.477506,509.194318L392.211536,498.771076L378.120063,504.337935L381.666546,524.426165L378.847106,539.075764L364.858679,554.991393L357.674117,559.695850L353.537985,579.750709L344.670346,579.048130L336.781640,583.461914L344.023449,594.414179L365.061907,601.967669L369.475690,594.532237L381.377446,594.165840L390.777486,589.208382L412.677519,588.735567L420.379675,602.252533L423.007651,594.546918L419.590831,575.523816L413.784942,575.771684L416.435457,563.822897L421.763532,571.398169L434.768181,553.576187L450.991313,549.077078L472.876087,513.636260L480.723953,505.009265L478.515191,500.492928L497.893697,491.216551L510.605348,492.545297L518.543368,488.902584L539.449976,490.297675L540.504773,474.205698L545.535341,465.394719L538.286995,459.594525L537.114999,445.567384L545.684094,458.953253L547.428565,468.763597L543.984700,479.821951L548.555485,490.297675L555.398139,495.850645L560.410677,492.289422L565.892012,495.696582L582.399127,489.976023L562.587885,503.042940L559.563233,501.069184L533.797349,496.332466L524.114857,497.060013L550.259387,508.259453L540.964556,515.160557L557.670009,525.037707L562.209240,524.409230L575.177828,534.678291L586.843698,531.167972L618.938361,529.919184L626.159661,536.500604L635.724952,528.315403L640.994428,551.841821L628.548730,552.689675L617.383213,560.338897L611.581832,558.355119L576.381378,583.747577L575.700719,593.024078L588.845106,591.228063L624.645081,604.891677L632.452379,610.577340L636.392089,622.083172L632.930192,632.539457L632.826516,644.569420L625.140926,651.765701L637.672269,663.877207L655.739041,667.855682L675.951467,655.397498L681.022604,645.263575L703.853990,634.496910L715.546906,635.516609L722.010915,627.521184L731.152485,622.127773L739.473658,611.861127L748.583674,610.788136L776.387029,618.102374L793.966972,613.786119L791.830332,609.714888L803.798216,593.024078L802.838081,587.637070L759.618469,582.741730L753.122906,593.024078L740.091210,596.392864L731.864698,590.605703L711.147413,557.501886L703.443792,529.421521L708.704251,521.724980L715.168261,520.629961L725.351104,503.707205L729.624383,513.845188L741.741020,504.142359L764.730175,488.429793L807.408866,478.114139L812.849633,482.219655L823.406613,472.245217L841.824984,468.328199L854.509588,453.647557L887.514803,457.220685L896.304437,437.804103L894.054610,420.058890L899.183986,410.690752L920.319765,404.932093L922.340602,396.393538L952.733302,391.016570L973.840457,393.862536L980.944872,371.928497L988.226754,359.866607L980.217828,352.702978L986.211642,347.040075L979.845720,329.690017L970.016323,329.426066L974.430106,315.343543L978.196992,310.895350L986.812741,312.663894L990.905938,304.153305L977.052042,303.513338L972.752754,292.976908L998.262242,273.890124L996.029589,262.021577L996.813880,244.532867L985.690690,246.890117L969.529719,242.576308L951.084574,232.425444L943.653847,220.278233L931.557450,226.300841L914.961398,213.085818L890.150330,203.986309L886.228876,216.359069L879.404973,217.501429L864.549246,202.612742L848.353927,172.619641L841.678868,172.790367L835.158377,178.052464L815.860243,181.411841L803.025353,191.576452L791.564402,183.070337L783.755843,185.082049L774.716462,172.952102L765.081707,172.165833L737.018980,166.045774L735.152712,153.322367L739.434825,151.385387L728.866936,122.961582L717.823892,103.999408L678.666599,99.645265L668.373498,100.347272L674.699347,89.760879L663.009406,63.215010L681.013747,56.973056L680.933600,53.282932L663.673477,34.005318L661.211835,23.800579L652.573186,7.531231L635.928475,3.460596L632.132965,7.262168L613.567599,0.000000Z M432.009483,565.349312L429.462645,567.916891L424.396015,571.688152L432.009483,565.349312Z M602.088663,537.351408L590.675223,537.055918L604.901454,539.782764L602.088663,537.351408Z "/>

        </g>
      </svg>

    </div>
  );
});

Ukraine.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Ukraine;