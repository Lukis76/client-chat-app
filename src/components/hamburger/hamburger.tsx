import style from './hamburger.module.css'

export const Hamburger = () => {
    return (
        <button className={style.hamburger} aria-expanded>
            <div>
                <span />
                <span />
                <span />
            </div>
        </button>
    )
}
