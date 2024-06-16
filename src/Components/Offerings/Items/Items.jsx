import './Items.css';

export const Items = ({ itemData }) => {

    return (
        <ul>
            {itemData.map(item => {

               return <li key={item.Id}>{item.ItemData.Name}</li>;
            }, [])}
        </ul>
    );
}