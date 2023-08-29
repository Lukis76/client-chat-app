'use client'

import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { CardLastMessage } from '../components/ui/CardLastMessage'
import { CardName } from '../components/ui/CardName'
import { CardRoom } from '../components/ui/CardRoom'
import { WrapperChat } from '../components/ui/WrapperChat'
import { WrapperMessage } from '../components/ui/WrapperMessage'
import { LeftBar } from '../components/ui/leftBar'
import { faker} from '@faker-js/faker'

export default function Home() {
    return (
        <main className='flex flex-row w-screen h-screen'>
            <LeftBar>
                <CardRoom image={faker.image.avatar()}>
                    <CardName name={ faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
                    <CardLastMessage message={faker.lorem.sentence()} count={5} />
                </CardRoom>
                <CardRoom image={faker.image.avatar()}>
                    <CardName name={ faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
                    <CardLastMessage message={faker.lorem.sentence()} count={5} />
                </CardRoom>
                <CardRoom image={faker.image.avatar()}>
                    <CardName name={ faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
                    <CardLastMessage message={faker.lorem.sentence()} count={5} />
                </CardRoom>
                <CardRoom image={faker.image.avatar()}>
                    <CardName name={ faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
                    <CardLastMessage message={faker.lorem.sentence()} count={5} />
                </CardRoom>
                <CardRoom image={faker.image.avatar()}>
                    <CardName name={ faker.person.fullName()} time={faker.date.recent().toLocaleTimeString()} />
                    <CardLastMessage message={faker.lorem.sentence()} count={5} />
                </CardRoom>
            </LeftBar>
            <WrapperChat>
                <WrapperMessage />
            </WrapperChat>
        </main>
    )
}

{
    /* <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
<Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
<Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
<Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
<Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
<Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" /> */
}
