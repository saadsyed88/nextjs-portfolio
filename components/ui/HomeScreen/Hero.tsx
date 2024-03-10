import { Download, Send } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from 'react-icons/ri';
import { Button } from '../button';
import Badge from './Badge';
import DevImg from './DevImg';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28  bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Web Developer
            </div>
            <h1 className='h1 mb-4'>Hello, my name is Syed Saad </h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
              Brief description with insights into myself, my vocational
              journey, and what i engage in professionally.{' '}
            </p>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant='secondary' className='gap-x-2'>
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          <div className='hidden xl:flex relative'>
            {/* Badge 1 */}
            <Badge
              containerStyles='absolute top-[24%] -left-[5rem] '
              endCountNum={3}
              badgeText='Years of Experience'
              icon={<RiBriefcase4Fill />}
            />
            {/* Badge 2 */}
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem] !w-[220px] !bg-white '
              endCountNum={20}
              endCountText={'+'}
              badgeText='Finished Projects'
              icon={<RiTodoFill />}
            />
            {/* Badge 3 */}
            <Badge
              containerStyles='absolute top-[55%] -right-8 '
              endCountNum={20}
              endCountText={'+'}
              badgeText='Happy Cleints'
              icon={<RiTeamFill />}
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              imageStyle='rounded-b-full !h-[97%] !w-[90%]'
              imgSrc='/hero/dev5.png'
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat  relative bg-bottom'
            />
          </div>
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12'>
          <RiArrowDownSLine className='text-3xl text-primary animate-bounce' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
