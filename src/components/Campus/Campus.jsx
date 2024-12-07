import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import whiteArrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus container' id='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="img"/>
        <img src={gallery_2} alt="img"/>
        <img src={gallery_3} alt="img"/>
        <img src={gallery_4} alt="img"/>
      </div>
      <button className=' btn btn-dark'>See More <img src={whiteArrow} alt="img"/> </button>
    </div>
  )
}

export default Campus
