import { ContactsList } from "components/ContactsList/ContactsList"
import { Filter } from "components/Filter/Filter"
import css from "./Contacts.module.css"
import { Link, Outlet } from "react-router-dom"

const Contacts = () => {
   
    return (
        <div className={css.contacts_container}>
                <Link className={css.add_link} to="add">Add Contact</Link>
            <Outlet/>
            <h2 className={css.contacts_title}>Your contacts</h2>
             <Filter />
            <ContactsList/>
        </div>

    )
}
export default Contacts;