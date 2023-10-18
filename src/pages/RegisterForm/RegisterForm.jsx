import css from "./RegisterForm.module.css"
export const RegisterForm = () => {
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }
    return (
        <form className={css.form_thumb} onSubmit={handleSubmit}>
            <label className={css.form_label}>
                Name
               <input className={css.form_input} type="text" name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name"
                required/> 
            </label>
            <label className={css.form_label}>
                Email
               <input className={css.form_input} type="email" name="email"/> 
            </label>
            <label className={css.form_label}>
                Password
               <input className={css.form_input} type="password" name="password"/> 
            </label>
            <button type="submit" className={css.form_btn}>Register</button>
        </form>
    )
}