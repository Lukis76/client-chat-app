import { FormEvent } from 'react'
import { Search } from '../icons/search'
import style from './search-bar.module.css'

export const SearchBar = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit} className={style.formInput}>
      <Search className={ style.searchIcon } fill='red' />
      <input type='search' placeholder='Search' onChange={handleChange} />
    </form>
  )
}
