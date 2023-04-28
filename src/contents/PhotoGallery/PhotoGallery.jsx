import React from 'react'
import './PhotoGallery.scss'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const PhotoGallery = () => {
  
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };


  return (
    <div className='PhotoGallery unversal_Padding bg_img'>

      <div className="photoGallery_left">
        <div className="flex_direction_coloum">

          <div className='flex_direction_coloum'>
            <p className='commonLetter'>Instagram</p>
            <img className='spoon' src="./assets/spoon.png" alt="" />
          </div>
          <h1 className='commonHTag'>Photo Gallery</h1>
          
        </div>
        <div className="photoGallery_paragraph flex_direction_coloum">

          <p className='commonPTag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button className='commonBtn'>View More</button>
        </div>
      </div>
      

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {["./assets/gallery01.png", "./assets/gallery02.png", "./assets/gallery03.png", "./assets/gallery04.png"].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery