'use client'

import { useTimeAgo } from '@/hooks/timeAgo'
import { faker } from '@faker-js/faker'
import { FC } from 'react'

interface CardNameProps {
  name: string
  time: string
}

export const CardName: FC<CardNameProps> = ({ time, name }) => {
  const ago = useTimeAgo({ timestamp: faker.date.recent() })
  return (
    <div className='flex flex-row items-center justify-between w-full gap-1'>
      <p className='text-base font-semibold truncate max-w-[210px]'>{name}</p>
      <time className='text-xs font-medium text-center flex-nowrap whitespace-nowrap '>{ago?.timeago}</time>
    </div>
  )
}
