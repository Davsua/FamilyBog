import Heading from '@/components/Heading';
import { trips } from '@/helps/tripArr';
import { getSlugs, getTripBySlug, getTrips } from '@/lib/trips';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Paragraph } from '@/style/text';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperGallery from '@/components/SwiperGalleryImg';
import { GET } from '@/app/api/trip/[id]/route';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug: any) => ({ slug }));
  //slugs.map((slug: any) => console.log(slug));
}

interface Props {
  trip: object;
}

export default async function TripPage({ params: { slug } }: any) {
  console.log(slug);

  const trip = await getTripBySlug(slug);

  if (!trip) {
    notFound();
  }

  return (
    <>
      <div>
        <Heading>{trip.title}</Heading>
        <Paragraph>{trip.shortResume}</Paragraph>
        <div className='flex gap-3 items-baseline'>
          <p className='italic pb-2'>{trip.createdAt}</p>
          {/*<ShareButtons />*/}
        </div>
        <SwiperGallery />
        {/*<Image src={trip.image} alt='stardew-valley' width='640' height='360' className='mb-2 rounded' />*/}
        <article
          dangerouslySetInnerHTML={{ __html: trip.resume }}
          className='max-w-screen-sm prose dark:text-white'
        />
      </div>
    </>
  );
}
