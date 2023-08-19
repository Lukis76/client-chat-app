import { FC } from 'react'
import { IconComponent } from '../../interfaces/iconComponent'

export const Send: FC<IconComponent> = (props) => (
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
      d='m12.815 12.197-7.532 1.256a.499.499 0 0 0-.386.318L2.3 20.728c-.248.64.421 1.25 1.035.943l18-9a.75.75 0 0 0 0-1.342l-18-9c-.614-.307-1.283.304-1.035.943l2.598 6.957a.5.5 0 0 0 .386.319l7.532 1.255a.2.2 0 0 1 0 .394h-.001Z'
    />
  </svg>
)
