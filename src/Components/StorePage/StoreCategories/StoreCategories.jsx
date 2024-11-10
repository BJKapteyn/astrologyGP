import React from 'react';
import { useRef } from 'react';
import { Items } from '../../PageElements/ItemCard/Items';
import { LoadingIndicator } from '../../PageElements/LoadingIndicator/LoadingIndicator';

export const StoreCategories = ({ squareStoreItems }) => {
    const storeItems = useRef(squareStoreItems);
  
    if(!storeItems?.current) {
        <LoadingIndicator></LoadingIndicator>
    }
    return (
        <section className="storecategories">
            <Items itemData={storeItems.current}></Items>
        </section>
    );
};
