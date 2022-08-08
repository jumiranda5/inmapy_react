import React from 'react';
import PropTypes from 'prop-types';

// aria-hidden='true' => add visually hidden <p> in parent component.

const Icon = ({ path, icStyle }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden='true'
      className = { icStyle }>

      <g id="Icons">
        <path d={ path }/>
      </g>
    </svg>
  );
};

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  icStyle: PropTypes.string.isRequired
};

export default Icon;
