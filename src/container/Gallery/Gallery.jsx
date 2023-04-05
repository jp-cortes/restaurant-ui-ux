import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

export function Gallery() {
const scrollRef = useRef();

function scroll(direction) {
  const { current } = scrollRef;

  if(direction === 'left') {
    current.scrollLeft -= 300;
  } else {
    current.scrollLeft += 300;
  }
}

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram'/>
        <h2 className='headtext__cormorant'>Photo Gallery</h2>
        <p className='p__opensans' style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quam temporibus placeat repudiandae, atque sequi dignissimos asperiores totam facere recusandae dolorum. Sint ducimus laborum nostrum eligendi libero quod similique beatae.</p>
        <button className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images-container' ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='gallery_image'/>
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
            <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
            <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
      
    </div>
  );
}

