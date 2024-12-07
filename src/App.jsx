import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import VideoPlayer from './components/VideoPlayer/VideoPlayer'


const App = () => {
  // const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle='Our Program' Title='What We Offer' />
      <Program />
      <About />
      <Title subTitle='Gallery' Title='Campus Photos' />
      <Campus />
      <Title subTitle='TESTIMONIALS' Title='What Student Says' />
      <div className="container">
        <Testimonials />
        <Title subTitle='Contact Us ' Title='Get In Touch' />
        <Contact />
        <Footer />
      </div>

    </div>

  )
}

export default App
