import { SearchBar } from '../../sarch-bar/search-bar'
import style from './content-header.module.css'
import { PrimaryMenu } from './primary-menu/primary-menu'


export const ContentHeader = () => {
  return (
      <div className={style.contentHeader}>
      <PrimaryMenu />
      <SearchBar />
    </div>
  )
}
