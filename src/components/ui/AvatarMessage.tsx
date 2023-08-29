import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { FC } from 'react'
import {faker } from '@faker-js/faker'

interface AvatarMessageProps {
    user: {
        id: number
        name: string
        image: string
    }
}

export const AvatarMessage: FC<AvatarMessageProps> = ({ user }) => {
    return (
        <div className='flex items-center gap-4'>
            <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as='button'
                        className='transition-transform bottom-0'
                        color='secondary'
                        name={user.name}
                        size='md'
                        src={faker.image.avatar()}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label='Profile Actions' variant='flat'>
                    <DropdownItem key='profile' className='h-14 gap-2'>
                        <p className='font-semibold'>Signed in as</p>
                        <p className='font-semibold'>zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key='settings'>My Settings</DropdownItem>
                    <DropdownItem key='team_settings'>Team Settings</DropdownItem>
                    <DropdownItem key='analytics'>Analytics</DropdownItem>
                    <DropdownItem key='system'>System</DropdownItem>
                    <DropdownItem key='configurations'>Configurations</DropdownItem>
                    <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
                    <DropdownItem key='logout' color='danger'>
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
