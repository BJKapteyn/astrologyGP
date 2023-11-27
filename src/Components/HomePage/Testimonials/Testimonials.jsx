import './Testimonials.css';

export const Testimonials = () => {
    return (
        <div className='testimonials-section'>
            <section className='testimonials'>
                <div className="testimonials-title">
                    <h2>Testimonials</h2>
                </div>
                <div className="testimonials-flex-container">
                    <div className='testimonials-flex-item'>
                        <h3>Angie B.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eaque magnam excepturi impedit nobis, enim odit aliquid minus distinctio cum accusamus voluptates nostrum quo eveniet ipsum, nisi voluptatum nihil ipsam.</p>
                    </div>
                    <div className='testimonials-flex-item'>
                        <h3>Jordan A.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eaque magnam excepturi impedit nobis, enim odit aliquid minus distinctio cum accusamus voluptates nostrum quo eveniet ipsum, nisi voluptatum nihil ipsam.</p>
                    </div>
                </div>
            </section>  
        </div>
    );
}