import { Item } from './Item/Item';
import '../../../App.css';
import './Items.css';

export const Items = ({ itemData }) => {

    return (
        <div className="items-flex">
            {itemData.map(item => {
                const itemObject = item.ItemData;

                return (
                    <Item itemData={itemObject}></Item>
                );      
            }, [])}
        </div >
    );
}