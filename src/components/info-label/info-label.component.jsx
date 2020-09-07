import React from 'react'

import './info-label.styles.scss'

const InfoLabel = ({ children, color, status, ...otherProps }) => (
  <span
    className={`${color ? color : 'red'}-outline info-label`}
    {...otherProps}
  >
    {status ? status : 'COMING SOON'}
    {children}
  </span>
);

export default InfoLabel;