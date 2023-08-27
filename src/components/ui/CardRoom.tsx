import { Card, CardBody, Image } from '@nextui-org/react'
import { FC } from 'react'

interface CardRoomProps {
  image: string
  children: React.ReactNode
}

export const CardRoom: FC<CardRoomProps> = ({ children, image }) => {
  return (
    <Card isBlurred className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]' shadow='sm'>
      <CardBody className='flex flex-row gap-2 items-center'>
        <Image width={60} height={60} alt='NextUI hero Image' className='rounded-full object-cover w-16 h-16' src={image} />
        <div className='flex flex-col items-start w-full'>{children}</div>
      </CardBody>
    </Card>
  )
}
