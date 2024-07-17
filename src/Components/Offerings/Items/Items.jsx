import { useState } from 'react';
import { Item } from './Item/Item';
import { CardModal } from '../../PageElements/CardModal/CardModal';
import '../../../App.css';
import './Items.css';
import { ItemModal } from './ItemModal/ItemsModal';

export const Items = ({ itemData: itemsData }) => {
    const [modalData, setModalData] = useState(null);
    function deselectData() {
        setModalData(null);
    }

    // Selects data for modal
    function selectData(bioData) {
        if(bioData != null) 
            setModalData(bioData);
    }
    
    
    return (
        <div className="items-flex">
            {itemsData.map(item => {
                const itemObject = item.ItemData;

                return (
                    <Item callBackSelect={selectData} itemData={itemObject}></Item>
                );      
            })}

            {modalData && (
                <CardModal callBackDeselect={deselectData}>
                    <ItemModal itemData={modalData}></ItemModal>
                </CardModal>
            )}
        </div >
    );
}