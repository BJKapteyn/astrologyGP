import '../../../App.css';
import './SectionDivider.css';

export const SectionDivider = ({textData, styleId}) => {


    return (
        <section className="divider">
            {textData.map(text => {
                return (
                    <h1 id={styleId} key={text} className="divider-text">{text}</h1>
                );
            })}
        </section>
    );
}