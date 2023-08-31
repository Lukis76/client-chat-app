'use client'

import { Github, Google } from '@/components/icons'
import { Button } from '@nextui-org/react'
import { createClientComponentClient, type Session } from '@supabase/auth-helpers-nextjs'
import { SignInWithOAuthCredentials } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface SignAuthClientProps {
  session: Session | null
}

export const SignAuthClient: FC<SignAuthClientProps> = ({ session }) => {
  const route = useRouter()
  const suprabase = createClientComponentClient()

  const handleSignIn = async ({ provider }: SignInWithOAuthCredentials) => {
    await suprabase.auth.signInWithOAuth({ provider, options: { redirectTo: 'http://localhost:3000/auth/callback' } })
  }

  const handleSignOut = async () => {
    await suprabase.auth.signOut()
    route.refresh()
  }

  return (
    <div className='flex flex-row gap-4 w-full justify-evenly'>
      {!!session ? (
        <Button color='default' variant='bordered' className='min-w-0 h-unit-2xl' onPress={handleSignOut}>
          Log Out
        </Button>
      ) : (
        <>
          <Button color='default' variant='bordered' className='min-w-0 h-unit-2xl' onPress={() => handleSignIn({ provider: 'google' })}>
            <Google size={28} />
          </Button>
          <Button color='default' variant='bordered' className='min-w-0 h-unit-2xl' onPress={() => handleSignIn({ provider: 'github' })}>
            <Github size={28} />
          </Button>
        </>
      )}
    </div>
  )
}
// <button className='flex justify-center items-center py-2 px-4 rounded-xl animate-appearance-in border-2 border-default-300/50'>

// channelA
// .on(
//   'presence',
//   { event: 'sync' },
//   () => {
//     const newState = channelA.presenceState()
//     console.log('sync', newState)
//   }
// )
// .on(
//   'presence',
//   { event: 'join' },
//   ({ key, newPresences }) => {
//     console.log('join', key, newPresences)
//   }
// )
// .on(
//   'presence',
//   { event: 'leave' },
//   ({ key, leftPresences }) => {
//     console.log('leave', key, leftPresences)
//   }
// )
// .subscribe(async (status) => {
//   if (status === 'SUBSCRIBED') {
//     const presenceTrackStatus = await channelA.track({
//       user: 'user-1',
//       online_at: new Date().toISOString(),
//     })
//     console.log(presenceTrackStatus)
//   }
// })
