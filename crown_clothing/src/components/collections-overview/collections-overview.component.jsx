import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.components';
import { collectionsForPreviewSelector } from '../redux/shop/shop.selector';

import './collections-overview.styled.scss';

const CollectionOverview = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(collection => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: collectionsForPreviewSelector,
});

export default connect(mapStateToProps)(CollectionOverview);
