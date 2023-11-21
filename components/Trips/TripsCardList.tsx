import React from 'react';
import TripsList from './TripsList';
import { getTrips } from '@/lib/trips';

const TripsCardList = async () => {
  const all = await getTrips();
  const trips = all?.data;
  return (
    <div>
      <TripsList trips={trips} />
    </div>
  );
};

export default TripsCardList;
