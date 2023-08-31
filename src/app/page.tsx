import { CardLastMessage } from '@/components/ui/CardLastMessage'
import { CardName } from '@/components/ui/CardName'
import { CardRoom } from '@/components/ui/CardRoom'
import { WrapperChat } from '@/components/ui/WrapperChat'
import { WrapperMessage } from '@/components/ui/WrapperMessage'
import { LeftBar } from '@/components/ui/leftBar'
import { faker } from '@faker-js/faker'

export default function Home() {
  return (
    <main className='flex flex-row w-screen h-screen'>
      <LeftBar>
        <CardRoom image={faker.image.avatar()}>
          <CardName name={faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
          <CardLastMessage message={faker.lorem.sentence()} count={faker.number.int({min:1, max:15})} />
        </CardRoom>
        <CardRoom image={faker.image.avatar()}>
          <CardName name={faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
          <CardLastMessage message={faker.lorem.sentence()} count={faker.number.int({min:1, max:15})} />
        </CardRoom>
        <CardRoom image={faker.image.avatar()}>
          <CardName name={faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
          <CardLastMessage message={faker.lorem.sentence()} count={faker.number.int({min:1, max:15})} />
        </CardRoom>
        <CardRoom image={faker.image.avatar()}>
          <CardName name={faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
          <CardLastMessage message={faker.lorem.sentence()} count={faker.number.int({min:1, max:15})} />
        </CardRoom>
        <CardRoom image={faker.image.avatar()}>
          <CardName name={faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
          <CardLastMessage message={faker.lorem.sentence()} count={faker.number.int({min:1, max:15})} />
        </CardRoom>
      </LeftBar>
      <WrapperChat>
        <WrapperMessage />
      </WrapperChat>
    </main>
  )
}


