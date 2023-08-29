import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

export const OptionRoom = () => {
    return (
        <Button variant='flat' className='min-w-0 min-h-0 rounded-medium w-unit-13 p-0 h-unit-11 bg-default-300/50 '>
            {/* <div className='flex items-center gap-4'> */}
            <Dropdown placement='bottom-end'>
                <DropdownTrigger>
            <EllipsisVerticalIcon className='w-6 h-6' />
                    {/* <Avatar
                        isBordered
                        as='button'
                        className='transition-transform bottom-0'
                        color='secondary'
                        name={user.name}
                        size='md'
                        src={user.image || 'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
                    /> */}
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
        {/* </div> */}
        </Button>
    )
}
