import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { Items } from '../../PageElements/ItemCard/Items';
import { LoadingIndicator } from '../../PageElements/LoadingIndicator/LoadingIndicator';
import { FunctionNames } from '../../../Enums/FunctionNames';
import { CategoryId } from '../../../Models/CategoryId';
import { buildAzureFunctionURL } from '../../../Functions/urlBuilders';
import { usePostAzureFunction } from '../../../CustomHooks/usePostAzureFunction';

export const StoreCategories = ({ squareStoreItems }) => {
    const [azureURL, setAzureURL] = useState(null);
    const [storeItems, setStoreItems] = useState(squareStoreItems);
    const [categoryId, setCategoryId] = useState(null);
    const urlParams = useRef(useLocation());

    // Get store data if nothing is passed from the parent
    const getSquareStoreItems = usePostAzureFunction(azureURL, categoryId, categoryId?.Id);
    if(getSquareStoreItems && !storeItems){
        setStoreItems(getSquareStoreItems);
    }
    
    useEffect(() => {
        if(!squareStoreItems){
            if(!azureURL) {
                const url = buildAzureFunctionURL(FunctionNames.GetItemsByCategoryId, process.env.REACT_APP_GET_ITEMS_BY_CATEGORY_ID);
                setAzureURL(url);
            }
            if(!categoryId) {
                const paramArray = urlParams.current.pathname.split('/');
                const id = paramArray[paramArray.length - 1].split('-')[1];
                setCategoryId(new CategoryId(id));
            }
        }
    }, [azureURL, categoryId, squareStoreItems]);
  
    if(!storeItems) {
        return <LoadingIndicator message={'Sorry nothing was found in that category'}></LoadingIndicator>
    }
    return (
        <section className="storecategories">
            <Items itemData={storeItems}></Items>
        </section>
    );
};
