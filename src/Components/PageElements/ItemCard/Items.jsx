import { useState } from 'react';
import { Item } from './Item/Item.jsx';
import { Link } from 'react-router-dom';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator.jsx';
import '../../../App.css';
import './Items.css';

export const Items = ({ itemData: items }) => {
    const [productItems, setProductItems] = useState(items);

    // Check for data coming from state
    if (productItems.state) {
        setProductItems(productItems.state);
    }

    // Check for data coming from parent
    if(productItems.items) {
        setProductItems(productItems.items);
    }

    // productItems will be null on the first render
    if(productItems.state)
        return <LoadingIndicator />
    
    return (
        <div className="items-flex">
            {productItems.map(item => {
                if(item.category) {
                    return (
                        <Link key={item.category.id} to={`./${item.category.name}`} state={item.items}>
                            <Item key={item.category.id} itemData={item.category}></Item>
                        </Link>
                    );
                }
                
                return (
                    <Link key={item.id} to={`./${item.name}`} state={item}>
                        <Item itemData={item}></Item>
                    </Link>
                );      
            })}
        </div >
    );
}