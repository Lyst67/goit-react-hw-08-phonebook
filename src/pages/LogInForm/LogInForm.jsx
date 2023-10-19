import { logInThunk } from "redux/auth/auth-operations"
import css from "../RegisterForm/RegisterForm.module.css"
import { useDispatch } from "react-redux"

export const LogInForm = () => {
    const dispatch = useDispatch()

     const handleSubmit = (evt) => {
         evt.preventDefault()
          const form = evt.currentTarget;
        dispatch(logInThunk({
            email: form.elements.email.value,
            password: form.elements.password.value,
        })) 
    }

    return (
        <>
            <h1 className={css.title}>Please enter your login!</h1>
        <form className={css.form_thumb} onSubmit={handleSubmit}>
            <label className={css.form_label}>
                Email
               <input className={css.form_input} type="email" name="email"/> 
            </label>
            <label className={css.form_label}>
                Password
               <input className={css.form_input} type="password" name="password"/> 
            </label>
            <button type="submit" className={css.form_btn}>Log In</button>
        </form>     
        </>
      
    )
}