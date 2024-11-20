import { DividerGraphic } from './DividerGraphic/DividerGraphic';
import '../../../App.css';
import './SectionDivider.css';

// Decorated title text for a major page section
export const SectionDivider = ({ dividerData }) => {
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