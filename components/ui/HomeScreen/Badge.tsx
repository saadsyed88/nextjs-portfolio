'use client';

import { ReactNode } from 'react';
import CountUp from 'react-countup';

interface IBadeProps {
  containerStyles?: string;
  icon?: ReactNode;
  endCountNum: number;
  endCountText?: string;
  badgeText?: string;
}
const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}: IBadeProps) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className='text-3xl text-primary'>{icon}</div>
      <div className='flex items-center gap-x-2 '>
        <div className='text-4xl text-primary leading-none font-bold'>
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className='max-w-[70px] leading-none text-[15px] font-medium text-black '>
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
