import { ReduxProvider } from '@/providers/redux-provider'
import { FC, ReactNode } from 'react'
interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>
}
