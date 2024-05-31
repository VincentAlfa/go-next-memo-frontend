'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Register() {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/users/register`;
    await axios.post(url, {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
    router.push('/login');
  };

  return (
    <>
      <div className='mx-auto max-w-sm space-y-6'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold'>Register</h1>
          <p className='text-gray-500 dark:text-gray-400'>
            Enter your email and password to sign in to your account.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' placeholder='Enter email' required type='email' ref={emailRef} />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' required type='password' ref={passwordRef} />
            </div>
            <Button className='w-full' type='submit'>
              Register
            </Button>
          </div>
          <Separator className='my-8' />
          <Button className='w-full' variant='outline'>
            Sign in with Google
          </Button>
        </form>
      </div>
    </>
  );
}
