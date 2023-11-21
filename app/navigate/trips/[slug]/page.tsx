import Heading from '@/components/Heading';
import { getSlugs, getTripBySlug, getTrips } from '@/lib/trips';
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Paragraph } from '@/style/text';
import 'swiper/css';
import SwiperGallery from '@/components/SwiperGalleryImg';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  //console.log(slugs.length);
  return slugs.map((slug: any) => ({ slug }));
  //slugs.map((slug: any) => console.log(slug));
}

export default async function TripPage({ params: { slug } }: any) {
  //console.log(slug);

  const trip = await getTripBySlug(slug);

  //console.log(typeof trip.image);
  //console.log(trip.image);

  if (!trip) {
    notFound();
  }

  return (
    <>
      <div>
        <Heading>{trip.title}</Heading>
        <Paragraph>{trip.shortResume}</Paragraph>
        <div className='flex gap-3 items-baseline'>
          <p className='italic pb-2'>{trip.createdAt.split('T').shift()}</p>
          {/*<ShareButtons />*/}
        </div>
        <SwiperGallery images={trip.image} />
        {/*<Image src={trip.image} alt='stardew-valley' width='640' height='360' className='mb-2 rounded' />*/}
        <article
          dangerouslySetInnerHTML={{ __html: trip.resume }}
          className='max-w-screen-sm prose dark:text-white'
        />
      </div>
    </>
  );
}
