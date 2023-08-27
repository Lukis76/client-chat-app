'use client'

import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { CardLastMessage } from '../components/ui/CardLastMessage'
import { CardName } from '../components/ui/CardName'
import { CardRoom } from '../components/ui/CardRoom'

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <br />
      <br />
      <CardRoom image='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'>
        <CardName name='John Doe' time='11:30' />
        <CardLastMessage message='Lorem ipsum dolor sit amet, consectetur adipisicing elit.' time='11:30' />
      </CardRoom>
    </>
  )
}
