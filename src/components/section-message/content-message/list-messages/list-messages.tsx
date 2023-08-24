'use client'

import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from '../../../../redux/hooks'
import style from './list-messages.module.css'
import { Message } from './message/message'

export const ListMessages = () => {
    const roomId = useAppSelector((state) => state.chat.room)
    console.log('🚀 ~ file: list-messages.tsx:28 ~ ListMessages ~ roomId:', roomId)
    const { data, refetch } = useQuery({
        queryKey: ['messages'],
        queryFn: async () =>
            await fetch(`http://localhost:3000/message?roomId=${roomId}&page=${1}&pageSize=${10}`).then((res) => res.json()),
        initialData: { messages: [] },
    })
    console.log('🚀 ~ file: list-messages.tsx:34 ~ ListMessages ~ data:', data)
    return (
        <section className={style.listMessages}>
            {data.messages.reverse().map((message: any) => {
                return <Message key={message.id} message={message} position={message.from === 'Me'} />
            })}
        </section>
    )
}
