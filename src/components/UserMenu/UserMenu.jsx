import { useDispatch, useSelector } from "react-redux"
import css from "./UserMenu.module.css"
import { selectUserName } from "redux/auth/auth-selectors"
import { logOutThunk } from "redux/auth/auth-operations"

export const UserMenu = () => {
    const userName = useSelector(selectUserName)
    const dispatch = useDispatch()
    return (
        <div className={css.menu}>
            <p>Welcome: {userName} !</p>
           <button className={css.menu_btn} type="button" onClick={dispatch(logOutThunk())}>Logout</button>
        </div>
    )
}