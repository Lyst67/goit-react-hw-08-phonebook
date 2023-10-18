import css from "../RegisterForm/RegisterForm.module.css"
export const LogInForm = () => {
     const handleSubmit = (evt) => {
        evt.preventDefault()
    }
    return (
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
    )
}