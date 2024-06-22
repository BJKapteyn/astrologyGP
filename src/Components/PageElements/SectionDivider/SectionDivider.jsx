import '../../../App.css';
import './SectionDivider.css';

export const SectionDivider = ({dividerData}) => {

    return (
        <section className="divider">
            {dividerData.map(data => {
                const {id, classname, headingText} = data;

                return (
                    <h1 key={id} className={classname}>{headingText}</h1>
                );
            })}
        </section>
    );
}