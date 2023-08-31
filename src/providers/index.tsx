'use client'

import { ReduxProvider } from '@/providers/redux-provider'
import { FC, ReactNode } from 'react'
import { NextUIPPovider } from './next-ui-provider'
import { ReactQueryProvider } from './react-query-provider'
interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
          <NextUIPPovider>{children}</NextUIPPovider>
      </ReactQueryProvider>
    </ReduxProvider>
  )
}
