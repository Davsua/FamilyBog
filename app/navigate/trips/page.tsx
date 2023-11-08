import Card from '@/components/Card';
import CardsList from '@/components/CardsList';
import Heading from '@/components/Heading';
import { trips } from '@/helps/tripArr';
import { getTrips } from '@/lib/trips';
import { Button } from '@/style/Button';
import { StyledList, StyledListItem } from '@/style/List';
import Link from 'next/link';
import React from 'react';

const page = async () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Heading>My best Memories ever! </Heading>
        <Button>
          <Link style={{ color: 'white', textDecoration: 'none' }} href={'/addTrip'}>
            Create new Trip
          </Link>
        </Button>
      </div>
      <CardsList />
    </>
  );
};

export default page;
