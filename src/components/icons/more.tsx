import { FC } from 'react'
import { IconComponent } from '../../interfaces/iconComponent'

export const More: FC<IconComponent> = (props) => (
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
      d='M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z'
    />
  </svg>
)
