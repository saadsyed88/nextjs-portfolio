'use client';
import Socials from '@/components/ui/HomeScreen/Socials';
import Loader from '@/components/ui/shared/Loader';
import ProjectCard, { IProject } from '@/components/ui/shared/ProjectCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Projects = () => {
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

  const [categories, setCategories] = useState<any>([]);
  const [category, setCategory] = useState('All Projects');
  // remove category duplicates

  useEffect(() => {
    const uniqueCategories = [
      'All Projects',
      ...new Set(projects?.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  }, [projects]);
  useEffect(() => {}, [loading, projects]);

  const filteredProjects = projects?.filter((project) => {
    return category === 'All Projects'
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {loading ? (
          <Loader />
        ) : (
          <Tabs defaultValue={category} className="mb-24 xl:mb-48">
            <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
              {categories?.map((category: any, index: number) => {
                return (
                  <TabsTrigger
                    key={index}
                    onClick={() => setCategory(category)}
                    className="capitialize w-[162px] md:w-auto"
                    value={category}
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content  */}
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        )}
        {/* <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories?.map((category: any, index: number) => {
              return (
                <TabsTrigger
                  key={index}
                  onClick={() => setCategory(category)}
                  className='capitialize w-[162px] md:w-auto'
                  value={category}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          tabs content 
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs> */}
      </div>
    </section>
  );
};

export default Projects;
