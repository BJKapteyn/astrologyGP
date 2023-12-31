import aquarius from '../../../Pics/Zodiac/aquarius.svg';
import aries from '../../../Pics/Zodiac/aries.svg';
import cancer from '../../../Pics/Zodiac/cancer.svg';
import capricorn from '../../../Pics/Zodiac/capricorn.svg';
import gemini from '../../../Pics/Zodiac/gemini.svg';
import leo from '../../../Pics/Zodiac/leo.svg';
import libra from '../../../Pics/Zodiac/libra.svg';
import pisces from '../../../Pics/Zodiac/pisces.svg';
import sagittarius from '../../../Pics/Zodiac/sagittarius.svg';
import scorpio from '../../../Pics/Zodiac/scorpio.svg';
import taurus from '../../../Pics/Zodiac/taurus.svg';
import virgo from '../../../Pics/Zodiac/virgo.svg';

export const ZodiacDecor = () => {
    return (
        <div className="zodiacdecor">
            <img src={aquarius} alt="aquarius zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={aries} alt="aries zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={cancer} alt="cancer zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={capricorn} alt="capricorn zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={gemini} alt="gemini zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={leo} alt="leo zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={libra} alt="libra zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={pisces} alt="pisces zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={sagittarius} alt="sagittarius zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={scorpio} alt="scorpio zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={taurus} alt="taurus zodiac symbol" className="zodiacdecor-zodiacsymbol" />
            <img src={virgo} alt="virgo zodiac symbol" className="zodiacdecor-zodiacsymbol" />
        </div>
    );
}