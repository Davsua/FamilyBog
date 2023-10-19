'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './add.module.css';

export default function AddTrip() {
  const [title, setTitle] = useState('');
  const [shortResume, setShortResume] = useState('');
  const [resume, setResume] = useState('');
  const [file, setFile] = useState<File>();
  const [image, setImage] = useState('');
  const [slug, setSlug] = useState('');

  const router = useRouter();

  /*const handleSubmit = async (e: any) => {
    e.preventDefault();
    //console.log({ title, resume, shortResume, slug, file });

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
      //console.log(data);
      console.log(data.url);
      setImage(data.url);

      console.log(image);

      const res = await fetch('http://localhost:3000/api/trip', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ title, shortResume, resume, slug, image }),
      });

      //let json = await res.json();

      //console.log(json);

      //console.log(res.ok);

      if (res.ok) {
        //console.log('entro');
        router.push('/');
      } else {
        throw new Error('Failed to create a trip');
      }
    } catch (error) {
      console.log(error);
    }
  };*/
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
  }, [image, title, shortResume, resume, slug, router]); // Asegúrate de incluir todas las dependencias necesarias

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
      console.log(data.url);

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

      {/*<div>*/}
      <input onChange={(e) => setFile(e.target.files?.[0])} className={styles.input} type='file' id='image' />
      {/*<button>Upload</button>*/}
      {/*</div>*/}

      <button type='submit' className={styles.button}>
        Add Trip
      </button>
    </form>
  );
}
