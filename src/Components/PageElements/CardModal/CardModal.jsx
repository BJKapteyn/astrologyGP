import './CardModal.css';
import '../../../App.css';

// Displays content in a modal with a darkened translucent background
//      callBackDeselect: function to remove the modal
//      children: jsx to display
//      containerStyleId: custom display styling 
export const CardModal = ({ callBackDeselect, children, containerStyleId}) => {

    return (
        <div className="cardmodal">
            <section id={containerStyleId} className="cardmodal-container">
                <div className="cardmodal-card">

                    {children}
                    
                </div>
            </section>
            <div className="cardmodal-background" onClick={callBackDeselect}></div>
        </div>
    );
}

