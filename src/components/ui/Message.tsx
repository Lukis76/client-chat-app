'use client'

import { useTimeAgo } from '@/hooks/timeAgo'
import { faker } from '@faker-js/faker'
import { cn } from '@nextui-org/react'
import { FC } from 'react'
import { Tail } from '../icons/tail'
import { AvatarMessage } from './AvatarMessage'
import { OptionMessage } from './OptionMessage'
import { WrapperFooterMessage } from './WrapperFooterMessage'
interface UserEmit {
  id: number
  name: string
  image: string
}
interface Content {
  id: number
  content: string
  createdAt: Date
  updatedAt: Date
  recivede: number[]
  view: number[]
  roomId: number
  userEmit: UserEmit
}
interface Message {
  message: Content
}

export const Message: FC<Message> = ({ message }) => {
    const ago = useTimeAgo({ timestamp: faker.date.recent() })

  const author = (id: number) => {
    const sessionUserId = 1
    return id === sessionUserId
  }
  return (
    <div className={cn('main wrapper w-[80%] flex', author(message.userEmit.id) ? 'flex-row-reverse self-end' : 'flex-row self-start')}>
      <div className={cn('flex flex-col justify-end -mb-8 p-2')}>
        <AvatarMessage user={message.userEmit} />
      </div>
      <div
        className={cn(
          ' flex flex-col text-balance max-w-6xl rounded-large py-2 px-4 mx-1 self-start relative text-medium z-10',
          author(message.userEmit.id) ? 'bg-secondary-100' : 'bg-success-200'
        )}
      >
        <Tail
          className={cn(
            'absolute bottom-0 -z-10',
            author(message.userEmit.id)
              ? '-right-[7px] fill-secondary-100 stroke-secondary-100'
              : 'transform scale-x-[-1] -left-[7px] fill-success-200 stroke-success-200 '
          )}
        />
        <div className={cn('flex flex-row items-center justify-between gap-6')}>
          <div className={cn('flex flex-row items-center justify-start gap-2')}>
            <p className='font-semibold'>{faker.person.fullName()}</p>
            <span className='text-tiny'>~</span>
            <time className='text-tiny'>{ago?.timeago}</time>
          </div>
          <OptionMessage />
        </div>
        <p className='pr-4'>{faker.lorem.text()}</p>
        <WrapperFooterMessage />
      </div>
    </div>
  )
}
