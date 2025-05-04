import React from 'react';
import gplLogo from '../media/gpl.png';

function Logo({ className = '', height = 48, alt = 'GPLE Logo', ...props }) {
  return (
    <img
      src={gplLogo}
      alt={alt}
      className={className}
      height={height}
      style={{ background: '#fff' }}
      {...props}
    />
  );
}

export default Logo;
