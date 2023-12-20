import './ActionButton.css';

export const ActionButton = ({buttonSettings}) => {
    const {buttonText, buttonStyleId, buttonTextStyleId, action} = buttonSettings;

    // Always override the defualt button behavior
    const actionButtonWrapper = (event, buttonAction) => {
        event.preventDefault();
        if(buttonAction != null) {
            buttonAction();
        }
    }

    return (
        <button id={buttonStyleId ?? ''} onClick={(event) => { actionButtonWrapper(event, action) }} className={'actionButton-container'}>
            <p id={buttonTextStyleId ?? ''} className="actionButton-text">{buttonText}</p>
        </button>
    );
} 