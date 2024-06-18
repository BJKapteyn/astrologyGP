import '../../../App.css';
import './Items.css';
import moon from '../../../Pics/Landscapes/moonClouds.png';

export const Items = ({ itemData }) => {

    return (
        <div className="items-flex">
            {itemData.map(item => {
                const itemObject = item.ItemData;

                return (
                        <div key={item.Id} className="items-item">
                            <div className="items-image-container">
                                <img className="items-image" src={moon} alt="" />
                            </div>
                            <h4 className="items-name">{itemObject.Name}</h4>
                            <div className="items-description">
                                <p className="items-descriptiontext">{itemObject.Description}</p>
                            </div>
                            <div className="items-booknowbutton">
                                <button className="items-booknow">Book Now</button>
                            </div>
                        </div>
                );      
            }, [])}
        </div >
    );
}