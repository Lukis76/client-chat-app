import { FC } from 'react'
import { IconComponent } from '../../interfaces/iconComponent'

export const Tail: FC<IconComponent> = (props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 38 37'
        width={`${props.size || 24}px`}
        height={`${props.size || 24}px`}
        fill={`${props.bg || 'none'}`}
        className={props.className || ''}
        {...props}
    >
        <path
            // fill='#278EFF'
            fillRule='evenodd'
            d='M25.289 16.262c.29-1.505.443-3.06.443-4.65V.703H1.344V36c5.906 0 11.321-2.1 15.54-5.592 4.21 2.805 10.96 5.47 19.116 3.988-2.246-.963-10.91-6.74-10.59-18.291-.038.053-.079.106-.121.157Z'
            clipRule='evenodd'
        />
        <path
            // fill='#278EFF'
            d='m25.289 16.262.385.318-.876-.413.49.095Zm.443-15.56v-.5h.5v.5h-.5Zm-24.388 0h-.5v-.5h.5v.5Zm0 35.298v.5h-.5V36h.5Zm15.54-5.592-.318-.385.286-.237.31.206-.277.416ZM36 34.396l.197-.46 1.527.654-1.635.297-.089-.491ZM25.41 16.105l-.404-.294.95-1.305-.046 1.613-.5-.014Zm.822-4.492c0 1.622-.156 3.208-.452 4.744l-.982-.19c.285-1.474.434-2.997.434-4.554h1Zm0-10.91v10.91h-1V.703h1ZM1.344.202h24.388v1H1.344v-1ZM.844 36V.702h1V36h-1Zm16.36-5.207A24.788 24.788 0 0 1 1.344 36.5v-1a23.788 23.788 0 0 0 15.222-5.477l.638.77Zm18.885 4.095c-8.314 1.511-15.194-1.208-19.481-4.064l.554-.832c4.132 2.753 10.752 5.366 18.749 3.912l.178.983Zm-10.178-18.77c-.157 5.639 1.876 9.858 4.222 12.79 2.356 2.946 5.017 4.58 6.064 5.028l-.394.92c-1.2-.515-3.993-2.25-6.45-5.322-2.468-3.084-4.606-7.529-4.442-13.443l1 .028Zm-1.008-.174c.036-.044.07-.088.103-.133l.81.588a3.7 3.7 0 0 1-.142.181l-.77-.636Z'
        />
    </svg>
)