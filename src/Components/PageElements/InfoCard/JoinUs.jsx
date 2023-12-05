import girlsInField from '../../../Pics/Landscapes/girlsInField.png'

export const JoinUs = () => {

    return (
        <section className="joinus">
            <div className="joinus-header">
                <h1 className="joinus-headertext">JOIN OUR COLLECTIVE</h1>
                <img src={girlsInField} alt="women holding hands in a field" className="joinus-headerimage" />
            </div>
            <div className="joinus-flex">
                <div className="joinus-flexitem" id="joinus-schedulemedium">
                    <h3 className="joinus-scheduleheader">SCHEDULE A READING</h3>
                    <p className="infocard-description">Our goal is to create an intimate and accessible user experience, so you can book your reading from anywhere in the world at any time of the day.</p>
                </div>
                <div className="joinus-flexitem"></div>
            </div>
        </section>
    );
}