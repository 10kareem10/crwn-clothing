import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";

const collectionsOreview = ({ collections }) => (
  <div className='collections-oreview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(collectionsOreview);
