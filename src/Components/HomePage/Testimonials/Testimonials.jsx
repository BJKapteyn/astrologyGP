import { TestimonialsData } from './TestimonialsData';
import './Testimonials.css';

export const Testimonials = () => {
    return (
        <div className="testimonials-section">
            <section className="testimonials">
                <h2 id="testimonials-title">Testimonials</h2>
                <div className="testimonials-flex-container">
                {TestimonialsData.slice(0, 2).map((testimonial) => {
                    const dataSource = testimonial.image == null ? require("../../../Pics/Portraits/portrait-airballoon.png") :
                                                                    require("../../../Pics/Headshots/" + testimonial.image);

                    return (
                        <div key={testimonial.id} className="testimonials-flex-item">
                            <div className="testimonials-header">
                                <div className="testimonials-image-container">
                                    <img alt={` ${testimonial.name}`} className="testimonials-image" src={dataSource}></img>
                                </div>
                                <h3 className="testimonials-name">{testimonial.name}</h3>
                            </div> 
                            <p className="testimonials-testimonial">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eaque magnam excepturi impedit nobis, enim odit aliquid minus distinctio cum accusamus voluptates nostrum quo eveniet ipsum, nisi voluptatum nihil ipsam.</p>
                        </div>
                    )
                })}
                </div>
            </section>  
        </div>
    );
}