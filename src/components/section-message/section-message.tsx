import { ContentHeadreMessage } from './content-header-message/content-headre-message'
import { ContentMessage } from './content-message/content-message'
import style from './section-message.module.css'


export const SectionMessage = () => {
  return (
    <section className={style.sectionContentMessage}>
      <ContentHeadreMessage />
      <ContentMessage />
    </section>
  )
}
