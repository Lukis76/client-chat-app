import { FormEvent, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { LeftBar } from './components/left-bar/leftBar'
import style from './app.module.css'



const socket = io('http://localhost:4000')

interface Message {
    body: string
    from: string
}

function App() {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    console.log('🚀 ~ file: App.tsx:9 ~ App ~ messages:', messages)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newMessage: Message = {
            body: message,
            from: 'Me',
        }
        setMessages((prevState) => [...prevState, newMessage])
        socket.emit('message', message)
        setMessage('')
    }

    useEffect(() => {
        socket.on('message', reciveMessage)
        return () => {
            socket.off('message', reciveMessage)
        }
    }, [])

    const reciveMessage = (message: Message) => setMessages((prevState) => [...prevState, message])

    return (
        <div className={style.contentApp}>
            <LeftBar />
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='write your message...' onChange={(e) => setMessage(e.target.value)} value={message} />
                <button>Send</button>
            </form>
            <div>
                {messages.map((message, index) => (
                    <p key={index}>
                        {message.body} || <small >{message.from}</small>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default App
