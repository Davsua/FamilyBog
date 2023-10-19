import { StyledList, StyledListItem } from '@/style/List';
import React from 'react';
import Card from './Card';
import { getTrips } from '@/lib/trips';
import { ITrip } from '@/interfaces/trip';
import ListCards from './ListCards';

const CardsList = async () => {
  const all = await getTrips();
  const trips = all?.data;
  //console.log(trips);

  return (
    <div>
      <ListCards trips={trips} />
    </div>
  );
};

export default CardsList;
