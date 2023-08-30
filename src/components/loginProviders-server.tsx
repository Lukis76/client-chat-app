import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { LoginProvidersClient } from './loginProdiders-client'

export const LoginProvidersServer = async () => {
  const suprabase = createServerComponentClient({ cookies })
  const { data } = await suprabase.auth.getSession()

  return <LoginProvidersClient session={data.session} />
}
