import { Button } from '@/style/Button';

import Link from 'next/link';
import React from 'react';
import style from './trips.module.css';
import TripsCardList from '@/components/Trips/TripsCardList';

const page = async () => {
  return (
    <>
      <div className={style.mainContainer}>
        <h1 className={style.title}>My best Memories ever! </h1>
        <Button>
          <Link style={{ color: 'white', textDecoration: 'none' }} href={'/navigate/addTrip'}>
            Create new Trip
          </Link>
        </Button>
      </div>
      <TripsCardList />
    </>
  );
};

export default page;
