import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

const connectSocket = (user_id?: string) => {
    if (typeof window !== 'undefined') {
        socket = io('http://localhost:4000')
    }
} // Add this -- our server will run on port 4000, so we connect to it from here

export { connectSocket, socket }
