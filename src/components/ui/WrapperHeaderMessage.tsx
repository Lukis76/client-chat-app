import { Avatar } from '@nextui-org/react'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { OptionRoom } from './OptionRoom'
import { CallRoom } from './CallEmit'

export const WrapperHeaderMessage = () => {
    return (
        <div className='h-[4.6rem] w-full bg-background px-5 flex flex-row items-center border-b-1 border-slate-200 dark:border-default-100/30 gap-4'>
            <div className='flex flex-row items-center justify-start w-full gap-4'>
                <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='secondary'
                    name='Jason Hughes'
                    size='md'
                    src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
                <p className='font-semibold'>Jason Hughes</p>
            </div>
            <CallRoom />
            <OptionRoom />
            <ThemeSwitcher />
        </div>
    )
}
