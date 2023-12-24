import './ActionButton.css';

export const ActionButton = ({buttonSettings}) => {
    const {buttonText, buttonStyleId, textStyleId, action, href} = buttonSettings;

    // Always override the defualt button behavior
    const actionButtonWrapper = (event, buttonAction) => {
        event.preventDefault();
        if(buttonAction != null) {
            buttonAction();
        }
    }

    return (
        <button id={buttonStyleId ?? ''} onClick={(event) => { action ?? actionButtonWrapper(event, action) }} className={'actionButton-container'}>
            <p id={textStyleId ?? ''} className="actionButton-text">{buttonText}</p>
        </button>
    );
} 