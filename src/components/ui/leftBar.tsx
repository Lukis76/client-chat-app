import { FC, ReactNode } from 'react'
import { AddRoom } from './AddRoom'
import { Menu } from './Menu'
import { Search } from './Search'

interface LeftBarProps {
    children: ReactNode
}

export const LeftBar: FC<LeftBarProps> = ({ children }) => {
    return (
        <div className='flex flex-col justify-start gap-1 min-w-[24rem] max-w-sm border-r-1 border-slate-200 px-2 pt-2 dark:border-default-100/30 h-screen'>
            <div className='sticky mb-2 flex flex-row gap-2'>
                <Menu />
                <Search />
            </div>
            <AddRoom />
            {children}
        </div>
    )
}
