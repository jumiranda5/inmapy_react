import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Counter = React.memo(props => {

  const { count, linkTo, label, scrollToTrips} = props;

  console.log('counter render');

  return (
    <li className="clearfix">
      <Link to={ linkTo } onClick={ scrollToTrips }>
        <p className="counter">{ count }</p>
        <p className="counter_label ellipsize">{ label }</p>
      </Link>
    </li>
  );
});

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  linkTo: PropTypes.string.isRequired,
  label: PropTypes.object.isRequired,
  scrollToTrips: PropTypes.func
};

export default Counter;
