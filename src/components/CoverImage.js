import React from 'react';
import './CoverImage.css';

const CoverImage = ({image, alt, height = null}) => (
  <div className="cover-image" style={
    {
      backgroundImage: `url('${image}')`,
      height
    }
  }><span className="cover-image__alt">{alt}</span></div>
);

export default CoverImage;
