import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ElSalvador = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== ElSalvador ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "SV-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");


      }
    }
  }, [countrySubdivisions]);


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 548">
        <g id="ElSalvador">
          <path className="not-visited" id="SV-00" admin="El Salvador" iso-a2="SV" sov-a3="SLV" d="M296.293592,0.000000L282.724909,11.349416L260.390898,7.654406L237.279404,27.172546L225.521299,14.197554L219.674197,18.541075L222.965189,39.255289L213.784493,49.951472L216.329953,55.975104L227.789846,58.393244L237.609568,79.890016L242.838944,82.505347L241.571539,93.515330L197.308235,104.150523L186.466069,109.127126L167.817117,126.186247L149.029709,160.888368L152.246147,173.393464L146.217988,176.642989L129.443516,165.818137L115.885483,164.281042L97.641249,171.252671L84.466632,182.933147L44.857578,210.756470L38.754866,216.166556L28.700833,234.282139L7.399917,249.476465L4.130227,255.608384L1.105496,275.899145L7.703692,303.425108L39.498918,318.796795L101.702939,350.992632L115.352874,360.512588L121.062252,385.822223L127.347568,390.181693L166.473649,389.698857L180.225284,386.843053L218.137504,397.776836L243.167551,404.037521L301.727503,403.557085L312.445051,406.092601L326.517074,406.092601L356.774438,413.302090L384.784304,425.701901L433.709322,455.806972L548.767814,509.494762L655.205305,529.325442L674.929617,540.849955L682.309462,542.090184L685.194311,537.025819L677.277750,529.239305L659.633211,523.485177L625.853648,516.524666L625.853648,513.630057L651.431520,519.677629L634.625601,502.050811L630.935678,501.464922L597.843782,505.049134L574.697905,499.190262L579.779935,496.915550L603.076763,496.295166L647.439695,498.276936L654.249279,510.476909L661.780075,514.491557L679.206573,518.885090L685.194311,522.296410L687.056044,517.920251L682.124966,502.309291L695.056467,516.472977L690.829829,525.190775L693.379230,535.578812L701.631238,540.694925L712.214607,541.004984L721.808405,533.873385L704.918624,533.873385L718.437158,530.479674L733.331027,530.979263L724.877750,516.524666L732.391774,521.831237L737.373169,529.893946L736.719047,536.405676L727.410378,537.025819L738.681414,542.813645L748.593888,539.575259L786.767813,545.414616L822.358793,542.400240L845.404036,542.262437L902.212070,546.172503L916.753719,542.813645L907.243782,536.198961L908.702979,529.428807L917.005305,522.778810L947.648433,507.323665L955.850125,500.861797L959.221372,491.814501L950.768095,478.940117L937.081837,465.788307L924.653507,458.668732L927.672535,446.772936L939.279018,426.598629L942.415452,435.686184L947.983881,441.169363L980.447067,426.284002L988.530765,412.726473L982.502605,398.301812L976.506397,395.957747L963.523489,397.337904L959.210053,387.654501L961.627707,375.932396L971.511332,351.980003L973.598822,321.028456L983.354642,307.325169L980.681377,300.297393L994.793234,267.947856L987.540272,265.019428L955.588898,239.361803L951.573675,228.192779L941.498342,225.383866L929.953245,236.026588L900.579282,239.690929L894.497870,235.719392L885.093516,236.728748L866.306108,246.141593L862.876660,235.609679L842.576887,213.423142L836.538077,197.652507L831.798624,193.712195L775.723962,192.417015L771.676788,193.953667L777.161774,209.856589L775.191439,215.661774L768.897019,215.683721L754.966219,229.322905L741.024770,232.877779L738.159796,238.198879L724.974529,237.211480L724.186395,243.585513L710.649663,240.447917L694.045599,244.145004L678.826095,252.032392L667.834822,252.580865L671.189716,239.778696L666.727174,228.631665L668.133034,208.210444L660.730966,194.634176L642.571935,193.251201L611.344792,183.240509L590.342089,184.162589L580.160251,172.526174L564.855543,167.091712L567.912224,146.921160L564.962047,142.078286L552.202798,147.009011L526.886660,146.723497L524.181443,134.731151L517.993527,122.023352L509.366657,111.104513L499.163517,104.567997L492.719991,104.436163L478.075610,110.687068L467.212143,86.472164L451.098000,70.087383L449.457829,57.052282L440.234533,48.478482L426.175928,46.829586L416.121896,21.026139L413.704242,20.564318L396.951071,40.035833L377.918703,34.341020L367.459953,26.908665L346.435949,22.400594L333.644749,16.308859L311.281257,12.712118L296.293592,0.000000Z M985.442496,529.344186L986.754323,543.869320L995.590815,544.150923L997.284305,531.492211L993.771713,523.696633L985.442496,529.344186Z M969.165367,508.332353L964.586615,517.764508L969.980380,522.612341L972.400650,510.218081L969.165367,508.332353Z " />
       </g>
      </svg>

    </div>
  );
});

ElSalvador.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default ElSalvador;