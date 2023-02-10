
import React from 'react'


import Slider from 'react-slick'
import { Container } from 'reactstrap'


const HeroSlider = () => {
    return <Slider className='hero__slider'>


      <div className='slider__item slider__item-01 mt0'>
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb3">For Rent $70 per Day</h4>
                <h1 className='text-light mb-4'>Reserve Now and Get 50% Off</h1>

                <button className='btn reserve__btn'></button>
            </div>
        </Container>
      </div>
    </Slider>
}


export default HeroSlider