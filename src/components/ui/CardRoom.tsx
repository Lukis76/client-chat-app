import { Avatar, Card, CardBody } from '@nextui-org/react'
import { FC } from 'react'

interface CardRoomProps {
    image: string
    children: React.ReactNode
}

export const CardRoom: FC<CardRoomProps> = ({ children, image }) => {
    return (
        <Card isBlurred className='border-none bg-background/60 dark:bg-default-100/50 w-full max-w-sm p-0' shadow='sm'>
            <CardBody className='flex flex-row gap-3 items-center pl-3 pr-4 py-4 max-w-sm'>
                <div className='flex flex-col justify-center items-center'>
                    
                <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='secondary'
                    name='Jason Hughes'
                    size='lg'
                    src={image}
                    />
                    </div>
                <div className='flex flex-col items-start w-full'>{children}</div>
            </CardBody>
        </Card>
    )
}
