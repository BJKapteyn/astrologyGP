import { ActionButton } from "../../PageElements/ActionButton/ActionButton";
import './Book.css';

export const Book = () => {
    return (
        <section className="book-section">
            <h1 className="book-title">Book With Us</h1>
            <p className="book-subtext">Easily book online, no need to sign up</p>
            <div className="book-buttons">
                <ActionButton buttonSettings={{buttonText: 'Birth Cart Reading', buttonStyleId: 'book-button'}}></ActionButton>
                <ActionButton buttonSettings={{buttonText: 'Past Life Reading', buttonStyleId: 'book-button'}}></ActionButton>
                <ActionButton buttonSettings={{buttonText: 'Career Reading', buttonStyleId: 'book-button'}}></ActionButton>
                <ActionButton buttonSettings={{buttonText: 'Relationship Reading', buttonStyleId: 'book-button'}}></ActionButton>
            </div>
        </section>
    );
}