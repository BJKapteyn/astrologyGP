import { useState } from 'react';
import { Item } from './Item/Item';
import { Link } from 'react-router-dom';
import { LoadingIndicator } from '../../PageElements/LoadingIndicator/LoadingIndicator';
import '../../../App.css';
import './Items.css';

export const Items = ({ itemData: items }) => {
    const [serviceItems, setServiceItems] = useState(items);

    if (serviceItems.state) {
        setServiceItems(serviceItems.state);
    }

    if(serviceItems.items) {
        setServiceItems(serviceItems.items);
    }

    // skip first render to allow serviceItems to update
    if(serviceItems.state)
        return <LoadingIndicator />
    
    return (
        <div className="items-flex">
            {serviceItems.map(item => {
                // if(item.category) {
                //     return (
                //         <Link key={item.category.id} to={`./${item.category.name}`} state={item.items}>
                //             <Item key={item.category.id} itemData={item.category}></Item>
                //         </Link>
                //     );
                // }
                
                return (
                    <Link key={item.id} to={`./${item.name}-${item.id}`} state={item}>
                        <Item itemData={item}></Item>
                    </Link>
                );      
            })}
        </div >
    );
}