import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { Items } from '../../PageElements/ItemCard/Items';
import { LoadingIndicator } from '../../PageElements/LoadingIndicator/LoadingIndicator';
import { FunctionNames } from '../../../Enums/FunctionNames';
import { CategoryId } from '../../../Models/CategoryId';
import { buildAzureFunctionURL } from '../../../UtilityFunctions/urlBuilders';
import { usePostAzureFunction } from '../../../CustomHooks/usePostAzureFunction';

export const ItemListByCategory = ({ itemList = null, productType = null }) => {
    const [azureURL, setAzureURL] = useState(null);
    const [storeItems, setStoreItems] = useState(itemList);
    const [categoryId, setCategoryId] = useState(null);
    const urlParams = useRef(useLocation());

    // Get store data from azure if nothing is passed from the parent
    const itemsByCategoryId = usePostAzureFunction(azureURL, categoryId, categoryId?.Id);
    if(itemsByCategoryId && !storeItems){
        setStoreItems(itemsByCategoryId);
    }
    
    useEffect(() => {
        if(!itemList){
            if(!azureURL) {
                const url = buildAzureFunctionURL(FunctionNames.GetItemsByCategoryId, process.env.REACT_APP_GET_ITEMS_BY_CATEGORY_ID);
                setAzureURL(url);
            }
            if(!categoryId) {
                const paramArray = urlParams.current.pathname.split('/');
                const id = paramArray[paramArray.length - 1].split('-')[1];

                setCategoryId(new CategoryId(id, productType, id));
            }
        }
    }, [azureURL, categoryId, itemList, productType]);
  
    if(!storeItems) {
        return <LoadingIndicator message={'Sorry nothing was found in that category'}></LoadingIndicator>
    }
    // Go directly to the item view if there is only one item under the category
    if(storeItems.length === 1) {
        const uri = `./${storeItems[0].name}-${storeItems[0].id}`
        return <Navigate to={uri} state={storeItems[0]}></Navigate>    
    }   
    return (
        <section id="storecategories">
            <Items itemData={storeItems}></Items>
        </section>
    );
};
