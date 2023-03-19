import React from "react";
import CollectionsOreview from "../../components/collection-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component.jsx";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOreview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
