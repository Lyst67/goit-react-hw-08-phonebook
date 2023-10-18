import { useSelector, useDispatch } from "react-redux";
import css from './ContactsList.module.css';
import { selectIsLoading, selectError, selectFilteredContacts } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts, deleteContact } from "redux/operations";

export const ContactsList = () => {
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchContacts())}, [dispatch])

    const deleteElement = (event) => {
       dispatch(deleteContact(event.target.id))  
    } 
    
    const filter = useSelector(selectFilteredContacts);
    
    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <ul className={css.cont_list}>
                {filter.sort((a, b) => {
                    const nameA = a.name.toLowerCase(); 
                    const nameB = b.name.toLowerCase(); 
                   if (nameA < nameB) { return -1;}
                   if (nameA > nameB) { return 1; }
                   return 0; }).map(({id, name, phone}) => {
                    return (
                    <li className={css.cont_item} key={id}>
                            <p>{name}: {phone}</p>
                            <button className={css.cont_btn} type="button"
                                id={id}
                                onClick={deleteElement}
                            >Delete</button>
                    </li>
                    )
                })}
            </ul>
        </> 
    )
}