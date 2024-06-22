import './ActionButton.css';

export const ActionButton = ({buttonSettings = {}}) => {
    const {buttonText, buttonStyleId, action } = buttonSettings;
    
    // Override the default button behavior
    const actionButtonWrapper = (event, buttonAction) => {
        if(buttonAction) {
            event.preventDefault();
            buttonAction();
        } else {
            console.debug(`Action button failed to fire`);
        }
    }

    return (
        <button
            id={buttonStyleId ?? ''}
            onClick={(event) => { action ?? actionButtonWrapper(event, action) }}
            className="actionbutton-container">
            {buttonText}
        </button>
    );
} 