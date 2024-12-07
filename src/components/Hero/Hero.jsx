import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='container hero'>
      <div className="hero-text">
        <h1>Lets Learn Together</h1>
        <p>We are in a generation where we always need to learn something new and challenging for the future as world is leading with the speed of light, so keep updated yourself </p>
        <button className='btn'>Know More <img src={arrow} alt="darkarrow"/></button>
      </div>
    </div>
  )
}

export default Hero
