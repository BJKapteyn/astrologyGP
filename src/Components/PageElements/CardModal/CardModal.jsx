import { useState } from "react";
import { CardInfoData } from '../BioCard/CardInfoData.jsx';
import { Card } from './Card.jsx';

export const CardModal = (data) => {
    const [bioData, selectBioData] = useState(CardInfoData);
    selectBioData(data);

    function deSelect() {
        selectBioData({});
    }

    function select() {

    }

    return (
        <div className="cardmodal-background" onClick={deSelect}>

        </div>
    );
}

