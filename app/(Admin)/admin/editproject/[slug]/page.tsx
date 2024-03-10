'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const EditProject = ({ params }: { params: { slug: string } }) => {
  const getProject = async () => {
    const response = await axios.get(`/api/projects/${params.slug}`);
    setFormData(response.data);
  };
  const router = useRouter();

  useEffect(() => {
    getProject();
  }, []);
  const [formData, setFormData] = useState<any>();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('🚀 ~ handleSubmit ~ formData:', formData);

    try {
      const response = await axios.put(
        `/api/projects/${params.slug}`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('🚀 ~ handleSubmit ~ response:', response);

      router.push('/admin');
    } catch (error) {
      console.error(error);
    }
  };
  console.log('🚀 ~ handleSubmit ~ params.slug:', params.slug);
  return (
    <>
      <form className="flex flex-col w-[80%] mx-auto gap-y-4">
        <div className="relative flex flex-col items-start">
          <Label className="mb-4 text-lg">Image Url</Label>
          <Input
            value={formData?.imageUrl}
            onChange={handleChange}
            type="text"
            id="imageUrl"
            placeholder="Image Url"
          />
        </div>

        <div className="relative flex flex-col ">
          <Label className="mb-4 text-lg">Name</Label>
          <Input
            value={formData?.name}
            onChange={handleChange}
            type="text"
            id="name"
            placeholder="Name"
          />
        </div>

        <div className="relative flex flex-col ">
          <Label className="mb-4 text-lg">Category</Label>
          <Input
            value={formData?.category}
            onChange={handleChange}
            type="text"
            id="category"
            placeholder="Category"
          />
        </div>

        <div className="relative flex flex-col ">
          <Label className="mb-4 text-lg">Github Link</Label>

          <Input
            value={formData?.githubLink}
            type="text"
            onChange={handleChange}
            id="githubLink"
            placeholder="Github Link"
          />
        </div>
        <div className="relative flex flex-col ">
          <Label className="mb-4 text-lg">Description</Label>
          <Textarea
            id="description"
            onChange={handleChange}
            value={formData?.description}
            placeholder="Share Your Thoughts..."
          />
        </div>
        <div className="flex w-full justify-end">
          <Button
            onClick={handleSubmit}
            className="flex items-center gap-x-1 max-w-[166px]"
          >
            Update
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditProject;
