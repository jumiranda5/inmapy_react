import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Belize = React.memo(({countrySubdivisions}) => {

  useEffect(() => {

    console.log("==== Belize ====");

    if (countrySubdivisions) {

      for (let i = 0; i < countrySubdivisions.length; i++) {
        const countrySubdivision = countrySubdivisions[i];

        const code = "BZ-00";

        console.log(`state: ${countrySubdivision} / ${code}`);

        const divPath = document.getElementById(code);
        divPath.classList.add("fill");


      }
    }
  }, [countrySubdivisions]);


  return (
    <div className="map_container">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1881">
        <g id="Belize">

          <path className="not-visited" id="BZ-00" admin="Belize" iso-a2="BZ" sov-a3="BLZ" type-en="District" d="M566.401596,0.000000L540.549433,10.060292L534.490610,10.903297L514.128699,4.533790L492.842862,21.168757L484.012261,34.392718L480.334324,56.304691L474.133359,73.719153L469.051766,100.416617L460.540984,113.969109L439.290683,138.618158L432.663291,150.276575L426.284647,185.002143L419.372969,195.945447L411.182008,202.249107L391.104383,211.919093L371.524256,226.525541L376.410404,238.699406L374.118357,246.833364L357.025724,275.756098L350.878061,307.083173L344.179597,317.791671L316.337438,338.159624L303.224795,372.983147L296.757312,380.641552L261.648120,407.162239L258.592056,412.353673L255.482689,428.337489L245.195127,435.955241L217.601718,419.710957L208.771117,412.913888L199.336409,392.595219L176.824594,391.885501L165.257750,382.920306L143.634326,361.065007L128.904810,355.908852L71.745766,376.831086L57.051788,397.936652L51.934658,426.582354L52.538764,489.528138L59.255997,845.332268L60.303317,1050.294025L36.133672,1438.402238L30.091260,1512.428582L19.517041,1660.363858L1.900505,1825.806645L0.265866,1869.449017L5.951566,1878.796590L22.049202,1870.520508L40.883080,1864.904325L93.511333,1867.379906L113.126995,1864.017538L135.176848,1863.869741L195.996061,1879.646339L222.063672,1869.425447L224.609926,1852.666890L210.255773,1822.869069L212.662122,1805.115470L220.412805,1795.364606L243.776776,1778.626497L261.740451,1773.357225L264.734397,1751.375566L278.836722,1736.699830L295.597223,1726.886042L298.619150,1714.450388L309.559644,1702.508805L321.563409,1700.295133L331.244767,1693.595652L337.764293,1682.759299L340.282566,1667.843391L338.799583,1640.046663L341.653625,1628.827355L360.568648,1623.057078L372.712317,1614.051476L395.936383,1610.787167L402.875622,1604.316617L402.567833,1591.724424L417.425640,1587.759981L424.392860,1601.022935L433.878352,1606.998143L443.531730,1604.724679L448.260485,1589.159209L452.961260,1589.159209L452.961260,1618.947797L460.823866,1602.975836L479.654946,1599.827863L481.109948,1591.228875L506.488536,1548.634256L514.574988,1542.073359L523.416922,1520.638952L542.611753,1510.897605L544.934160,1486.424573L557.861291,1480.444216L571.935635,1452.085073L584.862766,1442.338928L581.728916,1424.654055L594.208354,1412.512638L594.208354,1408.076087L581.616993,1404.573445L580.189972,1398.268466L586.485653,1401.012334L598.965091,1398.268466L584.862766,1392.926523L599.804515,1375.410508L618.383768,1328.368999L636.515329,1318.993816L620.510309,1338.532026L598.965091,1420.071963L601.035670,1431.249667L613.431166,1417.824639L608.870295,1399.786358L622.832716,1348.869508L639.984948,1325.740508L646.336591,1274.854682L641.635815,1247.914350L643.146779,1240.433230L665.111709,1210.680026L679.605765,1210.680026L674.877010,1201.326007L672.218833,1188.930942L658.788048,1167.704691L655.738141,1154.487773L659.067856,1142.936535L676.387973,1119.567855L683.914809,1112.576940L701.039060,1108.393918L702.661947,1100.027486L698.688673,1082.532361L696.897902,1059.738483L693.652129,1044.111181L687.944044,1030.208964L679.605765,1019.261785L658.424298,1010.597074L648.770921,963.575387L643.902261,948.376174L647.036110,905.053302L653.695542,831.908408L682.124038,736.548261L683.914809,725.371466L691.861357,718.858564L709.489263,721.498968L727.229092,721.674994L735.511410,707.680261L729.075826,701.753319L700.255598,696.677062L693.680109,690.690933L688.559623,679.774346L664.048439,667.242623L655.738141,658.466765L652.716213,641.177479L655.822083,625.735532L663.041130,612.493923L680.920863,591.087229L686.377120,579.016878L703.165601,519.294672L711.475900,459.309645L707.306761,440.641277L747.655079,376.060092L773.509341,309.650930L775.747805,298.319366L785.373201,281.011026L787.611666,269.706345L793.095903,203.329849L787.527723,117.701428L785.261278,113.751564L765.954524,122.063819L760.806056,130.670253L749.837581,131.524969L750.061428,123.596514L768.808566,113.751564L782.463197,103.198333L787.611666,86.275932L775.943671,84.683811L752.132007,92.054570L731.314290,106.558955L716.708311,108.799321L687.720199,96.123043L672.358737,93.941415L660.942570,96.064080L650.169961,101.193708L627.365606,117.730904L615.781554,130.817618L602.434710,132.261789L621.965311,105.792506L632.234266,84.035163L599.300860,99.071129L589.563541,98.452037L581.700935,87.101467L586.709499,76.693417L639.956967,38.031556L653.471695,20.274341L637.721585,6.144931L595.132145,6.500878L581.841824,10.922030L566.401596,0.000000Z M961.764184,796.728196L969.374963,804.204776L971.725350,822.352044L971.165734,866.024270L980.931034,856.177294L980.931034,866.024270L985.631810,866.024270L989.912872,836.539771L978.328820,801.917867L970.354291,789.045935L961.764184,796.728196Z M969.011212,683.501348L961.764184,707.680261L980.931034,697.880124L986.667099,707.034765L985.379982,722.173730L980.091610,736.313587L973.460160,742.590960L954.601099,737.076275L947.661859,737.692288L933.559535,752.446417L912.769798,769.515729L907.313541,780.894039L904.011807,815.462825L891.308522,866.024270L901.101803,875.870513L901.773343,865.672605L910.083641,844.131338L914.364703,811.915471L919.289325,794.353194L935.909922,778.899973L942.961085,767.169563L956.615717,777.902929L966.576883,771.333978L982.693825,746.756155L996.908073,718.594520L999.734134,707.680261L995.509032,693.302562L987.058830,686.201157L969.011212,683.501348Z M797.432927,614.079464L806.246880,654.063939L815.760353,678.160257L820.433148,678.160257L813.689774,639.709692L806.862458,622.183037L797.432927,614.079464Z M740.212185,584.508879L735.511410,594.376278L757.812110,592.408732L779.273386,585.184351L795.334367,570.763752L801.658029,547.323183L793.655519,550.965856L754.622299,577.812718L740.212185,584.508879Z M910.083641,336.577737L901.101803,356.791169L896.009297,341.521056L908.404793,329.338958L910.083641,321.746627L919.485190,327.131932L926.172602,314.094982L940.218966,275.182176L954.405233,258.577315L955.552446,242.500320L948.697149,232.605769L933.559535,242.706449L922.758945,238.083205L915.987590,244.502694L905.802578,282.600666L903.955845,295.346503L896.009297,304.500345L883.361974,349.730072L880.451970,372.147706L891.308522,371.588784L887.754960,390.178982L878.829084,402.855239L853.758284,420.940998L844.356734,420.940998L844.356734,425.822245L874.072347,417.676928L895.561604,396.590796L908.936428,367.823351L914.364703,336.577737L910.083641,336.577737Z M784.813585,703.807241L774.600592,699.758051L769.899817,707.064106L778.266077,717.714372L789.710225,719.738705L792.816095,743.881598L797.572832,744.409583L804.008416,723.171197L797.600812,713.665613L784.813585,703.807241Z M871.833883,289.606620L861.313101,299.231816L863.327719,303.793963L876.338792,297.495213L871.833883,289.606620Z M892.147946,269.529701L881.347356,282.424040L882.186780,291.490507L894.302468,280.186760L892.147946,269.529701Z M934.175112,204.684820L930.033954,204.007337L925.668948,212.490349L923.766253,224.860386L927.711547,228.306110L934.259054,219.824161L936.693385,205.951411L934.175112,204.684820Z " />

       </g>
      </svg>

    </div>
  );
});

Belize.propTypes = {
  countrySubdivisions: PropTypes.array.isRequired
};

export default Belize;
