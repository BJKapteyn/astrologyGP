import { Link } from 'react-router-dom';
import { ReactComponent as Eyeball } from '../../../Pics/SvgDrawings/EYE-VECTOR.svg';
import './CareerSection.css';

export const CareerSection = () => {
    const emailAddress = "hr@thevibecollective.co"

    return(
        <section className="careersection">
                <h3 className="career-title">WORK WITH US</h3>
                <div className="career-eyeball">
                    <Eyeball style={{fill: 'rgb(72, 31, 75)'}}></Eyeball>
                </div>
                <div className="">
                    <p className="career-text">Are you ready to elevate your career and thrive within a vibrant, energetic team?</p>
                    <p className="career-text">Join The Vibe Collective, where passion meets opportunity!</p>
                    <p className="career-text">Send your resume and cover letter to:</p>
                    <p className="career-text"><Link to={`mailto:${emailAddress}`}>{emailAddress}</Link></p>
                    <p className="career-text">Take the first step toward an exciting future with us.</p>
                </div>
        </section>
    )
}