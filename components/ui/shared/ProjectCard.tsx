import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link2Icon, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Badge } from '../badge';
import { Card, CardHeader } from '../card';

export interface IProject {
  id: string;
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}

interface ProjectCardProps {
  project: IProject;
}
const ProjectCard: React.FC<any> = ({ project }) => {
  useEffect(() => {}, []);

  return (
    <>
      <Card className="group overflow-hidden relative">
        <CardHeader className="p-0">
          {/* image */}
          <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden ">
            <Image
              className="absolute bottom-0 shadow-2xl w-[250px] h-[250px]"
              src={project?.imageUrl ? `${project?.imageUrl}` : ''}
              width={247}
              height={250}
              alt=""
              priority
            />
            {/* buttin links */}
            <div className="flex gap-x-4">
              <Link
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-900"
                href={`/projects/${project?.id}`}
              >
                <Link2Icon className="text-white" />
              </Link>
              <Link
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-900"
                href={`${project?.github}`}
              >
                <Github className="text-white" />
              </Link>
            </div>
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
            {project.category}
          </Badge>
          <h4 className="h4 mb-1">{project?.name}</h4>
          <p className="text-muted-foreground text-lg">{project.description}</p>
          <p></p>
        </div>
      </Card>
    </>
  );
};

export default ProjectCard;
