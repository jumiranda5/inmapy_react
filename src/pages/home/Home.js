import React from 'react';
import { FormattedMessage as Msg } from "react-intl";
import CompassArrow from '../../assets/compass-arrow.svg';
import GooglePlayBadge from '../../assets/google-play-badge.png';

const Home = () => {
  return (
    <div className='home flex-center-column'>

      <main className="home_main">

        <img className="home_img_compass_arrow" src={ CompassArrow } alt=""/>

        <div className="home_text_container">
          <h1 className="headline home_headline"><Msg id="h_home"/></h1>

          <p className="home_about"><Msg id="home_text"/></p>

          {/* todo: gogle play store link */}
          <img className="home_img_badge" src={GooglePlayBadge} alt=""/>
        </div>


      </main>

      <footer className="home_footer clearfix">&copy; 2020</footer>

    </div>

  );
};

export default Home;
