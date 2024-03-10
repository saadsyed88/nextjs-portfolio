'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AddProject = () => {
  const router = useRouter();
  const getProject = async () => {
    const response = await fetch(`/api/projects`);
    const project = await response.json();
    console.log('🚀 ~ getProject ~ project:', project);
  };

  useEffect(() => {
    getProject();
  }, []);
  const [formData, setFormData] = useState<any>();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // const res = await fetch('/projects', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: {
      //     'content-type': 'application/json',
      //   },
      // });
      const response = await axios.post('/api/projects', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      router.push('/admin');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-[85%] mx-auto mt-5">
      <form className="flex flex-col gap-y-4">
        <div className="relative flex items-center">
          <Input
            type="text"
            id="imageLink"
            onChange={handleChange}
            placeholder="Add Image"
          />
        </div>
        <div className="relative flex items-center">
          <Input
            type="text"
            id="category"
            onChange={handleChange}
            placeholder="Category"
          />
        </div>
        {/* email  */}
        <div className="relative flex items-center">
          <Input
            type="text"
            id="name"
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="relative flex items-center">
          <Input
            type="text"
            id="description"
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <div className="relative flex items-center">
          <Input
            type="text"
            id="github"
            onChange={handleChange}
            placeholder="Github Link"
          />
        </div>
        <div className="flex w-full justify-end">
          <Button
            className="flex items-center gap-x-1 max-w-[166px]"
            onClick={handleSubmit}
          >
            Add Project
            <ArrowRightIcon size={18} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
