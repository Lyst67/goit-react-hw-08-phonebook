import { ContactsList } from "components/ContactsList/ContactsList"
import { Filter } from "components/Filter/Filter"
import css from "./Contacts.module.css"
import { Link, Outlet } from "react-router-dom"



export const Contacts = () => {
    const handleDeletBtn = () => {
        
    }
    return (
        <div className={css.contacts_container}>
            <h1 className={css.title}>Phonebook</h1>
            <button className={css.add_btn} type="button" onClick={handleDeletBtn}>
                <Link className={css.add_link} to="add">Add Contact</Link></button>
            <Outlet/>
            <h2 className={css.contacts_title}>Contacts</h2>
             <Filter />
            <ContactsList/>
        </div>

    )
}