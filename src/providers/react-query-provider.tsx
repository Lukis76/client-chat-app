'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode, useState } from 'react'

interface ReactQueryProviderProps {
    children: ReactNode
}

export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient())

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
