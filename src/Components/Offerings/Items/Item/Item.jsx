import '../../../../App.css';
import './Item.css';
import moon from '../../../../Pics/Landscapes/moonClouds.png';

export const Item = ({ item, callBackSelect }) => {

    return (
            <div onClick={() => callBackSelect(item)} style={{backgroundImage: `url(${moon})`}} className="item">
                <div className="item-header">
                    <h3 className="item-name">{item.Name}</h3>
                </div>
                <div className="item-booknow">
                    <button className="item-booknowbutton">+</button>
                </div>
            </div>
    );      
}