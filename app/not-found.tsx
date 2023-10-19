import Heading from '../components/Heading';
import styles from './page.module.css';

export const metadata = {
  title: '404 - Not found',
};

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <Heading>Not found</Heading>
      <p>ooops, we cant find your request</p>
    </div>
  );
}
