import { faker } from '@faker-js/faker'

export const WrapperReactMessage = () => {
  return (
    <div className='flex flex-row gap-2 justify-center items-center'>
      {faker.internet.emoji({ types: ['activity', 'flag', 'food', 'smiley'] })}
      {faker.internet.emoji({ types: ['activity', 'flag', 'food', 'smiley'] })}
      {faker.internet.emoji({ types: ['activity', 'flag', 'food', 'smiley'] })}
      {faker.internet.emoji({ types: ['activity', 'flag', 'food', 'smiley'] })}
      {faker.internet.emoji({ types: ['activity', 'flag', 'food', 'smiley'] })}
    </div>
  )
}
