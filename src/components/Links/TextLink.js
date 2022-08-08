import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TextLink = props => {

  const { text, linkStyle, to } = props;

  // styles not working on Link tag => style p

  return (

    <Link to = { to }>
      <p className = { linkStyle }>{ text }</p>
    </Link>

  );
};

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.any.isRequired,
  linkStyle: PropTypes.string
};

export default TextLink;
