'use client'
import { AtSymbolIcon, FingerPrintIcon } from '@heroicons/react/24/solid'
import { Button, Checkbox, Input, Link } from '@nextui-org/react'

const SignUpPage = () => {
  return (
    <>
      <div className='flex flex-col gap-1'>
        <p className='text-small'>
          Already have an account?{' '}
          <Link color='primary' href='/authentication/sign-in' className='rounded-sm'>
            Sign in
          </Link>
        </p>
      </div>
      <div className='flex flex-col gap-8'>
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
        <Input
          endContent={<FingerPrintIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0 w-8 h-8 -mt-4' />}
          label='Confirm password'
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
        <Button type='submit' color='primary' variant='ghost' /* onPress={onClose} */ className='font-semibold px-8'>
          Sign Up
        </Button>
      </div>
    </>
  )
}

export default SignUpPage
