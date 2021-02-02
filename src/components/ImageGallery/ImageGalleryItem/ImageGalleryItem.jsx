import React from "react";
import PropTypes, { string } from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ url, alt, openModal, modalImage }) => {
  return (
    <li
      onClick={() => openModal(modalImage)}
      className={styles.imageGalleryItem}
    >
      <img src={url} alt={alt} className={styles.imageGalleryItemImg} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: string.isRequired,
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
