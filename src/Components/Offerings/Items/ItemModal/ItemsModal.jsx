import '../../../../App.css';
import './ItemsModal.css';
import moon from '../../../../Pics/Landscapes/moonClouds.png';

export const ItemModal = ({ itemData }) => {

    return (

        <div className="item-modal-item">
            <div className="item-modal-image-container">
                <img className="item-modal-image" src={moon} alt="" />
            </div>
            <h4 className="item-modal-name">{itemData.Name}</h4>
            <div className="item-modal-description">
                <p className="item-modal-descriptiontext">{itemData.Description}</p>
            </div>
            <div className="item-modal-booknowbutton">
                <button className="item-modal-booknow">Book Now</button>
            </div>
        </div>
    );
}