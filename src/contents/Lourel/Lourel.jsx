import React from 'react'
import './Lourel.scss'
const Lourel = () => {
  const awards = [
    {
      imgUrl:"./assets/award01.png",
      title: 'Bib Gourmond',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl:"./assets/award02.png",
      title: 'Rising Star',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl:"./assets/award03.png",
      title: 'AA Hospitality',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      imgUrl: "./assets/award05.png",
      title: 'Outstanding Chef',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
  ];
  const Award=({imgUrl,title,subtitle})=>{
    return(
      <>
      <div className='award_content'>
            <img src={imgUrl} alt="" />
            <div className="info">
              <p className='commonLetter'>{title}</p>
              <span className='commonPTag'>{subtitle}</span>
            </div>
          </div>
      </>
    )
  }
  return (
    <div className='Lourel unversal_Padding'>
      <div className="laurel_spoon_logo">
          <img src="./assets/logo.png" alt="" />
        </div>

      <div className="laurels_left">

        <div className="laurels_head">
          <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
          <p className='commonLetter'>Awards & Recognition</p>
          <img className='spoon' src="./assets/spoon.png" alt="" />
          </div>
          <h1 className='commonHTag'>Our Laurels</h1>
        </div>


        <div className="laurels_awards">
         {awards.map((award,index)=>(<Award imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} />))}
        </div>
      </div>

      <div className="lourel_right_fruit_photo">
        <img className='fruit' src="./assets/laurels.png" alt="" />
      </div>
    </div>
  )
}

export default Lourel