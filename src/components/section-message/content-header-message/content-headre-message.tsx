import { Call } from '../../icons/call'
import { More } from '../../icons/more'
import { Search } from '../../icons/search'
import style from './constent-header-message.module.css'

export const ContentHeadreMessage = () => {
  return (
    <div className={style.contentHeaderMessage}>
      <div className={style.avatarAndNameAndMessageContainer}>
        <img src='' alt='avatar' />
        <div>
          <h4>Имя Фамилия</h4>
          <p>Сообщение</p>
        </div>
      </div>
      <button>
        <Search />
      </button>
      <button>
        <Call />
      </button>
      <button>
        <More />
      </button>
    </div>
  )
}
