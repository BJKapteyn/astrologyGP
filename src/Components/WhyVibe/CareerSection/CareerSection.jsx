import { Link } from 'react-router-dom';
import './CareerSection.css';

export const CareerSection = () => {

    return(
        <section className="careersection">
                <h3 className="career-title">WORK WITH US</h3>
                <div className="">
                    <p className="career-text">Are you ready to elevate your career and thrive within a vibrant, energetic team?</p>
                    <p className="career-text">Join The Vibe Collective, where passion meets opportunity!</p>
                    <p className="career-text">Send your resume and cover letter to:</p>
                    <p className="career-text"><Link to={'mailto:info@thevibecollective.co'}>info@thevibecollective.co</Link></p>
                    <p className="career-text">Take the first step toward an exciting future with us.</p>
                </div>
        </section>
    )
}