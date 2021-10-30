import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export const LastTestimonials = props => {

    const { testimonials } = props

    return (
        <div>
            <h3>Testimonios</h3>
            <div className="testimonial-conteiner">
                {
                    testimonials.map((testimonial, index) => (
                        <div className="testimonial-conteiner-item" key={index} >
                            <img src={testimonial.img_url} alt={testimonial.alt_text} />
                            <div className="text-content">
                                <h4>{testimonial.title}</h4>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}

LastTestimonials.propTypes = {
    testimonials: PropTypes.array.isRequired
}
