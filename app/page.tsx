import Image from 'next/image';
import { StyledList, StyledListItem } from '@/style/List';
import { LinkStyled } from '@/style/Link';
import img1 from '../public/pictures/img1.jpg';
import img2 from '../public/pictures/img2.jpg';
import img3 from '../public/pictures/img3.jpg';
import img4 from '../public/pictures/img4.jpg';
import Card from '@/components/Card';
import { trips } from '@/helps/tripArr';
import CardsList from '@/components/CardsList';
import Heading from '@/components/Heading';
import { getTrips } from '@/lib/trips';

export default async function Home() {
  //const trips = await getTrips();
  //console.log(trips.data);
  return (
    <>
      <Heading>Acompañame a esta aventura...</Heading>
      <CardsList />
    </>
  );
}
