import { CheckIcon } from '@heroicons/react/24/solid'

export const StateMessage = () => {
    return (
        <div className='w-4 h-4 relative'>
            <CheckIcon className='w-4 h-4 z-10 absolute bottom-0 left-[5px]' />
            <CheckIcon className='w-4 h-4 absolute bottom-0 left-0' />
        </div>
    )
}
