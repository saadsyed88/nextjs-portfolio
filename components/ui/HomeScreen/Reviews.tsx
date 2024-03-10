'use client';

import { Swiper as SwiperComponent, SwiperSlide as Slide } from 'swiper/react';

import 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Card, CardDescription, CardHeader, CardTitle } from '../card';
import Image from 'next/image';

const reviewData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Richard Thompson',
    job: 'Chef',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium, similique magni. Amet consectetur adipisicing elit.',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Evelyn Adnerson',
    job: 'Chef',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium, similique magni. Amet consectetur adipisicing elit.',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Ibrahim Adil Khan',
    job: 'Dev',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium, similique magni. Amet consectetur adipisicing elit.',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Emily Thompson',
    job: 'Therapist',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium, similique magni. Amet consectetur adipisicing elit.',
  },
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Jacob Mosh',
    job: 'Musician',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium, similique magni. Amet consectetur adipisicing elit.',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Brad Traversy',
    job: 'Youtuber',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium, similique magni. Amet consectetur adipisicing elit.',
  },
];
const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
        <SwiperComponent
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {reviewData.map((person, index) => {
            return (
              <Slide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    {/* image */}
                    <div className='flex items-center gap-x-4'>
                      <Image
                        src={person.avatar}
                        alt=''
                        width={70}
                        height={70}
                        priority
                      />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </Slide>
            );
          })}
        </SwiperComponent>
      </div>
    </section>
  );
};

export default Reviews;
