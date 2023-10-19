import { ITrip } from './../interfaces/trip';
import { trips } from '@/helps/tripArr';
import db from '@/database/connectDB';
import axios from 'axios';
import { TripModel } from '@/models/Trip';

/*export async function getTrip(slug: string) {
  let slugTaked = {} as ITrip;

  trips.map((trip) => {
    //console.log(trip.slug);
    //console.log('2:  ' + slug);
    if (trip.slug == `trips/${slug}`) {
      slugTaked = trip; //.slug;
    }
  });

  //console.log(slugTaked);

  return slugTaked;
}*/
export async function getTrips() {
  try {
    const response = await fetch('http://localhost:3000/api/trip', {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      console.log('[lib/trips getTrips] - peticion de trips incompleta');
      throw new Error('Failed to fetch trips');
    }

    //console.log(response.json());
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getSlugs() {
  try {
    const response = await fetch('http://localhost:3000/api/trip', {
      method: 'GET',
    });

    if (!response.ok) {
      console.log('[lib/trips getTripBySlug] - peticion de trips incompleta');
      throw new Error('Failed to fetch trips');
    }

    const trips = await response.json();

    return trips.data.map((trip: any) => trip.slug);
  } catch (error) {}
}

export const getTripBySlug = async (slug: string) => {
  const trip = await TripModel.findOne({ slug }).lean();

  if (!trip) return null;

  return JSON.parse(JSON.stringify(trip));
};
