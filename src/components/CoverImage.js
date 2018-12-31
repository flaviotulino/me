import React from 'react';
import PropTypes from 'prop-types';
import './CoverImage.css';

const CoverImage = ({ image, alt, height = null }) => (
  <div
    className="cover-image"
    style={
      {
        backgroundImage: `url('${image}')`,
        height,
      }
    }
  >
    <span className="cover-image__alt">{alt}</span>
  </div>
);

CoverImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string || PropTypes.number,
};


export default CoverImage;
