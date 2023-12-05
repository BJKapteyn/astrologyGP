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
                    <h1>

                    </h1>
                </div>
                <div className="joinus-flexitem"></div>
            </div>
        </section>
    );
}