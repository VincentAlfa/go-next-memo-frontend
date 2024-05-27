import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import axios from 'axios';

export default async function Home() {
  // const response = await axios.get('http://localhost:4000');
  return (
    <>
      <div className='mx-auto max-w-sm space-y-6'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold'>Welcome Back</h1>
          <p className='text-gray-500 dark:text-gray-400'>
            Enter your email and password to sign in to your account.
          </p>
        </div>
        <div>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' placeholder='m@example.com' required type='email' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' required type='password' />
            </div>
            <Button className='w-full' type='submit'>
              Sign In
            </Button>
          </div>
          <Separator className='my-8' />
          <Button className='w-full' variant='outline'>
            Sign in with Google
          </Button>
        </div>
      </div>
    </>
  );
}
