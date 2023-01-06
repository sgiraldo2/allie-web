/**
 * Carousel link: https://www.npmjs.com/package/react-material-ui-carousel
 * Contact Santiago for help
 */

import React from 'react';
import './HighlightsStyles.css';
import { Carousel } from 'react-carousel-minimal';
import project1Images from '../projectImages/project1Images';

const Highlights = () => {
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div name='highlights' className='highlights'>
      <div className='container'>
        <div className='top-container'>
          <h1>Highlights</h1>
        </div>
        <div
          style={{
            margin: 'auto',
            width: '75%',
            padding: '10px',
          }}
        >
          <Carousel
            href='#MyCarousels1'
            data={project1Images}
            time={2000}
            width='100%'
            height='500px'
            // height='auto'
            captionStyle={captionStyle}
            radius='35px'
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition='bottom'
            automatic={true}
            dots={true}
            pauseIconColor='white'
            pauseIconSize='40px'
            slideBackgroundColor='darkgrey'
            slideImageFit='cover'
            thumbnails={true}
            thumbnailWidth='100px'
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
