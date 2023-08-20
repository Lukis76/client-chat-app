'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { FormEvent, useEffect } from 'react'
import { io } from 'socket.io-client'
import { storeMessage } from '../redux/features/chat/chat.slice'
import styles from './app.module.css'
import { LeftBar } from '../components/left-bar/leftBar'
import { SectionMessage } from '../components/section-message/section-message'

const socket = io('http://localhost:4000')

interface Message {
    body: string
    from: string
    date: number
}

export default function Home() {
    const dispatch = useAppDispatch()
    const selector = useAppSelector((state) => state.chat.messages)

    // const [message, setMessage] = useState('')
    // const [messages, setMessages] = useState<Message[]>([])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const { message } = Object.fromEntries(formData.entries())
        // console.log("🚀 ~ file: page.tsx:30 ~ handleSubmit ~ formJson:", formJson)

        const newMessage: Message = {
            body: message.toString(),
            from: 'Me',
            date: new Date().getTime(),
        }

        socket.emit('message', newMessage)
        dispatch(storeMessage(newMessage))
        // setMessages((prevState) => [...prevState, newMessage])
        // setMessage('')
        form.reset()
    }

    useEffect(() => {
        socket.on('message', reciveMessage)
        return () => {
            socket.off('message', reciveMessage)
        }
    }, [])

    const reciveMessage = (message: Message) => {
        dispatch(storeMessage(message))

        console.log('🚀 ~ file: page.tsx:62 ~ reciveMessage ~ message:', message)
        // setMessages((prevState) => [...prevState, message])
    }

    return (
        <main className={styles.contentApp}>
            {/* <div></div>
            <form onSubmit={handleSubmit} style={{ color: 'black' }}>
                <input type='text' name='message' placeholder='write your message...' />
                <button>Send</button>
            </form>
            <div>
                {!!selector.length &&
                    selector?.map((message, idx) => {
                        console.log('🚀 ~ file: page.tsx:53 ~ {messages?.map ~ message:', message)
                        return (
                            <div
                                key={idx + 2 * 6}
                                style={{ color: 'black', backgroundColor: 'white', display: 'flex', flexDirection: 'row' }}
                            >
                                <p style={{ color: 'black' }}>{message.body}</p>~ || ~<p style={{ color: 'black' }}>{message.from}</p>
                            </div>
                        )
                    })}
            </div> */}
            <LeftBar />
            <SectionMessage />
        </main>
    )
}
