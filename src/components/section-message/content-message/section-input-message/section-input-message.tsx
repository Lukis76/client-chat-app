'use client'

import { Emoji } from '@/components/icons/emoji'
import { Send } from '@/components/icons/send'
import { useAppSelector } from '@/redux/hooks'
import { socket } from '@/socket'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import style from './section-input-message.module.css'

// const socket = io('http://localhost:4000')

export const SectionInputMessage = () => {
    const room = useAppSelector((state) => state.chat.room)

    const { data, refetch } = useQuery({
        queryKey: ['messages'],
        queryFn: async () => await fetch(`http://localhost:3000/message?roomId=${room}&page=${1}&pageSize=${10}`).then((res) => res.json()),
        initialData: { messages: [] },
    })

    const methods = useForm<{ message: string }>()

    const submit = async (data: any) => {
        console.log('🚀 ~ file: section-input-message.tsx:31 ~ submit ~ room:', room)

        const newMessage = {
            body: data.message,
            from: 'Me',
            roomId: room,
        }
        socket?.emit('event_message', newMessage)

        methods.reset({
            message: '',
        })
    }

    return (
        <form className={style.sectionInputMessage} onSubmit={methods.handleSubmit(submit)}>
            <button className={style.emojiIcon}>
                <Emoji />
            </button>
            <input type='text' placeholder='Message...' {...methods.register('message')} />
            <button type='submit'>
                <Send className={style.sendIcon} />
            </button>
        </form>
    )
}
