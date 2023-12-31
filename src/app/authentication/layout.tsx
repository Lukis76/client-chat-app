import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import { FC, ReactNode } from 'react'
import { AuthServerProvider } from '@/components/server/AuthServerProvider'


interface AuthenticationLayoutProps {
  children: ReactNode
}

const AuthenticationLayout: FC<AuthenticationLayoutProps> = async ({ children }) => {
  const suprabase = createServerComponentClient({ cookies })
  const { data: rooms } = await suprabase.from('Room').select()

  return (
    <main className='flex flex-col justify-center items-center min-h-screen w-full pt-10'>
      {JSON.stringify(rooms, null, 2)}
      <div className='flex flex-col gap-4 w-full max-w-sm'>
        
        {children}
      </div>
    </main>
  )
}

export default AuthenticationLayout
