import React from "react";

import "./collectionItem.styles.scss";

const CollectionItem = props => {
  const { name, price, imageUrl } = props;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
