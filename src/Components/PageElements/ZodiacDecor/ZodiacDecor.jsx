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
    const signs = [
        aquarius, aries, cancer, capricorn, gemini, leo, libra, pisces, sagittarius, taurus, virgo, scorpio
    ];
    return (
        <div className="zodiacdecor">
            {signs.map(sign => {
                return(
                    <div className="zodiacdecor-zodiacsymbol">
                        <img src={sign} alt="zodiac symbol" />
                    </div>
                );
            })}
        </div>
    );
}