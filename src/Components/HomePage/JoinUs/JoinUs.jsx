import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import './JoinUs.css';

export const JoinUs = () => {
    const buttonSettings = {
        buttonText: 'TELL ME MORE',
        buttonStyleId: 'joinus-joinButton',
        action: null
    }

    return (
        <section id ="joinus">
            <div className="joinus-flex">
                <div className="joinus-flexItem">
                    <h1 className="joinus-leftText">JOIN THE COLLECTIVE</h1>
                </div>
                <div className="joinus-flexItem" id='joinus-textSection'>
                    <p id="joinus-text">At The Vibe Collective, we don't just offer jobs, we creaft careers within a dynamic and
                                                inclusive ecosystem. We're committed to fostering growth, embracing collaboration and
                                                achieving harmonious work-life balance.</p>
                    <ActionButton buttonSettings={buttonSettings} />
                </div>
            </div>
        </section>
    );
}