import React from 'react';
import './AboutStyles.css';
import allieLogo from '../../assets/allieLogoBoxW.png';

const About = () => {
  return (
    <div name='about' className='about'>
      <div className='container'>
        <div className='top-container'>
          <h1>Top About</h1>
        </div>
        <div className='middle-container'>
          <div className='left-middle-container'>
            <h1>Left</h1>
          </div>
          <div className='right-middle-container'>
            <h1>Right</h1>
            <figure>
              <img src={allieLogo} width='100%' alt='A Dahl House Design' />
              <figcaption>A Dahl House Design</figcaption>
            </figure>
          </div>
        </div>
        {/* <div className='bottom-container'>
          <button className='btn btn-dark'>Drive</button>
          <button className='btn'>Ride</button>
        </div> */}
      </div>
    </div>
  );
};

export default About;
