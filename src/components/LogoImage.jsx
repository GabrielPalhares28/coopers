import React from 'react';

const LogoImage = ({ src, alt, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: '231px',
        height: '231px',
        position: 'absolute',
        top: '20px',
        left: '20px',
        ...style,
      }}
    />
  );
};

export default LogoImage;
