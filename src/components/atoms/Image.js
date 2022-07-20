import React from "react";
import PropTypes from "prop-types";
import styles from "./Image.module.css";

const sizes = {
    sm: styles.circle,
    md: styles.circleMd,
    lg: styles.circleLg,
}

const Image = ({ src, alt, className, size }) => (
  <div className={`${sizes[size]} ${className}`}>
    <img src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
  size: 'sm',
}

export default Image;
