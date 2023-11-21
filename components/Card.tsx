import Image from 'next/image';
import { ITrip } from '@/interfaces/trip';
import { ImageListStyled, LinkSListStyled, PListStyled } from '@/style/List';
import RemoveButton from './RemoveButton';
import styles from './card.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  trip: ITrip;
}

const Card: React.FC<Props> = ({ trip }) => {
  //console.log(trip._id);
  //console.log(trip.image[0]);
  let source = trip.image[0];
  let path = usePathname();

  //console.log(path);

  return (
    <LinkSListStyled href={`/navigate/trips/${trip.slug}`}>
      <ImageListStyled
        src={source || trip.image}
        alt={trip.title}
        width='250'
        height='120'
        className='rounded-t sm:rounded-l sm:rounded-r-none'
      />
      <div style={{ marginLeft: '6px' }}>
        <div className={styles.header}>
          <h2 style={{ marginBottom: '10px', marginTop: '2px' }}>{trip.title}</h2>
          <RemoveButton id={trip._id} />
        </div>
        <PListStyled style={{ margin: '5px auto', fontWeight: '300px' }}>{trip.shortResume}</PListStyled>
      </div>
    </LinkSListStyled>
  );
};

export default Card;
