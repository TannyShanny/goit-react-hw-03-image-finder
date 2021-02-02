import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((elem) => (
        <ImageGalleryItem
          key={elem.id}
          url={elem.webformatURL}
          alt={elem.tags}
          modalImage={elem.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
