import { useQuery } from '@tanstack/react-query'
import { Call } from '../../icons/call'
import { More } from '../../icons/more'
import { Search } from '../../icons/search'
import style from './content-header-message.module.css'
import { useAppSelector } from '../../../redux/hooks'
import { Room } from '../../../interfaces/room'

export const ContentHeaderMessage = () => {
  const roomId = useAppSelector(state => state.chat.room)
  const { data: room } = useQuery({
    queryKey: ['room'],
    queryFn: async () => {
        return await fetch(`http://localhost:3000/room/${roomId}`).then((res) => res.json())
    },
    initialData: {},
})

  return (
    <div className={style.contentHeaderMessage}>
      <div className={style.avatarAndNameAndMessageContainer}>
        <img src='' alt='avatar' />
        <div>
          <h4>{ room.name}</h4>
          <p>carlos moreira</p>
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
