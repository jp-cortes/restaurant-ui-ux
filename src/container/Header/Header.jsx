import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Header.css';


export function Header() {
  return (
    <div className='app__header app__wraper section__padding' id='home'>
      <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'>The Key To Fine Dinning</h1>
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa corrupti perspiciatis deserunt iste? Provident unde facilis similique doloremque harum dolore. Quidem, id natus distinctio laborum molestias repudiandae iste ea sunt.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt='header_img'/>
      </div>
    </div>
  );
}

