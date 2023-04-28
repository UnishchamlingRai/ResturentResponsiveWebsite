import React from 'react'
import './Heading.scss'
const Heading = () => {
  return (
    <div className='heading unversal_Padding'>
      <div className="heading_content">
        <div className="new_faver">
        <p className='commonLetter'>Chase The New Flavour</p> 
          <img className='spoon' src="./assets/spoon.png" alt="" />    
          <h1>The Key To Fine Dining</h1>
        </div>
       
        <div className="heading_paragraph">
          <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
          <button className='commonBtn'>Explore Menu</button>
        </div>
      </div>


      <div className="heading_image">
        <img src="./assets/welcome.png" alt="" />
      </div>

      <div className="scroll">
          <div></div>
          <p>Scroll</p>
        </div>
      <span>01--02 03 04</span>
    </div>
  )
}

export default Heading