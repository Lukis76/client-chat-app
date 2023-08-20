import { FC } from 'react'
import { IconComponent } from '../../interfaces/iconComponent'

export const Emoji: FC<IconComponent> = (props) => (
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
      d='M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm0 1.5a8.502 8.502 0 1 0 0 17.003A8.502 8.502 0 0 0 12 3.5v-.001ZM8.462 14.784A4.492 4.492 0 0 0 12 16.502a4.49 4.49 0 0 0 3.535-1.714.75.75 0 1 1 1.177.93A5.991 5.991 0 0 1 12 18.002a5.99 5.99 0 0 1-4.716-2.29.75.75 0 0 1 1.178-.928ZM9 8.75a1.25 1.25 0 1 1 .07 2.5A1.25 1.25 0 0 1 9 8.75Zm6 0a1.25 1.25 0 1 1 .07 2.499A1.25 1.25 0 0 1 15 8.75Z'
    />
  </svg>
)
