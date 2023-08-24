'use client'

import { useAppSelector } from '../../redux/hooks'
import { ContentHeaderMessage } from './content-header-message/content-header-message'
import { ContentMessage } from './content-message/content-message'
import style from './section-message.module.css'

export const SectionMessage = () => {
    const chatState = useAppSelector((state) => state.chat.state)

    return (
        <section className={style.sectionContentMessage}>
            {chatState && (
                <>
                    <ContentHeaderMessage />
                    <ContentMessage />
                </>
            )}
        </section>
    )
}
