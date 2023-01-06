import React from 'react';
import './HomeStyles.css';
import picAllie from '../../assets/allieApple.jpg';

const Home = () => {
  return (
    <div name='home' className='home'>
      <div className='container'>
        <div className='top-container'>
          <h1>Top</h1>
        </div>
        <div className='middle-container'>
          {/* <h1>Middle</h1> */}
          <div className='left-middle-container'>
            <h1>Left</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vestibulum dolor lacus, ut tincidunt purus venenatis sed. Nullam
              suscipit scelerisque justo ac euismod. Vestibulum ex mi, hendrerit
              a egestas quis, laoreet nec turpis. In viverra dolor sed lorem
              ullamcorper, nec pellentesque lorem maximus. Vestibulum vestibulum
              leo vitae sapien tempor volutpat. Nunc convallis arcu quis egestas
              fringilla. Mauris ut velit hendrerit, dapibus est non, viverra
              metus. Suspendisse non diam vel massa semper tempor a vitae leo.
              Integer dolor ipsum, suscipit ac erat vel, condimentum tincidunt
              ex. Donec metus tortor, congue in viverra et, pulvinar at nisi.
              Pellentesque suscipit, ante sed maximus condimentum, turpis odio
              imperdiet nunc.
            </h3>
          </div>
          <div className='right-middle-container'>
            <h1>Right</h1>
            <figure>
              <img src={picAllie} width='100%' alt='Allie Dahl' />
              <figcaption>Allie Dahl</figcaption>
            </figure>
          </div>
        </div>
        {/* <div className='bottom'>
          <button className='btn btn-dark'>Drive</button>
          <button className='btn'>Ride</button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
