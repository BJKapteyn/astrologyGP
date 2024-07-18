import './CardModal.css';
import '../../../App.css';

export const CardModal = ({ callBackDeselect, children }) => {

    return (
        <div className="cardmodal">
            <section className="cardmodal-container">
                <div className="cardmodal-card">
                    <span onClick={callBackDeselect} className="cardmodal-exit">X</span>

                    {children}

                </div>
            </section>
            <div className="cardmodal-background" onClick={callBackDeselect}></div>
        </div>
    );
}

