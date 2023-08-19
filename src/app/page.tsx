'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { FormEvent, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { storeMessage } from '../redux/features/chat/chat.slice'
import styles from './page.module.css'

const socket = io('http://localhost:4000')

interface Message {
  body: string
  from: string
  date: Date
}

export default function Home() {
  const dispatch = useAppDispatch()
  const selector = useAppSelector(state => state.chat.messages)

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newMessage: Message = {
      body: message,
      from: 'Me',
      date: new Date(),
    }

    socket.emit('message', newMessage)
    dispatch(storeMessage(newMessage))
    // setMessages((prevState) => [...prevState, newMessage])
    setMessage('')
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
    <main className={styles.main}>
      <div></div>
      <form onSubmit={handleSubmit} style={{ color: 'black' }}>
        <input type='text' placeholder='write your message...' onChange={(e) => setMessage(e.target.value)} value={message} />
        <button>Send</button>
      </form>
      <div>
        {!!selector.length &&
          selector?.map((message, idx) => {
            console.log('🚀 ~ file: page.tsx:53 ~ {messages?.map ~ message:', message)
            return (
              <div key={idx + 2 * 6} style={{ color: 'black', backgroundColor: 'white', display: 'flex', flexDirection: 'row' }}>
                <p style={{ color: 'black' }}>{message.body}</p>~ || ~<p style={{ color: 'black' }}>{message.from}</p>
              </div>
            )
          })}
      </div>
    </main>
  )
}
