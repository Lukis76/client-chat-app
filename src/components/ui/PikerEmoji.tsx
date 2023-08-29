'use Client'

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { FC } from 'react'

interface PikerEmojiProps {
    onEmojiSelect: (data: string) => void
}

export const PikerEmoji: FC<PikerEmojiProps> = ({onEmojiSelect}) => {
    const { theme } = useTheme()
    return (
        <Popover placement='bottom' showArrow={true}>
            <PopoverTrigger>
                <Button
                    type='button'
                    variant='flat'
                    className='absolute left-2 bottom-3 z-10 flex flex-col justify-center items-center p-0 rounded-medium min-w-0 min-h-0 h-unit-9 w-unit-9 bg-default-300/80'
                >
                    <FaceSmileIcon className='text-default-foreground/50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0'>
                <Picker theme={theme} data={data} onEmojiSelect={(data: { native: string }) => onEmojiSelect(data.native)} />
            </PopoverContent>
        </Popover>
    )
}
