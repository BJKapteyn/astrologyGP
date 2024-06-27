import { DividerGraphic } from '../DividerGraphic/DividerGraphic';
import '../../../App.css';
import './SectionDivider.css';

// Used as a title for the next page section
export const SectionDivider = ({dividerData}) => {

    return (
        <section className="divider">
            <DividerGraphic needsFlip={true} />

            {dividerData.map(data => {
                const {id, classname, headingText} = data;
                
                return (
                    <h1 key={id} className={classname}>{headingText}</h1>
                );
            })}

            <DividerGraphic />
        </section>
    );
}