import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Project2Cards() {
  return (
    <div className='cards'>
      {/* if you need to add a smaller title */}
      {/* <h1>Check out these epic destinations!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='project2/img1.jpeg'
              text='Caption1'
              label='Label1'
              // path='home'
              // Proper way to do react-scroll^^^
            />
            <CardItem
              src='project2/img2.jpeg'
              text='Caption2'
              label='Label2'
              // path='/services'
            />
            <CardItem
              src='project2/img3.jpeg'
              text='Caption3'
              label='Label3'
              // path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='project2/img4.jpeg'
              text='Caption4'
              label='Label4'
              // path='/services'
            />
            <CardItem
              src='project2/img5.jpeg'
              text='Caption5'
              label='Label5'
              // path='/products'
            />
            <CardItem
              src='project2/img6.jpeg'
              text='Caption6'
              label='Label6'
              // path='/sign-up'
            />
            <CardItem
              src='project2/img7.jpeg'
              text='Caption7'
              label='Label7'
              // path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project2Cards;
