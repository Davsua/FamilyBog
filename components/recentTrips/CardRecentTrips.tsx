'use client';

import Image from 'next/image';
import { ITrip } from '@/interfaces/trip';
import { ImageListStyled, LinkSListStyled, PListStyled } from '@/style/List';
import styles from './rencenttrips.module.css';

interface Props {
  trip: ITrip;
}

const CardRecentTrips: React.FC<Props> = ({ trip }) => {
  //console.log(trip._id);
  //console.log(trip.image[0]);
  let source = trip.image[0];

  return (
    <LinkSListStyled href={`navigate/trips/${trip.slug}`}>
      <div className={styles.imageContainer}>
        <Image src={source || trip.image} alt={trip.title} fill />
      </div>
      <div style={{ marginLeft: '6px' }}>
        <div className={styles.header}>
          <h2 style={{ marginBottom: '10px', marginTop: '2px' }}>{trip.title}</h2>
        </div>
      </div>
    </LinkSListStyled>
  );
};

export default CardRecentTrips;
