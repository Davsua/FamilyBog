'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './add.module.css';

export default function AddTrip() {
  const [title, setTitle] = useState('');
  const [shortResume, setShortResume] = useState('');
  const [resume, setResume] = useState('');
  const [file, setFile] = useState<File[] | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [slug, setSlug] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  /*const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile!);
  };*/

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !resume || !shortResume || !slug || !file) {
      alert('Title, short Resume, Image, and description are required');
      return;
    }

    try {
      setLoading(true);
      //console.log(file);
      const formData = new FormData();
      //formData.append('file', file);
      if (file && file.length > 0) {
        //console.log('entro');
        for (let i = 0; i < file.length; i++) {
          console.log(file[i]);
          formData.append('files', file[i]);
        }
      }

      //console.log({ formData });

      const res = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setImageUrls(data.urls);

        const tripData = { title, shortResume, resume, slug, image: imageUrls };
        const createTripRes = await fetch('http://localhost:3000/api/trip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tripData),
        });

        if (createTripRes.ok) {
          router.push('/');
        } else {
          throw new Error('Failed to create a trip');
        }
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} id='addForm'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={styles.input}
        type='text'
        placeholder='Trip Title'
        id='title'
      />

      <input
        onChange={(e) => setShortResume(e.target.value)}
        value={shortResume}
        className={styles.input}
        type='text'
        placeholder='Trip Short Resume'
        id='short resume'
      />

      <input
        onChange={(e) => setResume(e.target.value)}
        value={resume}
        className={styles.input}
        type='text'
        placeholder='Trip Description'
        id='desc'
      />

      <input
        onChange={(e) => setSlug(e.target.value)}
        value={slug}
        className={styles.input}
        type='text'
        placeholder='Slug'
        id='slug'
      />

      <input
        onChange={(e) => e.target.files && setFile(Array.from(e.target.files))}
        multiple
        className={styles.input}
        type='file'
        id='image'
      />

      <button type='submit' className={styles.button} disabled={loading}>
        {loading ? 'Adding Trip...' : 'Add Trip'}
      </button>
    </form>
  );
}

/*export default function AddTrip() {
  const [title, setTitle] = useState('');
  const [shortResume, setShortResume] = useState('');
  const [resume, setResume] = useState('');
  const [file, setFile] = useState<File>();
  const [image, setImage] = useState('');
  const [slug, setSlug] = useState('');

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/trip', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ title, shortResume, resume, slug, image }),
        });

        if (res.ok) {
          router.push('/');
        } else {
          throw new Error('Failed to create a topic');
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (image) {
      fetchData();
    }
  }, [image, title, shortResume, resume, slug, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !resume || !shortResume || !slug || !file) {
      alert('Title, short Resume, Image and description are required');
      return;
    }

    try {
      const form = new FormData();
      form.set('file', file);

      const resJson = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: form,
      });

      const data = await resJson.json();
      //console.log([addTrip] - data.url);

      setImage(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} id='addForm'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={styles.input}
        type='text'
        placeholder='Trip Title'
        id='title'
      />

      <input
        onChange={(e) => setShortResume(e.target.value)}
        value={shortResume}
        className={styles.input}
        type='text'
        placeholder='Trip Short Resume'
        id='short resume'
      />

      <input
        onChange={(e) => setResume(e.target.value)}
        value={resume}
        className={styles.input}
        type='text'
        placeholder='Trip Description'
        id='desc'
      />

      <input
        onChange={(e) => setSlug(e.target.value)}
        value={slug}
        className={styles.input}
        type='text'
        placeholder='Slug'
        id='slug'
      />

      <input
        onChange={(e) => setFile(e.target.files?.[0])}
        multiple={true}
        className={styles.input}
        type='file'
        id='image'
      />


      <button type='submit' className={styles.button}>
        Add Trip
      </button>
    </form>
  );
}*/
