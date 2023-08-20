import { BoxInterlocutor } from './box-interlocutor/box-interlocutor'
import { ContentHeader } from './content-header/content-header'
import style from './leftBar.module.css'

const usuarios = [
    {
        name: 'Pedro',
        date: '12/12/2012',
    },
    {
        name: 'juan',
        date: '2/22/2012',
    },
]

const getRooms = async () => {
    const rooms = await fetch('http://localhost:3000/room')
    const data = await rooms.json()
    return data

}

export const LeftBar = async () => {
    const rooms = await getRooms()
    console.log('rooms:', rooms)
    return (
        <section className={style.leftBarContent}>
            <ContentHeader />
            {usuarios.map((_, idx) => {
                return <BoxInterlocutor key={idx} />
            })}
        </section>
    )
}
