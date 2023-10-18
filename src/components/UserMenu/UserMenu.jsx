import css from "./UserMenu.module.css"

export const UserMenu = () => {
    return (
        <div className={css.menu}>
            <p>Welcome: mango@mail.com !</p>
           <button className={css.menu_btn} type="button">Logout</button>
        </div>
    )
}