import { BoxInterlocutor } from './content-header/box-interlocutor/box-interlocutor'
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

export const LeftBar = () => {
    return (
        <section className={style.leftBarContent}>
            <ContentHeader />
            {usuarios.map((_, idx) => {
                return <BoxInterlocutor key={idx} />
            })}
        </section>
    )
}
