import './ActionButton.css';

export const ActionButton = ({buttonSettings}) => {
    const {buttonText, action} = buttonSettings;

    return (
        <div onClick={action} className='actionButton-container'>
            <p className="actionButton-text">{buttonText}</p>
        </div>
    );
} 