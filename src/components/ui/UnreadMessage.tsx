import { FC } from 'react'

interface UnreadMessageProps {
  count: number
}

export const UnreadMessage: FC<UnreadMessageProps> = ({ count }) => {
  const conterSort = count > 9 ? '9+' : count

  return (
    <div className='relative h-5 w-5 text-small rounded-full text-default-foreground bg-[#78E378]'>
      <p
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-tiny text-slate-600 dark:text-slate-700 '
        style={{ letterSpacing: '-1px' }}
      >
        {conterSort}
      </p>
    </div>
  )
}
