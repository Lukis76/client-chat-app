import { Hamburger } from '../../../hamburger/hamburger'
import style from './primary-menu.module.css'

export const PrimaryMenu = () => {
  return (
      <div className={style.primaryMenuContent}>
          <Hamburger />
          
    </div>
  )
}
