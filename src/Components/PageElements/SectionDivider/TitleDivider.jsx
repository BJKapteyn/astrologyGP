import { DividerGraphic } from './DividerGraphic/DividerGraphic';
import { useMediaQuery } from 'react-responsive';
import '../../../App.css';
import './SectionDivider.css';
import { Link } from 'react-router-dom';

export const TitleDivider = () => {
    const isTablet = useMediaQuery({query: '(min-width: 750px)'});

    return (
        <section className="divider" id="divider-titleDivider">
            <div className="divider-titleGraphic">
                <DividerGraphic needsFlip={true}></DividerGraphic>
            </div>
            <Link className="divider-text divider-futura">ASTROLOGY</Link>

            {isTablet && (
                <div className="divider-titleGraphic">
                    <DividerGraphic isInBetween={true}></DividerGraphic>
                </div>
            )}

            <Link className="divider-text divider-futura divider-textglow">TAROT READINGS</Link>

            {isTablet && (
                <div className="divider-titleGraphic">
                    <DividerGraphic isInBetween={true}></DividerGraphic>
                </div>
            )}

            <Link className="divider-text divider-futura">MEDIUMSHIP</Link>
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