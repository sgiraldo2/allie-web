import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      {/* if you need to add a smaller title */}
      {/* <h1>Check out these epic destinations!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__item'>
            <CardItem
              src='project1/img1.jpeg'
              text='Caption1'
              label='Label1'
              // path='home'
              // Proper way to do react-scroll^^^
            />
            <CardItem
              src='project1/img2.jpeg'
              text='Caption2'
              label='Label2'
              // path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='project1/img3.jpeg'
              text='Caption3'
              label='Label3'
              // path='/services'
            />
            <CardItem
              src='project1/img4.jpeg'
              text='Caption4'
              label='Label4'
              // path='/products'
            />
            <CardItem
              src='project1/img5.jpeg'
              text='Caption5'
              label='Label5'
              // path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
