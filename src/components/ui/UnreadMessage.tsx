import { FC } from 'react'

interface UnreadMessageProps {
  count: number
}

export const UnreadMessage: FC<UnreadMessageProps> = ({ count }) => {
  return (
    <span className='bg-[78E378]'>
      { count}
    </span>
  )
}
