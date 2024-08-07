import { useState } from 'react';
import { Item } from './Item/Item';
import { CardModal } from '../../PageElements/CardModal/CardModal';
import { ExpandedCard } from '../../PageElements/ExpandedCard/ExpandedCard';
import '../../../App.css';
import './Items.css';

export const Items = ({ itemData: items }) => {
    const [modalData, setModalData] = useState(null);
    function deselectData() {
        setModalData(null);
    }
    const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam non qui quisquam consequatur rem sequi itaque vero eos, voluptas quia repudiandae quod ipsam accusantium ab vitae officiis, incidunt excepturi.'

    // Selects data for modal
    function selectData(item) {
        if(item != null) {
            const itemDescription = item.description ? item.description : lorem;
            let itemMap = {
                name: item.Name,
                info: '1 HR | $100',
                description: itemDescription
            }
            setModalData(itemMap);
        }
        console.log(item);
    }
    
    
    return (
        <div className="items-flex">
            {items.map(item => {
                
                return (
                    <Item key={item.ItemData.ItemId} callBackSelect={selectData} item={item.ItemData}></Item>
                );      
            })}

            {modalData && (
                <CardModal callBackDeselect={deselectData}>
                    <ExpandedCard styleId={'items-modal'} callBackDeselect={deselectData} productItem={modalData}></ExpandedCard>
                </CardModal>
            )}
        </div >
    );
}