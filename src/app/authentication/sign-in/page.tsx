// import { AtSymbolIcon, FingerPrintIcon } from '@heroicons/react/24/solid'
// import { Button, Checkbox, Input, Link } from '@nextui-org/react'
import { AuthServerProvider } from '@/components/server/AuthServerProvider'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const SignInPage = () => {
  return (
    <>
      <AuthServerProvider />
        <div className='flex flex-row items-center gap-4 justify-between'>
          <span className='bg-default-400/80 flex w-full h-[1px] rounded-full' />
          <span className='text-default-400 text-lg font-medium'>Or</span>
          <span className='bg-default-400/80 flex w-full h-[1px] rounded-full' />
        </div>
      <div className='flex flex-col gap-1'>
        <p className='text-small'>
          Do not you have an account yet?{' '}
          <Link  href='/authentication/sign-up' className='rounded-sm'>
            Sign up
          </Link>
        </p>
      </div>
      {/* <div className='flex flex-col gap-8'>
        <Input
          autoFocus
          endContent={<AtSymbolIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0 w-8 h-8 -mt-4' />}
          label='Email'
          placeholder='Enter your email'
          variant='bordered'
          validationState={'valid'}
        />
        <Input
          endContent={<FingerPrintIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0 w-8 h-8 -mt-4' />}
          label='Password'
          placeholder='Enter your password'
          type='password'
          variant='bordered'
        />

        <div className='flex py-2 px-1 justify-between'>
          <Checkbox
            classNames={{
              label: 'text-small',
            }}
          >
            Remember me
          </Checkbox>
          <Link color='primary' href='#' size='sm' className='rounded-sm'>
            Forgot password?
          </Link>
        </div>
      </div>
      <div className='flex flex-row gap-4 w-full justify-end'>
        <Button type='submit' color='primary' variant='ghost'  className='font-semibold px-8'>
          Sign In
        </Button>
      </div> */}
    </>
  )
}

export default SignInPage
