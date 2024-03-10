import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';

import Link from 'next/link';

interface MainLayoutProps {
  children: ReactNode;
}

export default async function AdminsLayout({ children }: MainLayoutProps) {
  const cookieStore = cookies();

  const signOut = async () => {
    'use server';

    return redirect('/login');
  };

  return (
    <main className="flex">
      <section className="w-full">
        <header className="p-3 fixed z-10 left-60 bg-white border-b right-0">
          <div className="container flex justify-between items-center">
            <div className="flex gap-6 justify-center">
              <form action={signOut}>
                <button className="py-2 px-2 text-sm block hover:bg-gray-100 rounded-md no-underline bg-btn-background w-full text-left">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </header>
        <div className="absolute left-60 bottom-0 top-24 right-5">
          <div className="container">{children}</div>
        </div>
        {/* <div className="p-5 mt-20 max-w-6xl ml-auto mr-auto w-1/2"></div> */}
      </section>
    </main>
  );

  // return user ? (
  //   <div className="flex items-center gap-4">
  //     Hey, {user.email}!
  //     <form action={signOut}>
  //       <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
  //         Logout
  //       </button>
  //     </form>
  //   </div>
  // ) : (
  //   <Link
  //     href="/login"
  //     className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
  //   >
  //     Login
  //   </Link>
  // )
}
