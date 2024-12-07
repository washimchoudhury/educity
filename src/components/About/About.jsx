import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'
const About = ({ setPlayState }) => {
  return (
    <div className='about container' id='about' >
      <div className="about-left">
        <img src={aboutImg} alt="img" className='aboutImg' />
        <img src={playIcon} alt="img" className='playIcon' onClick={() => {
          setPlayState(true)
        }} />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, rem. Nam, ipsam nulla, saepe, veniam velit magnam rem non
          neque dolor unde nisi. Magni, maiores.
          .</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, rem. Nam, ipsam nulla, saepe, veniam velit magnam rem non neque dolor unde nisi. Magni, maiores. neque dolor unde nisi. Magni, maiores..</p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, rem. Nam, ipsam nulla, saepe, veniam velit magnam rem non neque dolor unde nisi. Magni, maiores.
          neque dolor unde nisi. Magni, maiores..</p>
      </div>
    </div>
  )
}

export default About
