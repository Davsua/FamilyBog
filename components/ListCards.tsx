'use client';
import { ITrip } from '@/interfaces/trip';
import { StyledList, StyledListItem } from '@/style/List';
import React from 'react';
import Card from './Card';

const ListCards = (trips: any) => {
  //console.log(trips.trips);
  return (
    <StyledList>
      {trips?.trips?.map((trip: ITrip) => (
        <StyledListItem key={trip.title}>
          <Card trip={trip} />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default ListCards;
