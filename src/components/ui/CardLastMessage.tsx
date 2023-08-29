import { FC } from 'react'
import { UnreadMessage } from './UnreadMessage'

interface CardLastMessageProps {
  message: string
  count: number
}

export const CardLastMessage: FC<CardLastMessageProps> = ({ count, message }) => {
  return (
    <div className='flex flex-row items-center justify-between w-full gap-1'>
      <p className='text-xs truncate block w-full'>{message}</p>
      <UnreadMessage count={count} />
    </div>
  )
}
