import { DividerGraphic } from '../DividerGraphic/DividerGraphic';
import { useMediaQuery } from 'react-responsive';
import '../../../App.css';
import './SectionDivider.css';

export const TitleDivider = ({dividerData}) => {
    const isTablet = useMediaQuery({query: '(min-width: 750px)'});

    return (
        <section className="divider" id="divider-titleDivider">
            <div className="divider-titleGraphic">
                <DividerGraphic needsFlip={true}></DividerGraphic>
            </div>

            <h1 className="divider-text divider-futura">ASTROLOGY</h1>

            {isTablet && (
                <div className="divider-titleGraphic">
                    <DividerGraphic isInBetween={true}></DividerGraphic>
                </div>
            )}

            <h1 className="divider-text divider-futura divider-textglow">TAROT READINGS</h1>

            {isTablet && (
                <div className="divider-titleGraphic">
                    <DividerGraphic isInBetween={true}></DividerGraphic>
                </div>
            )}

            <h1 className="divider-text divider-futura">MEDIUMSHIP</h1>

            <div className="divider-titleGraphic">
                <DividerGraphic></DividerGraphic>
            </div>
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