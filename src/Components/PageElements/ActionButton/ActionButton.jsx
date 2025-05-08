import '../../../App.scss';
import './ActionButton.css';

// General styled button component to be used for links or running scripts
//      buttonSettings - settings used to define the display name and action of the button
//      callback       - used to change state of the parent component, will override the action even if the action is defined previously
export const ActionButton = ({ buttonSettings, callback = null }) => {
    const {buttonText, buttonStyleId, action} = buttonSettings;
    
    // Override the default button behavior
    const actionButtonWrapper = (event, buttonAction) => {
        if(buttonAction) {
            event.preventDefault();
            buttonAction();
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