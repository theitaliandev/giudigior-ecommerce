import React from "react";
import CollectionItem from "../collection-item/CollectionItem.component";
import "./collectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <div className="title">{title}</div>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
