import { useState } from 'react';
import { Item } from './Item/Item';
import { Link } from 'react-router-dom';
import { LoadingIndicator } from '../../PageElements/LoadingIndicator/LoadingIndicator';
// import { CardModal } from '../../PageElements/CardModal/CardModal';
// import { ExpandedCard } from '../../PageElements/ExpandedCard/ExpandedCard';
import '../../../App.css';
import './Items.css';

export const Items = ({ itemData: items }) => {
    // const [modalData, setModalData] = useState(null);
    const [serviceItems, setServiceItems] = useState(items);

    if (serviceItems.state) {
        setServiceItems(serviceItems.state);
    }

    if(serviceItems.items) {
        setServiceItems(serviceItems.items);
    }

    // const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam non qui quisquam consequatur rem sequi itaque vero eos, voluptas quia repudiandae quod ipsam accusantium ab vitae officiis, incidunt excepturi.'
    
    // function deselectData() {
    //     setModalData(null);
    // }

    // function selectModalData(item) { 
    //     if(item != null) {
    //         const itemDescription = item.Description ? item.Description : lorem;
    //         let itemMap = {
    //             id: item.Id,
    //             name: item.Name,
    //             info: '1 HR | $100',
    //             description: itemDescription
    //         }
    //         setModalData(itemMap);
    //     }
    // }

    // skip on initial render
    if(serviceItems.state)
        return <LoadingIndicator />
    
    return (
        <div className="items-flex">
            {serviceItems.map(item => {
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
{/* 
            {modalData && (
                <CardModal callBackDeselect={deselectData}>
                    <ExpandedCard styleId={'items-modal'} callBackDeselect={deselectData} productItem={modalData}></ExpandedCard>
                </CardModal>
            )} */}
        </div >
    );
}