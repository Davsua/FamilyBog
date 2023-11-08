import CardsList from '@/components/CardsList';
import Heading from '@/components/Heading';
import style from './page.module.css';
import { RecentTrips } from '@/components/recentTrips/RecentTrips';

export default async function Home() {
  //const trips = await getTrips();
  //console.log(trips.data);
  return (
    <div>
      <Heading>Acompañame a esta aventura...</Heading>
      <div className={style['body-content']}>
        <CardsList />
        <RecentTrips />
      </div>
    </div>
  );
}
