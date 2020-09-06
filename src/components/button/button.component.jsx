import React from 'react';

import './button.styles.scss';

const Button = ({ children, color, ...otherProps }) => (
  <button
    className={`${color} button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;