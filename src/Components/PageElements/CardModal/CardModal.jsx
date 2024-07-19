import './CardModal.css';
import '../../../App.css';

export const CardModal = ({ callBackDeselect, children, containerStyleId, showExitButton = true }) => {

    return (
        <div className="cardmodal">
            <section id={containerStyleId} className="cardmodal-container">
                <div className="cardmodal-card">

                    {showExitButton && <span onClick={callBackDeselect} className="cardmodal-exit">X</span>}
                    {children}
                    
                </div>
            </section>
            <div className="cardmodal-background" onClick={callBackDeselect}></div>
        </div>
    );
}

