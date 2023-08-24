import style from './message.module.css'

export const Message = ({ message, position }: any) => {
    return (
        <div
            className={style.contentMessage}
            style={{
                alignSelf: `${position ? 'flex-end' : 'flex-start'}`,
            }}
        >
            <div className={style.contentMessageHeader}>
                <div className={style.nameUserMessage}>{message.from}</div>
                <time className={style.dateMessage}>
                    {new Date(message.createdAt).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    })}
                </time>
            </div>
            <div className={style.contentMessageBody}>{message.body}</div>
        </div>
    )
}
