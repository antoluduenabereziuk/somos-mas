import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Prueba = props => {

    const { title, data, Buttons } = props

    return (
        <div>
            <div>
            <h3>{ title }</h3>
            <div className="testimonial-conteiner">
                {
                    data.map((testimonial, index) => (
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
        </div>
    )
}

Prueba.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    Buttons: PropTypes.array

}

export default Prueba
