import { messages } from '../../mooks'
import { Message } from './Message'

export const WrapperMessage = () => {
    return (
        <div className='flex flex-col justify-end items-center pb-32 px-3 gap-3 pt-10'>
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    )
}
