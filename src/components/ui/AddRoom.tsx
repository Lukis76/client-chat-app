'use client'

import { PlusIcon } from '@heroicons/react/24/solid'
import { Button } from '@nextui-org/react'

export const AddRoom = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full dark:bg-default-100/50 pl-4 py-2 pr-2 rounded-medium'>
      <div>
        <p className='text-small text-balance'>create a chat room to share your experiences with your friends</p>
      </div>

      <Button variant='flat' className='rounded-medium hover:opacity-100 opacity-disabled min-w-0 p-0 h-10 w-10 dark:bg-default-400/50'>
        <PlusIcon className='h-10 w-10' />
      </Button>
    </div>
  )
}
