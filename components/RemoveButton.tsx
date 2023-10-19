'use client';

import { HiOutlineTrash } from 'react-icons/hi';
import styles from './card.module.css';
import { useRouter } from 'next/navigation';

const RemoveButton = ({ id }: { id: string }) => {
  //console.log(id);

  const router = useRouter();

  const removeTrip = async () => {
    const confimed = confirm('¿Estas seguro?');

    if (confimed) {
      await fetch(`http://localhost:3000/api/trip/${id}`, {
        method: 'DELETE',
      });
    }

    return router.push('/');
  };

  return (
    <button onClick={removeTrip} className={styles.deleteButton} data-id={id}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveButton;
