'use client'

import { useQuery } from '@tanstack/react-query'
import { Room } from '../../interfaces/room'
import { BoxInterlocutor } from './box-interlocutor/box-interlocutor'
import { ContentHeader } from './content-header/content-header'
import style from './leftBar.module.css'

export const LeftBar = () => {
    const { data: rooms } = useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
            return await fetch('http://localhost:3000/room').then((res) => res.json())
        },
        initialData: [],
    })

    console.log('rooms:', rooms)
    return (
        <section className={style.leftBarContent}>
            <ContentHeader />
            {rooms.map((room: Room) => {
                return <BoxInterlocutor key={room.id} room={room} />
            })}
        </section>
    )
}
