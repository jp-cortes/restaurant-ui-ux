import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

export function Chef() {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef_image'/>
        </div> 
        <div className='app__wrapper_info'>
          <SubHeading title="Chef's Word"/>
          <h2 className='headtext__cormorant'>What we beleive in</h2>
          

          <div className='app__chef-content'>
            <div className='app__chef-content_quote'>
              <img src={images.quote} alt='quote_image'/>
              <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <p className='p__opensans'>Quasi placeat nostrum esse iure dolor labore, dicta magni vitae numquam nesciunt, tempore impedit natus quia in aut. A doloremque nostrum consectetur.</p>
            </div>

            <div className='app__chef-sign'>
              <p>Kevin Luo</p>
              <p className='p__openans'>Chef & Founder</p>
              <img src={images.sign} alt='sign_image'/>
            </div>
          </div>
    </div>
  );
} 


