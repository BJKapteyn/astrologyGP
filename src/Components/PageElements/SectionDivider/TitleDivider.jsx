import { Link } from 'react-router-dom';
import { DividerGraphic } from './DividerGraphic/DividerGraphic';
import { useMediaQuery } from 'react-responsive';
import '../../../App.css';
import './SectionDivider.css';

export const TitleDivider = () => {
    const isTablet = useMediaQuery({query: '(min-width: 750px)'});

    return (
        <section className="divider" id="divider-titleDivider">
            <div className="divider-titleGraphic">
                <DividerGraphic needsFlip={true}></DividerGraphic>
            </div>
            <Link  to={'https://thevibecollective.co/Offerings/Astrology-SWLZ6MMXKJSRVKRNRVKXVQGJ'}>
                <h1 className="divider-text divider-futura link-colorfade">ASTROLOGY</h1>
            </Link>
            {isTablet && (
                <div className="divider-titleGraphic">
                    <DividerGraphic isInBetween={true}></DividerGraphic>
                </div>
            )}
            <Link to={'https://thevibecollective.co/Offerings/Tarot-BO3VI3MRP5O4QUSPWJPHB7WJ'}>
                <h1 className="divider-text divider-futura divider-textglow link-colorfade">TAROT READINGS</h1>
            </Link>
            {isTablet && (
                <div className="divider-titleGraphic">
                    <DividerGraphic isInBetween={true}></DividerGraphic>
                </div>
            )}
            {isTablet && (
                <Link to={'https://thevibecollective.co/Offerings/Life%20Coaching-YBBDQEGFZ52IACA5CUXB2GEM/Empowerment%20Strategy%20Session-CBTEGWQKT4J4TGZJT4PEKCJR'}>
                    <h1 className="divider-text divider-futura divider-textglow link-colorfade">EMPOWERMENT STRATEGY</h1>
                </Link>
            )}
            {isTablet && (
                <div className="divider-titleGraphic">
                    <DividerGraphic isInBetween={true}></DividerGraphic>
                </div>
            )}
            <Link to={'https://thevibecollective.co/Offerings/Mediumship-WBIUSSJV2DQ2TXNJVNWIT6A3'}>
                <h1 className="divider-text divider-futura link-colorfade">MEDIUMSHIP</h1>
            </Link>
            <div className="divider-titleGraphic">
                <DividerGraphic></DividerGraphic>
            </div>
        </section>
    );
}
// export const titleDividerData = [
//     {
//         id: 1,
//         classname: 'divider-text divider-futura',
//         headingText: 'TAROT READINGS'
//     },
//     {
//         id: 2,
//         classname: 'divider-text divider-futura divider-textglow',
//         headingText: 'ASTROLOGY'
//     },
//     {
//         id: 3,
//         classname: 'divider-text divider-futura',
//         headingText: 'MEDIUMSHIP'
//     },
// ]