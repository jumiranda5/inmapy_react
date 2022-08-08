import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Martinique = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Martinique ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "MQ-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");

      }
    }
  });


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1159">
        <g id="Martinique">
          <path className="not-visited" id="MQ-00" admin="France" iso-a2="MQ" name="Martinique" sov-a3="FR1" type-en="Overseas department" d="M855.862806,1157.006260L889.675845,1153.896358L916.493084,1142.158827L941.269881,1109.051617L970.321888,1037.212135L999.568223,1024.167646L999.568223,1007.510381L984.702146,977.505961L977.123361,938.668365L964.103398,904.745933L932.816621,889.490187L940.686897,878.148468L944.670616,870.319534L950.597616,863.594590L965.269364,855.865821L945.642255,829.265973L937.480489,799.753681L938.840782,768.432761L947.682699,736.507662L916.493084,754.679097L918.630689,734.298939L917.076068,711.809600L908.914299,693.335519L892.007780,685.905548L869.077097,679.479547L860.235183,664.920354L856.737282,648.051281L849.741482,635.298719L801.451020,607.683872L783.184204,588.503278L768.220963,551.043930L781.629583,545.721076L789.694186,540.498604L799.119085,536.079549L817.191573,534.271743L737.225677,498.917889L716.724093,526.940027L696.125345,519.809081L691.850132,498.616566L720.902140,483.550292L703.121145,465.369760L768.220963,429.910937L755.395327,415.746846L740.432085,406.705743L723.136911,405.500252L703.121145,414.742287L698.068623,359.689557L704.870096,312.669263L723.136911,299.707818L751.897428,347.231589L802.422659,295.186310L796.689989,279.310492L803.685789,269.563713L818.357539,260.017727L835.069731,246.050134L778.034519,246.552573L722.165272,261.223544L673.680483,285.339339L639.284460,313.573538L597.018161,227.660593L569.229284,219.822236L557.180959,201.431795L551.253962,179.623731L541.440406,161.734427L502.380516,136.306466L408.714511,94.392916L303.388837,26.439744L222.354138,0.000000L138.598851,1.306940L43.961207,55.491789L22.779475,75.093486L6.747431,102.233110L0.431777,135.703416L6.747431,170.779655L23.653950,201.130307L91.863012,273.080611L109.935498,297.597786L123.927100,325.931814L129.465443,355.670890L124.995905,372.348165L116.931300,388.321698L113.141908,404.696589L122.080986,422.376893L132.380362,433.828599L140.347801,445.681862L145.497490,458.941137L147.246438,474.510324L165.804744,518.503406L208.751191,560.082615L294.061102,618.428725L302.805852,628.872116L317.769094,658.393692L328.068468,669.037131L341.671415,672.250202L391.807992,669.037131L417.264934,671.045303L442.819041,670.242034L471.871048,664.418305L507.530204,652.168186L512.679890,693.937946L530.169393,728.475896L548.339043,754.377918L556.403648,770.039007L538.914144,805.776727L504.518121,818.625670L467.401511,807.382862L442.236059,770.039007L421.928802,789.614733L359.355246,820.432529L294.061102,889.490187L315.728652,901.935696L326.222353,909.964904L329.234436,920.001250L328.068468,938.367286L380.731306,1012.527682L400.747070,1024.167646L436.114732,1018.749073L495.287552,994.465184L532.598492,988.945968L671.931532,1007.510381L737.808662,996.070762L753.646378,999.181561L751.897428,1024.167646L790.180007,1026.876910L828.073929,1003.095119L860.818165,989.648417L883.846011,1024.167646L881.514079,1061.795141L858.486232,1074.738401L831.571830,1083.367072L817.191573,1108.449649L827.490947,1144.265581L855.862806,1157.006260Z " />
       </g>
      </svg>

    </div>
  );
});

Martinique.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Martinique;
