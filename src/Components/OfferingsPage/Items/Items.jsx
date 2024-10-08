import { useState } from 'react';
import { Item } from './Item/Item';
import { CardModal } from '../../PageElements/CardModal/CardModal';
import { ExpandedCard } from '../../PageElements/ExpandedCard/ExpandedCard';
import '../../../App.css';
import './Items.css';
import { Link } from 'react-router-dom';

export const Items = ({ itemData: items }) => {
    const [modalData, setModalData] = useState(null);
    const [appointmentItems, setAppointmentItems] = useState(items);
    const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam non qui quisquam consequatur rem sequi itaque vero eos, voluptas quia repudiandae quod ipsam accusantium ab vitae officiis, incidunt excepturi.'
    
    function deselectData() {
        setModalData(null);
    }

    function selectModalData(item) {
        if(item != null) {
            const itemDescription = item.Description ? item.Description : lorem;
            let itemMap = {
                name: item.Name,
                info: '1 HR | $100',
                description: itemDescription
            }
            setModalData(itemMap);
        }
    }
    
    return (
        <div className="items-flex">
            {items.map(item => {
                
                return (
                    <Link to={`./${item.name}`} state={item}>
                        <Item key={item.ItemId} callBackSelect={selectModalData} itemData={item}></Item>
                    </Link>
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