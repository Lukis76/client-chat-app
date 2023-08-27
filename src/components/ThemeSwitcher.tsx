'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Button } from '@nextui-org/button'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      aria-label='Toggle Dark Mode'
      type='button'
      color='default'
      variant='bordered'
      className='w-10 h-10 p-0  min-w-0 border rounded-lg'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <SunIcon className='h-5 w-5 text-orange-300' /> : <MoonIcon className='h-5 w-5 text-stale-800' />}
    </Button>
  )
}
