import css from "./Contact.module.css"
import { BsTelephoneFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

export default function Contact({ contact: { id, name, number }, deleteContact }) {
    return (
        <div className={css.contactContainer}>
            <ul>
                <li className={css.contactItems}>
                    <IoPersonSharp className={css.icon} size="23"/>    
                    <p>{name}</p>
                </li>
                <li className={css.contactItems}>
                    <BsTelephoneFill className={css.icon} size="23"/> 
                    <p>{number}</p> 
                </li>
            </ul>
            <button type="button" className={css.contactBtn} onClick={() => deleteContact(id)}>Delete</button>
        </div>
    )
}