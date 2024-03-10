import { Button } from '@/components/ui/button';
import { IProject } from '@/components/ui/shared/ProjectCard';
import { DeleteIcon, EditIcon } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';

const UpdateProjects = () => {
  const [projects, setProjects] = useState<any>([]);

  console.log('🚀 ~ UpdateProjects ~ projects:', projects);
  const getProject = async () => {
    setProjects([]);

    const response = await fetch(`api/projects`);
    const project = await response.json();
    setProjects(project);
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleDelete = (project: any) => {
    console.log('asdas', project);
  };
  const handleEdit = (project: any) => {
    console.log('?>>>>>>>>>');
    redirect(`/editproject/${project.id}`);
  };
  return (
    <div>
      <Button className="p-4">
        <Link href="/admin/addproject">Add Project</Link>
      </Button>
      {projects?.map((project: any, index: number) => {
        return (
          <div
            key={index}
            className=" border-gray-300 p-4 my-5 gap-4 border flex justify-between w-[90%]"
          >
            <div className="border flex flex-col gap-y-4 w-[60%]">
              <div className="flex py-4 gap-x-4 border-b-2">
                <h4>Project ID:</h4>
                <p>{project.id}</p>
              </div>
              <div className="flex gap-x-4 py-4 border-b-2">
                <h4>Image Url:</h4>
                <p>{project.imageUrl}</p>
              </div>
              <div className="flex gap-x-4 py-4 border-b-2">
                <h4>Category:</h4>
                <p>{project.category}</p>
              </div>
              <div className="flex gap-x-4 py-4 border-b-2">
                <h4>Description:</h4>
                <p>{project.description}</p>
              </div>
              {/* <div className="flex gap-x-4">
              <h4>Link:</h4>
              <p>{project.id}</p>
            </div> */}
              <div className="flex gap-x-4 py-4">
                <h4>Github Link:</h4>
                <p>{project.githubLink}</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Button onClick={() => handleDelete(project)}>
                <DeleteIcon size={14} />
              </Button>
              <Link href={`/admin/editproject/${project.id}`}>
                <Button>
                  <EditIcon size={14} />
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpdateProjects;
