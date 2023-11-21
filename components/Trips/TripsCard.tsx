import { ITrip } from '@/interfaces/trip';
import Image from 'next/image';
import React from 'react';
import style from './trips.module.css';

interface Props {
  trip: ITrip;
}

const TripsCard: React.FC<Props> = async ({ trip }) => {
  let source = trip.image[0];
  let description = trip.resume.substring(0, 400) + '...';

  return (
    <div className={style.card}>
      <div className={style['card-content']}>
        <Image
          src={source || trip.image[0]}
          alt={trip.title}
          className={style['card-image']}
          width='190'
          height='190'
        />
        <div className={style['card-text']}>
          <h3 className={style['card-title']}>{trip.title}</h3>
          <p className={style['card-summary']}>{description}</p>
          <button className={style['card-button']}>Ver más</button>
        </div>
      </div>
    </div>
  );
};

export default TripsCard;
