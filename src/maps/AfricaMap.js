import React from 'react';
import PropTypes from 'prop-types';
import Africa from './Africa/Africa';

const AfricaMap = React.memo(({countryList}) => {

  return (
    <>
      <Africa countryList={countryList}/>
    </>
  );
});

AfricaMap.propTypes = {
  countryList: PropTypes.array.isRequired
};

export default AfricaMap;
