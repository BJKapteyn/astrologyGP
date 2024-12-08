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
    const [azureId, setAzureId] = useState(null);
    const [storeItems, setStoreItems] = useState(squareStoreItems);
    const urlParams = useRef(useLocation());

    // Get store data if nothing is passed from the parent
    const getSquareStoreItems = usePostAzureFunction(azureURL, new CategoryId(azureId));
    if(getSquareStoreItems && !storeItems){
        setStoreItems(getSquareStoreItems);
    }
    
    useEffect(() => {
        if(!squareStoreItems){

            if(!azureURL) {
                const url = buildAzureFunctionURL(FunctionNames.GetItemsByCategoryId, process.env.REACT_APP_GET_ITEMS_BY_CATEGORY_ID);
                setAzureURL(url);
            }
            if(!azureId) {
                const paramARr = urlParams.current.pathname.split('/');
                const id = paramARr[paramARr.length - 1].split('-')[1];
                setAzureId(id);
            }
        }
    }, [azureURL, azureId, squareStoreItems]);
  
    if(!storeItems) {
        return <LoadingIndicator message={'Sorry nothing was found in that category'}></LoadingIndicator>
    }
    return (
        <section className="storecategories">
            <Items itemData={storeItems}></Items>
        </section>
    );
};
