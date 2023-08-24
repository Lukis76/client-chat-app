'use client'

import { connectSocket, socket } from '@/socket'
import { FC, useEffect } from 'react'
interface SocketProviderProps {
    children: React.ReactNode
}

export const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
    useEffect(() => {
        /**
         * Connect socket
         */
        if (!socket) {
            connectSocket()
            console.log('Socket created')
        }
        /**
         * Socket events listener
         */

        socket?.on('message', reciveMessage)

        /**
         * Off events socket
         */
        return () => {
            socket?.off('event_message')
        }
    }, [])

    const reciveMessage = (data: any) => {
        console.log('reviced message => ', data)
    }

    return <>{children}</>
}
