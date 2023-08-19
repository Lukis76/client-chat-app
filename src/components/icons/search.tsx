import { FC } from 'react'
import { IconComponent } from '../../interfaces/iconComponent'

export const Search: FC<IconComponent> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={`${props.size || 24}px`}
    height={`${props.size || 24}px`}
    fill={`${props.bg || 'none'}`}
    className={props.className || ''}
    {...props}
  >
    <path
      fill={`${props.fg || '#707991'}`}
      d='M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z'
    />
  </svg>
)
