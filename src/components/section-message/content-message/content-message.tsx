import style from './content-message.module.css'
import { ListMessages } from './list-messages/list-messages'
import { SectionInputMessage } from './section-input-message/section-input-message'

export const ContentMessage = () => {
  return (
    <section className={style.contentMessage}>
      <div>
        <ListMessages />
        <SectionInputMessage />
      </div>
    </section>
  )
}
