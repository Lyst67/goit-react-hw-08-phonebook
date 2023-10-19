import { Navigation } from "components/Navigation/Navigation"
import css from "./AppBar.module.css"
import { UserMenu } from "components/UserMenu/UserMenu"
import { AuthNav } from "components/AuthNav/AuthNav"
import { selectIsLogedIn } from "redux/auth/auth-selectors"
import { useSelector } from "react-redux"

export const AppBar = () => {
      const isLogedIn = useSelector(selectIsLogedIn)
    return (
        <header className={css.header}>
            <Navigation />
            {isLogedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}