'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide as Slide } from 'swiper/react';

import 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from '../button';
import ProjectCard, { IProject } from '../shared/ProjectCard';
import { Pagination } from 'swiper/modules';
import Loader from '../shared/Loader';

const projectData = [
  {
    id: '1',
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
    link: '/',
    github: '/',
  },
  {
    id: '2',
    image: '/work/4.png',
    category: 'react js',
    name: 'Solstice Website',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
    link: '/',
    github: '/',
  },
  {
    id: '3',
    image: '/work/2.png',
    category: 'next js',
    name: 'Lemina Website',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
    link: '/',
    github: '/',
  },
  {
    id: '4',
    image: '/work/1.png',
    category: 'next js',
    name: 'Evolve Website',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
    link: '/',
    github: '/',
  },
  {
    id: '5',
    image: '/work/3.png',
    category: 'next js',
    name: 'Ignite Website',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
    link: '/',
    github: '/',
  },
  {
    id: '6',
    image: '/work/4.png',
    category: 'next js',
    name: 'Evolution Website',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
    link: '/',
    github: '/',
  },
  {
    id: '7',
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Serenity Website',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
    link: '/',
    github: '/',
  },
  {
    id: '8',
    image: '/work/2.png',
    category: 'fullstack',
    name: 'Zenlab Website',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nihil minus cumque totam libero .',
    link: '/',
    github: '/',
  },
];
const Work = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(false);

  const getProject = async () => {
    setLoading(true);
    setProjects([]);

    const response = await fetch(`api/projects`);
    const project = await response.json();
    setProjects(project);
    setLoading(false);
  };

  useEffect(() => {
    getProject();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="relative mb-12 xl:mb-48">
          <div className="container mx-auto">
            {/* text */}

            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
              <h2 className="section-title mb-4">Latest Projects</h2>
              <p className="subtitle mmb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                saepe magnam suscipit ducimus velit!
              </p>
              <Link href="/projects">
                <Button>All Projects</Button>
              </Link>
            </div>
            {/* slider */}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
              <SwiperComponent
                className="h-[480px]"
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{ clickable: true }}
              >
                {/* show only first 4 projects */}
                {projects.slice(0, 4).map((project, index: number) => {
                  return (
                    <Slide key={index}>
                      <ProjectCard project={project} />
                    </Slide>
                  );
                })}
              </SwiperComponent>
            </div>
          </div>{' '}
        </section>
      )}
    </>
  );
};

export default Work;
