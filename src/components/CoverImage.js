import React from 'react';
import './CoverImage.css';

const CoverImage = ({image, alt, height = 400}) => (
  <div className="cover-image" style={
    {
      backgroundImage: `url('${image}')`,
      width: '100%',
      height
    }
  }><span className="cover-image__alt">{alt}</span></div>
);

export default CoverImage;
