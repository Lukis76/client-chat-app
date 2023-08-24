import { Socket } from 'socket.io-client/debug'

declare global {
    interface Window {
        socket: Socket | null
    }
}
