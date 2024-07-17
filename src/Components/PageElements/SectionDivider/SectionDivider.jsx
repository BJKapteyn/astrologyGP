import { DividerGraphic } from './DividerGraphic/DividerGraphic';
import '../../../App.css';
import './SectionDivider.css';

// Used as a title for the next page section
export const SectionDivider = ({dividerData}) => {
    const {classname, headingText} = dividerData;

    return (
        <div className="divider">
            <div className="divider-sectionGraphic">
                <DividerGraphic needsFlip={true}></DividerGraphic>
            </div>
            <h1 className={classname ?? 'divider-text'}>{headingText}</h1>
            <div className="divider-sectionGraphic">
                <DividerGraphic></DividerGraphic>
            </div>
        </div>
    );
}