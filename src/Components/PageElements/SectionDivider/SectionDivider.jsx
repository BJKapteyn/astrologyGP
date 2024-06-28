import { DividerGraphic } from '../DividerGraphic/DividerGraphic';
import '../../../App.css';
import './SectionDivider.css';

// Used as a title for the next page section
export const SectionDivider = ({dividerData}) => {

    return (
        <div className="divider">
            <div className="divider-sectionGraphic">
                <DividerGraphic needsFlip={true}></DividerGraphic>
            </div>

            {dividerData.map(data => {
                const {id, classname, headingText} = data;
                
                return (
                    <h1 key={id} className={classname}>{headingText}</h1>
                );
            })}

            <div className="divider-sectionGraphic">
                <DividerGraphic></DividerGraphic>
            </div>
        </div>
    );
}