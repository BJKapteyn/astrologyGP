import { DividerGraphic } from '../DividerGraphic/DividerGraphic';
import '../../../App.css';
import './SectionDivider.css';

export const TitleDivider = ({dividerData}) => {

    return (
        <section className="divider" id="divider-titleDivider">
            <div className="divider-titleGraphic">
                <DividerGraphic needsFlip={true}></DividerGraphic>
            </div>
            <h1 className="divider-text divider-futura">TAROT READINGS</h1>
            <div className="divider-titleGraphic">
                <DividerGraphic isInBetween={true}></DividerGraphic>
            </div>
            <h1 className="divider-text divider-futura divider-textglow">ASTROLOGY</h1>
            <div className="divider-titleGraphic">
                <DividerGraphic isInBetween={true}></DividerGraphic>
            </div>
            <h1 className="divider-text divider-futura">MEDIUMSHIP</h1>
            <div className="divider-titleGraphic">
                <DividerGraphic></DividerGraphic>
            </div>

            {/* {dividerData.map(data => {
                const {id, classname, headingText} = data;

                return (
                    <h1 key={id} className={classname}>{headingText}</h1>
                );
            })} */}
        </section>
    );
}
export const titleDividerData = [
    {
        id: 1,
        classname: 'divider-text divider-futura',
        headingText: 'TAROT READINGS'
    },
    {
        id: 2,
        classname: 'divider-text divider-futura divider-textglow',
        headingText: 'ASTROLOGY'
    },
    {
        id: 3,
        classname: 'divider-text divider-futura',
        headingText: 'MEDIUMSHIP'
    },
]