import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import './Book.css';

export const Book = () => {
    const styleId = 'bookButton';

    return (
        <section className="book-section">
            <h1 className="book-title">Book With Us</h1>
            <p className="book-subtext">Easily book online, no need to sign up</p>
            <div className="book-buttons">
                <ActionButton buttonSettings={{buttonText: 'Birth Cart Reading', buttonStyleId: styleId}}></ActionButton>
                <ActionButton buttonSettings={{buttonText: 'Past Life Reading', buttonStyleId: styleId}}></ActionButton>
                <ActionButton buttonSettings={{buttonText: 'Career Reading', buttonStyleId: styleId}}></ActionButton>
                <ActionButton buttonSettings={{buttonText: 'Relationship Reading', buttonStyleId: styleId}}></ActionButton>
            </div>
        </section>
    );
}