import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import '../../../App.css';
import './JoinUs.css';

export const JoinUs = () => {
    const buttonSettings = {
        buttonText: 'JOIN THE COLLECTIVE',
        buttonStyleId: 'joinus-joinButton',
        action: null
    }
    const welcome = 'Welcome to The Vibe Collective!';
   
    const midText = 'At The Vibe Collective, we don’t just offer jobs – we offer a career filled with growth, purpose, and ' +
                    'fulfillment.Join us in providing transformative readings and services in an inclusive, collaborative ' +
                    'environment.';
    const endText = 'At The Vibe, we believe in working together to enhance your professional experience while making a ' +
                    'positive impact on others.Our commitment to spreading the power, confidence, and guidance that an ' +
                    'impactful reading, session, class, or event provides is unwavering.We ensure our readers, practitioners ' +
                    'teachers have the space, tools, training, and flexible schedules they need to deliver their best. ' +
                    'We invite authentic, mindful professionals to join us in building a global community of healers, readers,' +
                    'and practitioners.Come be a part of something truly special.';

    return (
        <section id ="joinus">
            <div className="joinus-flex" id="joinus-heading">
                <div className="joinus-flexItem" id="joinus-flexFirst">
                    <h1 className="joinus-leftText">WORK</h1>
                    <h1 className="joinus-leftText">WITH US</h1>
                </div>
                <div className="joinus-flexItem" id='joinus-textSection'>
                    <p id="joinus-text">{welcome}</p>
                    <p id="joinus-text">{midText}</p>
                    <p id="joinus-text">{endText}</p>
                    <ActionButton buttonSettings={buttonSettings} />
                </div>
            </div>
        </section>
    );
}