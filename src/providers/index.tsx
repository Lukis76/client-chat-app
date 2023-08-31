'use client'

import { ReduxProvider } from '@/providers/redux-provider'
import { FC, ReactNode } from 'react'
import { NextUIPPovider } from './next-ui-provider'
import { ReactQueryProvider } from './react-query-provider'
// import { SocketProvider } from './socket-provider'
interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        {/* <SocketProvider> */}
          <NextUIPPovider>{children}</NextUIPPovider>
        {/* </SocketProvider> */}
      </ReactQueryProvider>
    </ReduxProvider>
  )
}
