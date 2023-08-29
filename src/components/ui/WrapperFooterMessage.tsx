import { cn } from '@nextui-org/react'
import { StateMessage } from './StateMessage'
import { WrapperReactMessage } from './WrapperReactMessage'

export const WrapperFooterMessage = () => {
    return (
        <div className={cn('flex flex-row justify-end items-center gap-1')}>
            <WrapperReactMessage />
            <StateMessage />
        </div>
    )
}
