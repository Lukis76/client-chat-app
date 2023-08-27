import { FC } from 'react'
import { UnreadMessage } from './UnreadMessage'

interface CardLastMessageProps {
  message: string
  time: string
}

export const CardLastMessage: FC<CardLastMessageProps> = ({ time, message }) => {
  return (
    <div className='flex flex-row items-center justify-between w-full gap-1'>
      <p className='text-xs '>{message}</p>
      <UnreadMessage count={5} />
    </div>
  )
}
