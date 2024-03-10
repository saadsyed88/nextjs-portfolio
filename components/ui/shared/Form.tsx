import { ArrowRightIcon, MailIcon, User } from 'lucide-react';
import React from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { Textarea } from '../textarea';

const Form = () => {
  return (
    <form className='flex flex-col gap-y-4'>
      {/* input  */}
      <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
      {/* email  */}
      <div className='relative flex items-center'>
        <Input type='email' id='email' placeholder='Email' />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* input  */}
      <div className='relative flex items-center'>
        <Textarea id='desc' placeholder='Share Your Thoughts...' />
      </div>
      <div className='flex w-full justify-end'>
        <Button className='flex items-center gap-x-1 max-w-[166px]'>
          Let's Talk
          <ArrowRightIcon size={18} />
        </Button>
      </div>
    </form>
  );
};

export default Form;
