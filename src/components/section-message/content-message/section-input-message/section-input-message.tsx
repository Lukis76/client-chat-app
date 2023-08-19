import { ChangeEvent, FormEvent } from 'react'
import { Emoji } from '../../../icons/emoji'
import { Send } from '../../../icons/send'
import style from './section-input-message.module.css'

export const SectionInputMessage = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className={style.sectionInputMessage} onSubmit={handleSubmit}>
      <button className={style.emojiIcon}>
        <Emoji />
      </button>
      <input type='text' placeholder='Message...' onChange={handleChange} />
      <button type='submit'>
        <Send className={style.sendIcon} />
      </button>
    </form>
  )
}
