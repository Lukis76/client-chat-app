import { FC } from 'react'

interface CardNameProps {
  name: string
  time: string
}

export const CardName: FC<CardNameProps> = ({ time, name }) => {
  return (
    <div className='flex flex-row items-center justify-between w-full gap-1'>
      <p className='text-base font-semibold truncate'>{name}</p>
      <time className='text-xs font-medium'>{time}</time>
    </div>
  )
}
