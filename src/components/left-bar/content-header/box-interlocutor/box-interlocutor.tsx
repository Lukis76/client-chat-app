import style from './box-interlocutor.module.css'

export const BoxInterlocutor = () => {
    return (
        <div className={style.boxContentInterlocutor}>
            <div className={style.interlocutorContentImage}>
                <img
                    src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/41/4134d6f93e0610a102de3496d65b47c560c02fa5_full.jpg'
                    alt=''
                />
            </div>
            <div className={style.interlocutorContentInfo}>
                <div className={style.sectionHeader}>
                    <h5 className={style.interlocutorName}>Nome do interlocutor</h5>
                    <small>18:20</small>
                </div>
                <div className={style.sectionMessage}>
                    <p>Descrição do interlocutor</p>
                    <i>
                        
                    </i>
                </div>
            </div>
        </div>
    )
}
