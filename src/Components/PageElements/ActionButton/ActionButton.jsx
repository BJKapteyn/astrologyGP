import './ActionButton.css';

// buttonSettings - settings used to define the button
// callback       - used to change state of the parent component, will override the action even if the action is defined
export const ActionButton = ({ buttonSettings, callback = null }) => {
    const {buttonText, buttonStyleId, action } = buttonSettings;
    
    // Override the default button behavior
    const actionButtonWrapper = (event, buttonAction) => {
        if(buttonAction) {
            event.preventDefault();
            buttonAction();
        } else {
            console.debug('Action button failed to fire:' +
                            `/n text: ${buttonText}` +
                            `/n buttonStyleId: ${buttonStyleId}`);
        }
    }

    function executeAction(event) {
        if(callback) {
            callback();
        } else {
            actionButtonWrapper(event, action)
        }
    }

    return (
        <button
            id={buttonStyleId ?? ''}
            onClick={(event) => executeAction(event)}
            className="actionbutton-container">
            {buttonText}
        </button>
    );
} 