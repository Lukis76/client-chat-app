'use client'

import { FC, ReactNode, useEffect, useRef } from 'react'
import { WrapperHeaderMessage } from './WrapperHeaderMessage'
import { WrapperInputMessage } from './WrapperInputMessage'

interface WrapperChatProps {
    children?: ReactNode
}

export const WrapperChat: FC<WrapperChatProps> = ({ children }) => {
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Hacer scroll al final al cargar el contenido
        const contentElement = contentRef.current
        if (contentElement) {
            contentElement.scrollTop = contentElement.scrollHeight
        }
    }, [])

    return (
        <div className='flex flex-col relative w-full'>
            <WrapperHeaderMessage />

            <div ref={contentRef} className=' h-full bg-background overflow-y-auto overflow-hidden'>
                {children}
            </div>
            <WrapperInputMessage />
        </div>
    )
}
