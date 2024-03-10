import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../button';

export default async function LoginForm({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const cookieStore = cookies();

    return redirect('/admin');
  };

  return (
    <>
      <form
        className="animate-in flex-1 flex flex-col w-full mt-24 gap-2 text-foreground"
        action={signIn}
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <Button className=" rounded-md px-4 py-2 text-foreground mb-2">
          Sign In
        </Button>
        {searchParams?.message && (
          <p className="mt-4 p-3 text-sm bg-foreground/10 text-foreground text-center rounded-md">
            {searchParams.message}
          </p>
        )}
      </form>
    </>
  );
}
