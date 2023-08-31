import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { SignAuthClient } from '../sign-auth-client'

export const dynamic = 'force-dynamic'

export const AuthServerProvider = async () => {
  const suprabase = createServerComponentClient({ cookies })
  const { data } = await suprabase.auth.getSession()

  return <SignAuthClient session={data.session} />
}
