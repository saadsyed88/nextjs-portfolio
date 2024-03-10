// 'use client';
import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const signOut = async () => {
    'use server';
    return redirect('/login');
  };
  const links = [
    { path: '/admin', name: 'My Projects' },
    { path: '/contact', name: 'Contact' },
  ];

  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // const signOut = async () => {
  //   'use server';

  //   const cookieStore = cookies();
  //   const supabase = createClient(cookieStore);
  //   await supabase.auth.signOut();
  //   return redirect('/login');
  // };

  // if (!user) {
  //   return redirect('/login');
  // }
  return (
    <nav className="hidden bg-white justify-center my-4  xl:flex gap-x-8 items-center">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize relative hover:text-primary transition-all `}
          >
            {link.name}
          </Link>
        );
      })}
      <Link href={'/'}>
        <Button>Home </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
