import React from 'react'
import './Belive.scss'
const Belive = () => {
  return (
    <div className='belive unversal_Padding'>

      <div className="belive_left_photo">
        <img src="./assets/chef.png" alt="" />
      </div>

      <div className="belive_right_content">
        <div className="belive_chef">
          <p className='commonLetter'>Chef's Word</p>
          <img className='spoon' src="./assets/spoon.png" alt="" />
          <h1 className='commonHTag'>What We Belive In</h1>
        </div>
        

        <div className="belive_paragraph">
        <p className='commonPTag'><i>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</i></p>

        </div>

        <div className="belive_kevin">
          <h6 className='commonLetter'style={{color:"#DCCA87"}}>Kevin Luo</h6>
          <p className='commonPTag'>Chef & Founder</p>
        </div>

        <div className="belive_sign">
          <img className='sign' src="./assets/sign.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Belive