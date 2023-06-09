import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

function AwardCard({award: { imgUrl, title, subtitle }}) {
  return (
    <div className='app__laurels_awards-card'>
      <img src={imgUrl} alt='awards'/>
      <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style={{ color: '#DCCA87'}}>{title}</p>
        <p className='p__opensans'>{subtitle}</p>
      </div>
    </div>
  );
}

export function Laurels() {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className='app__wrapper_info'>
          <SubHeading title="Awards & Recognition"/>
          <h2 className='headtext__cormorant'>Our Laurels</h2>

          <div className='app__laurels_awards'>
            {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
          </div>        
        </div>  
        <div className='app__wrapper_img'>
          <img src={images.laurels} alt='laurels_image'/>
          </div>    
    </div>
  );
}

