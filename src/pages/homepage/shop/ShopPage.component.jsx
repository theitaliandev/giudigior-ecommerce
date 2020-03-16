import React from "react";
import CollectionPreview from "../../../components/collection-preview/CollectionPreview.component";
import shopData from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
