import './CardModal.css';
import '../../../App.css';

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

