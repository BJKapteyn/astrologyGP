import { CategorySection } from "../Components/OfferingsPage/CategorySection/CategorySection";
import { useEffect, useState } from "react";

// Page that shows all of the services and products
export default function Offerings() {
    const [endpointUrl, setEndpointUrl] = useState(`${process.env.REACT_APP_FUNCTIONS_URL}/getitems?code=${process.env.REACT_APP_GET_ITEMS}`);
    const [appointmentItems, setAppointmentItemData] = useState(null);

    useEffect(() => {
        let active = true;

        const getAllItems = async () => {
            await fetch(endpointUrl)
                .then(response => response.json())
                .then(data => {
                    if (active){
                        setAppointmentItemData(data);
                        console.log(data);
                    }
                        
                }).catch(err => console.log(err));
        }

        getAllItems();

        return () => {
            active = false;
        }
    }, []);

    if(!appointmentItems || !Array.isArray(appointmentItems)) {

        return <span>Loading...</span>
    } else {

        return (
            <main>
                <CategorySection appointmentItemData={appointmentItems} />
            </main>
        );
    }
}