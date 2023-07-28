#You will also need to create a classItem.js after which i will paste the code also and the css files of each



import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>What School Pages Has to offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img-9.jpg'
              text='Download Study notes From other Students'
              label='Download'
              path='/services'
            />
            <CardItem
              src='image'
              text='Upload Your Notes'
              label='Upload'
              path='/services'
            />
          </ul>
          <ul className='cards__items1'>
            <CardItem
              src='img-3.jpg'
              text='Ask for help!!'
              label='Peer'
              path='/services'
            />
            <CardItem
              src='img-4.jpg'
              text='Revise for your exams'
              label='Exams'
              path='/products'
            />
            <CardItem
              src='img-8.jpg'
              text='Get Notes for your favourite'
              label='Discover more'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
