'use client'

import { Room } from '@/interfaces/room'
import { setRoomSate, stateSectionMessage } from '@/redux/features/chat/chat.slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { socket } from '@/socket'
import { FC } from 'react'
import style from './box-interlocutor.module.css'

interface BoxInterlocutorProps {
    room: Room
}

export const BoxInterlocutor: FC<BoxInterlocutorProps> = ({ room }) => {
    const dispatch = useAppDispatch()
    const room_id = useAppSelector((state) => state.chat.room)

    const handlerSelectRoom = () => {
        console.log('🚀 ~ file: box-interlocutor.tsx:19 ~ room.id:', room.id)

        socket?.emit('event_change_room', { roomId: room.id, leave: room_id })
        dispatch(setRoomSate(room.id))
        dispatch(stateSectionMessage(true))
    }
    return (
        <div className={style.boxContentInterlocutor} onClick={handlerSelectRoom}>
            <img
                className={style.interlocutorContentImage}
                src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/41/4134d6f93e0610a102de3496d65b47c560c02fa5_full.jpg'
                alt=''
            />
            <div className={style.interlocutorContentInfo}>
                <div className={style.sectionHeader}>
                    <h5 className={style.interlocutorName}>{room.name}</h5>
                    <time>
                        {/* {room.updatedAt.toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                        })} */}
                        {room.updatedAt.toString()}
                    </time>
                </div>
                <div className={style.sectionMessage}>
                    <p>{room.lastMessage}</p>
                    <i>1</i>
                </div>
            </div>
        </div>
    )
}
