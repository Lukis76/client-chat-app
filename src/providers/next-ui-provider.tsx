'use client'

import { NextUIProvider as NextProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { FC, ReactNode } from 'react'

interface NextUIProviderProps {
  children: ReactNode
}

export const NextUIPPovider: FC<NextUIProviderProps> = ({ children }) => {
  return (
    <NextProvider>
      <NextThemesProvider attribute='class' /* defaultTheme='dark' */ >
        {children}
      </NextThemesProvider>
    </NextProvider>
  )
}
