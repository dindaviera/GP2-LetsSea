import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='List edukasi menarik tentang jenis ikan berdasarkan habitatnya mulai dari Ikan Air Laut dan Ikan Air Tawar'
              label='EDUKASI'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Tempat bertransaksi segala jenis ikan Air Laut dan Ikan Air Tawar'
              label='TRANSAKSI'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
