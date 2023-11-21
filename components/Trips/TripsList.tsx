import React from 'react';
import TripsCard from './TripsCard';
import { getTrips } from '@/lib/trips';
import { ITrip } from '@/interfaces/trip';
import style from './trips.module.css';

const TripsList = async (trips: any) => {
  return (
    <div>
      <ul className={style.list}>
        {trips?.trips?.map((trip: ITrip) => (
          <li key={trip.title}>
            <TripsCard trip={trip} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripsList;
