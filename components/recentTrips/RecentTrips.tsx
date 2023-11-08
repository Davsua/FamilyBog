import { getTrips } from '@/lib/trips';
import style from './rencenttrips.module.css';
import { ITrip } from '@/interfaces/trip';
import CardRecentTrips from './CardRecentTrips';

export const RecentTrips = async () => {
  let tripsList = await getTrips();
  let selectedTrips = tripsList.data;
  let lastThreeTrips = selectedTrips.slice(0, 3);
  return (
    <div className={style.listContainer}>
      <h2>Mas recientes</h2>
      <ul className={style.list}>
        {lastThreeTrips.map((trip: ITrip) => (
          <CardRecentTrips trip={trip} key={trip.id} />
        ))}
      </ul>
    </div>
  );
};
