import './ActionButton.css';

export const ActionButton = ({buttonSettings}) => {
    const {buttonText, action} = buttonSettings;

    const actionButtonWrapper = (event, buttonAction) => {
        event.preventDefault();
        buttonAction();
    }

    return (
        <button onClick={(event) => { actionButtonWrapper(event, action) }} className='actionButton-container'>
            <p className="actionButton-text">{buttonText}</p>
        </button>
    );
} 