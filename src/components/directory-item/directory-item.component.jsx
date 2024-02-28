import React from "react";
import "./directory-item.styles.css";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
