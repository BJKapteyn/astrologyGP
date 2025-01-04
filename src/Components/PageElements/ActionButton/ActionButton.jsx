import '../../../App.css';
import './ActionButton.css';

// buttonSettings - settings used to define the button
// callback       - used to change state of the parent component, will override the action even if the action is defined previously
// action         - script to be executed on click
export const ActionButton = ({ buttonSettings, callback = null }) => {
    const {buttonText, buttonStyleId, action} = buttonSettings;
    
    // Override the default button behavior
    const actionButtonWrapper = (event, buttonAction) => {
        if(buttonAction) {
            event.preventDefault();
            buttonAction();
        } else {
            console.debug('Action button failed to fire:' +
                            ` text: ${buttonText}` +
                            ` buttonStyleId: ${buttonStyleId}`);
        }
    }

    function executeAction(event) {
        if(callback) {
            // fire without a wrapper if the button's action is a child callback to the parent component
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